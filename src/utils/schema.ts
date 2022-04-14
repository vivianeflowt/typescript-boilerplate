import fs from 'fs-extra'
import Handlebars from 'handlebars'
import f from 'lodash/fp'
import os from 'os'
import { basename, join } from 'path'
import type { Nullable } from '../types/types'

Handlebars.registerHelper('@camelcase', (value: string): string =>
  f.camelCase(value)
)

Handlebars.registerHelper('@kelabcase', (value: string): string =>
  f.kebabCase(value)
)

Handlebars.registerHelper('@snakecase', (value: string): string =>
  f.snakeCase(value)
)

Handlebars.registerHelper('@lowercase', (value: string): string =>
  f.lowerCase(value)
)

Handlebars.registerHelper('@upperCase', (value: string): string =>
  f.upperCase(value)
)

Handlebars.registerHelper(
  '@capitalize',
  (value: string): string => value.charAt(0).toUpperCase() + value.slice(1)
)

export const expressions = [
  '@camelcase',
  '@kelabcase',
  '@snakecase',
  '@lowercase',
  '@uppercase',
]

// const parseFilename =
//   (...args: string[]) =>
//   (file: string): string => {
//     return f.first(
//       f.pipe(
//         f.map((item: string) => {
//           const avar = f.lowerCase(item);
//           const afile = f.lowerCase(path.basename(file));

//           if (afile.replace(avar, `{{${item}}}`) !== afile) {
//             return file.replace(item, `{{${item}}}`);
//           }
//           return null;
//         }),
//         f.compact,
//       )([...args]),
//     );
//   };

interface SchemaFileInfo {
  variables: string[]
  expressions: string[]
}

export const parseSchemaFile = async (
  file: string
): Promise<Nullable<SchemaFileInfo>> => {
  if (fs.existsSync(file)) {
    const data = await fs.readFile(file, { encoding: 'utf8' })
    const ast = Handlebars.parseWithoutProcessing(data)

    const variables = f
      .uniq(
        f.compact(
          ast.body
            .filter(({ type }) => type === 'MustacheStatement')
            .map(
              (statement: any) =>
                statement.params[0]?.original || statement.path?.original
            )
        )
      )
      .sort((a, b) => a.localeCompare(b))

    const expressions = f
      .uniq(
        f.compact(
          ast.body
            .filter(({ type }) => type === 'MustacheStatement')
            .map((statement: any) => {
              return statement.path?.original
            })
            .filter((item) => !variables.includes(item))
        )
      )
      .sort((a, b) => a.localeCompare(b))

    return {
      variables,
      expressions,
    }
  }
  return null
}

const getTempFolder = () => {
  return join(os.tmpdir(), `GURU${Date.now().toString()}`)
}

// const regex = new RegExp(`(${exp})`, 'i');
// data = data.replace(regex, '');
export const validateSchemaFile = async (file: string) => {
  const info = await parseSchemaFile(file)

  const invalidVar = info.variables.filter((item) => f.toLower(item) !== item)

  const invalidExp = info.expressions.filter(
    (item) => !expressions.includes(f.toLower(item))
  )

  return {
    validate: invalidVar.length === 0 && invalidExp.length === 0,
    variables: {
      found: [...info.variables],
      invalid: [...invalidVar],
    },
    expressions: {
      found: [...info.expressions],
      invalid: [...invalidExp],
    },
  }
}
