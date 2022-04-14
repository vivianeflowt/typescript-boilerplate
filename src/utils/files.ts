/* eslint-disable @typescript-eslint/no-explicit-any */
import fs from 'fs-extra'
import globby from 'globby'
import f from 'lodash/fp'
import { basename, join, resolve } from 'path'

export const getFileList = async (...args: string[]): Promise<string[]> =>
  globby.globby([...args]).then((files) =>
    f
      .pipe(
        f.compact,
        f.map((file: string) => {
          if (exists(file)) {
            return resolve(file)
          }
          return null
        })
      )(files)
      .sort((a: string, b: string) => a.localeCompare(b))
  )

export const isFile = (path: string): boolean => fs.statSync(path).isFile()

export const isDirectory = (path: string): boolean =>
  fs.statSync(path).isDirectory()

export const exists = (path: string): boolean => fs.existsSync(path)

export const writeTextFile = async (
  file: string,
  data: string
): Promise<void> => fs.writeFile(file, data)

export const writeJsonFile = async (
  file: string,
  json: object
): Promise<void> =>
  fs.writeJson(
    file,
    JSON.stringify(json, (_key: string, value: any) => {
      // Filtering out properties
      if (typeof value === `string`) {
        return undefined
      }
      return value
    })
  )

export const readTextFile = async (file: string): Promise<string> =>
  fs.readFile(file, { encoding: `utf8` })

export const readJsonFile = async (file: string): Promise<object> =>
  fs.readJson(file)

export const copyFiles =
  (...files: string[]) =>
  async (destination: string): Promise<void> => {
    if (exists(destination)) {
      await Promise.all([
        ...files.map(async (file) => {
          const filename = basename(file)
          if (!fs.existsSync(join(destination, filename))) {
            return fs.copyFile(file, join(destination, filename))
          }
        }),
      ])
    }
  }

export const createDirectory = (...args: string[]): void => {
  args.map((path) => {
    if (!exists(path)) {
      fs.mkdirSync(resolve(path), { recursive: true })
    }
  })
}

export const removeDirectory = (...args: string[]): void => {
  args.map((path) => {
    if (!exists(path)) {
      fs.rm(resolve(path), { recursive: true })
    }
  })
}
