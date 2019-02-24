/* global global */
export let assign = (source, ...args) => {
  for (let i = 0, len = args.length; i < len; i++) {
    const arg = args[i]
    for (const p in arg) {
      source[p] = arg[p]
    }
  }
  return source
}
export let root =
  typeof self !== 'undefined'
    ? self : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
        ? global : this || (typeof exports !== 'undefined'
          ? exports : {})
export let requestAnimationFrame =
  root.requestAnimationFrame ||
  ((fn) => root.setTimeout(fn, 16))
export let cancelAnimationFrame =
  root.cancelAnimationFrame ||
  ((id) => root.clearTimeout(id))
