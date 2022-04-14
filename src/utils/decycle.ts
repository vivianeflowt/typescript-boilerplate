/* eslint-disable @typescript-eslint/ban-ts-comment */
const visitedObjectsSymbol = Symbol('visitedObjects');
const currentPathSymbol = Symbol('currentPath');

export function decircularize(input, options = {}) {
  if (typeof input !== 'object' || input === null) {
    return input;
  }

  // @ts-ignore
  const currentPath = options[currentPathSymbol] || ['<root>'];
  // @ts-ignore
  const onCircular = options?.onCircular || defaultTransform;
  const visitedObjects = (options[visitedObjectsSymbol] || []).concat({
    path: currentPath,
    object: input,
  });

  if (Array.isArray(input)) {
    return input.map((object, index) => {
      const nextPath = currentPath.concat(index);

      const circularPath = visitedObjects.find((x) => x.object === object);
      if (circularPath != null) {
        return verifyOnCircular(circularPath, onCircular, nextPath);
      }

      return decircularize(object, {
        [visitedObjectsSymbol]: visitedObjects,
        [currentPathSymbol]: nextPath,
        onCircular,
      });
    });
  }

  const output = {};
  for (const key of Object.keys(input)) {
    const object = input[key];
    const nextPath = currentPath.concat(key);

    const circularPath = visitedObjects.find((x) => x.object === object);
    if (circularPath != null) {
      output[key] = verifyOnCircular(circularPath, onCircular, nextPath);
      continue;
    }

    output[key] = decircularize(object, {
      [visitedObjectsSymbol]: visitedObjects,
      [currentPathSymbol]: nextPath,
      onCircular,
    });
  }

  return output;
}

function verifyOnCircular(circularPath, onCircular, offendingPath) {
  const result = onCircular(
    circularPath.object,
    circularPath.path,
    offendingPath,
  );

  if (result === circularPath.object) {
    throw new Error('onCircular must not return the offending object');
  }

  return decircularize(result, {
    onCircular: () => {
      throw new Error('onCircular must not return a circular structure');
    },
  });
}

function defaultTransform(object, path) {
  return `[Circular to: ${path.join('.')}]`;
}
