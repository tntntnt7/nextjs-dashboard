/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/node-gyp-build@4.8.1";
exports.ids = ["vendor-chunks/node-gyp-build@4.8.1"];
exports.modules = {

/***/ "(action-browser)/./node_modules/.pnpm/node-gyp-build@4.8.1/node_modules/node-gyp-build/index.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/.pnpm/node-gyp-build@4.8.1/node_modules/node-gyp-build/index.js ***!
  \**************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const runtimeRequire =  true ? require : 0 // eslint-disable-line\nif (typeof runtimeRequire.addon === 'function') { // if the platform supports native resolving prefer that\n  module.exports = runtimeRequire.addon.bind(runtimeRequire)\n} else { // else use the runtime version here\n  module.exports = __webpack_require__(/*! ./node-gyp-build.js */ \"(action-browser)/./node_modules/.pnpm/node-gyp-build@4.8.1/node_modules/node-gyp-build/node-gyp-build.js\")\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFjdGlvbi1icm93c2VyKS8uL25vZGVfbW9kdWxlcy8ucG5wbS9ub2RlLWd5cC1idWlsZEA0LjguMS9ub2RlX21vZHVsZXMvbm9kZS1neXAtYnVpbGQvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUEsdUJBQXVCLEtBQXlDLEdBQUcsT0FBdUIsR0FBRyxDQUFPO0FBQ3BHLGtEQUFrRDtBQUNsRDtBQUNBLEVBQUUsT0FBTztBQUNULEVBQUUsMktBQStDO0FBQ2pEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzLy5wbnBtL25vZGUtZ3lwLWJ1aWxkQDQuOC4xL25vZGVfbW9kdWxlcy9ub2RlLWd5cC1idWlsZC9pbmRleC5qcz80ZjNkIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHJ1bnRpbWVSZXF1aXJlID0gdHlwZW9mIF9fd2VicGFja19yZXF1aXJlX18gPT09ICdmdW5jdGlvbicgPyBfX25vbl93ZWJwYWNrX3JlcXVpcmVfXyA6IHJlcXVpcmUgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuaWYgKHR5cGVvZiBydW50aW1lUmVxdWlyZS5hZGRvbiA9PT0gJ2Z1bmN0aW9uJykgeyAvLyBpZiB0aGUgcGxhdGZvcm0gc3VwcG9ydHMgbmF0aXZlIHJlc29sdmluZyBwcmVmZXIgdGhhdFxuICBtb2R1bGUuZXhwb3J0cyA9IHJ1bnRpbWVSZXF1aXJlLmFkZG9uLmJpbmQocnVudGltZVJlcXVpcmUpXG59IGVsc2UgeyAvLyBlbHNlIHVzZSB0aGUgcnVudGltZSB2ZXJzaW9uIGhlcmVcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL25vZGUtZ3lwLWJ1aWxkLmpzJylcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(action-browser)/./node_modules/.pnpm/node-gyp-build@4.8.1/node_modules/node-gyp-build/index.js\n");

/***/ }),

/***/ "(action-browser)/./node_modules/.pnpm/node-gyp-build@4.8.1/node_modules/node-gyp-build/node-gyp-build.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/.pnpm/node-gyp-build@4.8.1/node_modules/node-gyp-build/node-gyp-build.js ***!
  \***********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var fs = __webpack_require__(/*! fs */ \"fs\")\nvar path = __webpack_require__(/*! path */ \"path\")\nvar os = __webpack_require__(/*! os */ \"os\")\n\n// Workaround to fix webpack's build warnings: 'the request of a dependency is an expression'\nvar runtimeRequire =  true ? require : 0 // eslint-disable-line\n\nvar vars = (process.config && process.config.variables) || {}\nvar prebuildsOnly = !!process.env.PREBUILDS_ONLY\nvar abi = process.versions.modules // TODO: support old node where this is undef\nvar runtime = isElectron() ? 'electron' : (isNwjs() ? 'node-webkit' : 'node')\n\nvar arch = process.env.npm_config_arch || os.arch()\nvar platform = process.env.npm_config_platform || os.platform()\nvar libc = process.env.LIBC || (isAlpine(platform) ? 'musl' : 'glibc')\nvar armv = process.env.ARM_VERSION || (arch === 'arm64' ? '8' : vars.arm_version) || ''\nvar uv = (process.versions.uv || '').split('.')[0]\n\nmodule.exports = load\n\nfunction load (dir) {\n  return runtimeRequire(load.resolve(dir))\n}\n\nload.resolve = load.path = function (dir) {\n  dir = path.resolve(dir || '.')\n\n  try {\n    var name = runtimeRequire(path.join(dir, 'package.json')).name.toUpperCase().replace(/-/g, '_')\n    if (process.env[name + '_PREBUILD']) dir = process.env[name + '_PREBUILD']\n  } catch (err) {}\n\n  if (!prebuildsOnly) {\n    var release = getFirst(path.join(dir, 'build/Release'), matchBuild)\n    if (release) return release\n\n    var debug = getFirst(path.join(dir, 'build/Debug'), matchBuild)\n    if (debug) return debug\n  }\n\n  var prebuild = resolve(dir)\n  if (prebuild) return prebuild\n\n  var nearby = resolve(path.dirname(process.execPath))\n  if (nearby) return nearby\n\n  var target = [\n    'platform=' + platform,\n    'arch=' + arch,\n    'runtime=' + runtime,\n    'abi=' + abi,\n    'uv=' + uv,\n    armv ? 'armv=' + armv : '',\n    'libc=' + libc,\n    'node=' + process.versions.node,\n    process.versions.electron ? 'electron=' + process.versions.electron : '',\n     true ? 'webpack=true' : 0 // eslint-disable-line\n  ].filter(Boolean).join(' ')\n\n  throw new Error('No native build was found for ' + target + '\\n    loaded from: ' + dir + '\\n')\n\n  function resolve (dir) {\n    // Find matching \"prebuilds/<platform>-<arch>\" directory\n    var tuples = readdirSync(path.join(dir, 'prebuilds')).map(parseTuple)\n    var tuple = tuples.filter(matchTuple(platform, arch)).sort(compareTuples)[0]\n    if (!tuple) return\n\n    // Find most specific flavor first\n    var prebuilds = path.join(dir, 'prebuilds', tuple.name)\n    var parsed = readdirSync(prebuilds).map(parseTags)\n    var candidates = parsed.filter(matchTags(runtime, abi))\n    var winner = candidates.sort(compareTags(runtime))[0]\n    if (winner) return path.join(prebuilds, winner.file)\n  }\n}\n\nfunction readdirSync (dir) {\n  try {\n    return fs.readdirSync(dir)\n  } catch (err) {\n    return []\n  }\n}\n\nfunction getFirst (dir, filter) {\n  var files = readdirSync(dir).filter(filter)\n  return files[0] && path.join(dir, files[0])\n}\n\nfunction matchBuild (name) {\n  return /\\.node$/.test(name)\n}\n\nfunction parseTuple (name) {\n  // Example: darwin-x64+arm64\n  var arr = name.split('-')\n  if (arr.length !== 2) return\n\n  var platform = arr[0]\n  var architectures = arr[1].split('+')\n\n  if (!platform) return\n  if (!architectures.length) return\n  if (!architectures.every(Boolean)) return\n\n  return { name, platform, architectures }\n}\n\nfunction matchTuple (platform, arch) {\n  return function (tuple) {\n    if (tuple == null) return false\n    if (tuple.platform !== platform) return false\n    return tuple.architectures.includes(arch)\n  }\n}\n\nfunction compareTuples (a, b) {\n  // Prefer single-arch prebuilds over multi-arch\n  return a.architectures.length - b.architectures.length\n}\n\nfunction parseTags (file) {\n  var arr = file.split('.')\n  var extension = arr.pop()\n  var tags = { file: file, specificity: 0 }\n\n  if (extension !== 'node') return\n\n  for (var i = 0; i < arr.length; i++) {\n    var tag = arr[i]\n\n    if (tag === 'node' || tag === 'electron' || tag === 'node-webkit') {\n      tags.runtime = tag\n    } else if (tag === 'napi') {\n      tags.napi = true\n    } else if (tag.slice(0, 3) === 'abi') {\n      tags.abi = tag.slice(3)\n    } else if (tag.slice(0, 2) === 'uv') {\n      tags.uv = tag.slice(2)\n    } else if (tag.slice(0, 4) === 'armv') {\n      tags.armv = tag.slice(4)\n    } else if (tag === 'glibc' || tag === 'musl') {\n      tags.libc = tag\n    } else {\n      continue\n    }\n\n    tags.specificity++\n  }\n\n  return tags\n}\n\nfunction matchTags (runtime, abi) {\n  return function (tags) {\n    if (tags == null) return false\n    if (tags.runtime && tags.runtime !== runtime && !runtimeAgnostic(tags)) return false\n    if (tags.abi && tags.abi !== abi && !tags.napi) return false\n    if (tags.uv && tags.uv !== uv) return false\n    if (tags.armv && tags.armv !== armv) return false\n    if (tags.libc && tags.libc !== libc) return false\n\n    return true\n  }\n}\n\nfunction runtimeAgnostic (tags) {\n  return tags.runtime === 'node' && tags.napi\n}\n\nfunction compareTags (runtime) {\n  // Precedence: non-agnostic runtime, abi over napi, then by specificity.\n  return function (a, b) {\n    if (a.runtime !== b.runtime) {\n      return a.runtime === runtime ? -1 : 1\n    } else if (a.abi !== b.abi) {\n      return a.abi ? -1 : 1\n    } else if (a.specificity !== b.specificity) {\n      return a.specificity > b.specificity ? -1 : 1\n    } else {\n      return 0\n    }\n  }\n}\n\nfunction isNwjs () {\n  return !!(process.versions && process.versions.nw)\n}\n\nfunction isElectron () {\n  if (process.versions && process.versions.electron) return true\n  if (process.env.ELECTRON_RUN_AS_NODE) return true\n  return typeof window !== 'undefined' && window.process && window.process.type === 'renderer'\n}\n\nfunction isAlpine (platform) {\n  return platform === 'linux' && fs.existsSync('/etc/alpine-release')\n}\n\n// Exposed for unit tests\n// TODO: move to lib\nload.parseTags = parseTags\nload.matchTags = matchTags\nload.compareTags = compareTags\nload.parseTuple = parseTuple\nload.matchTuple = matchTuple\nload.compareTuples = compareTuples\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFjdGlvbi1icm93c2VyKS8uL25vZGVfbW9kdWxlcy8ucG5wbS9ub2RlLWd5cC1idWlsZEA0LjguMS9ub2RlX21vZHVsZXMvbm9kZS1neXAtYnVpbGQvbm9kZS1neXAtYnVpbGQuanMiLCJtYXBwaW5ncyI6IkFBQUEsU0FBUyxtQkFBTyxDQUFDLGNBQUk7QUFDckIsV0FBVyxtQkFBTyxDQUFDLGtCQUFNO0FBQ3pCLFNBQVMsbUJBQU8sQ0FBQyxjQUFJOztBQUVyQjtBQUNBLHFCQUFxQixLQUF5QyxHQUFHLE9BQXVCLEdBQUcsQ0FBTzs7QUFFbEc7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxLQUF5QyxvQkFBb0IsQ0FBRTtBQUNuRTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7O0FBRWY7O0FBRUEsa0JBQWtCLGdCQUFnQjtBQUNsQzs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzLy5wbnBtL25vZGUtZ3lwLWJ1aWxkQDQuOC4xL25vZGVfbW9kdWxlcy9ub2RlLWd5cC1idWlsZC9ub2RlLWd5cC1idWlsZC5qcz9iOWU5Il0sInNvdXJjZXNDb250ZW50IjpbInZhciBmcyA9IHJlcXVpcmUoJ2ZzJylcbnZhciBwYXRoID0gcmVxdWlyZSgncGF0aCcpXG52YXIgb3MgPSByZXF1aXJlKCdvcycpXG5cbi8vIFdvcmthcm91bmQgdG8gZml4IHdlYnBhY2sncyBidWlsZCB3YXJuaW5nczogJ3RoZSByZXF1ZXN0IG9mIGEgZGVwZW5kZW5jeSBpcyBhbiBleHByZXNzaW9uJ1xudmFyIHJ1bnRpbWVSZXF1aXJlID0gdHlwZW9mIF9fd2VicGFja19yZXF1aXJlX18gPT09ICdmdW5jdGlvbicgPyBfX25vbl93ZWJwYWNrX3JlcXVpcmVfXyA6IHJlcXVpcmUgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXG52YXIgdmFycyA9IChwcm9jZXNzLmNvbmZpZyAmJiBwcm9jZXNzLmNvbmZpZy52YXJpYWJsZXMpIHx8IHt9XG52YXIgcHJlYnVpbGRzT25seSA9ICEhcHJvY2Vzcy5lbnYuUFJFQlVJTERTX09OTFlcbnZhciBhYmkgPSBwcm9jZXNzLnZlcnNpb25zLm1vZHVsZXMgLy8gVE9ETzogc3VwcG9ydCBvbGQgbm9kZSB3aGVyZSB0aGlzIGlzIHVuZGVmXG52YXIgcnVudGltZSA9IGlzRWxlY3Ryb24oKSA/ICdlbGVjdHJvbicgOiAoaXNOd2pzKCkgPyAnbm9kZS13ZWJraXQnIDogJ25vZGUnKVxuXG52YXIgYXJjaCA9IHByb2Nlc3MuZW52Lm5wbV9jb25maWdfYXJjaCB8fCBvcy5hcmNoKClcbnZhciBwbGF0Zm9ybSA9IHByb2Nlc3MuZW52Lm5wbV9jb25maWdfcGxhdGZvcm0gfHwgb3MucGxhdGZvcm0oKVxudmFyIGxpYmMgPSBwcm9jZXNzLmVudi5MSUJDIHx8IChpc0FscGluZShwbGF0Zm9ybSkgPyAnbXVzbCcgOiAnZ2xpYmMnKVxudmFyIGFybXYgPSBwcm9jZXNzLmVudi5BUk1fVkVSU0lPTiB8fCAoYXJjaCA9PT0gJ2FybTY0JyA/ICc4JyA6IHZhcnMuYXJtX3ZlcnNpb24pIHx8ICcnXG52YXIgdXYgPSAocHJvY2Vzcy52ZXJzaW9ucy51diB8fCAnJykuc3BsaXQoJy4nKVswXVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxvYWRcblxuZnVuY3Rpb24gbG9hZCAoZGlyKSB7XG4gIHJldHVybiBydW50aW1lUmVxdWlyZShsb2FkLnJlc29sdmUoZGlyKSlcbn1cblxubG9hZC5yZXNvbHZlID0gbG9hZC5wYXRoID0gZnVuY3Rpb24gKGRpcikge1xuICBkaXIgPSBwYXRoLnJlc29sdmUoZGlyIHx8ICcuJylcblxuICB0cnkge1xuICAgIHZhciBuYW1lID0gcnVudGltZVJlcXVpcmUocGF0aC5qb2luKGRpciwgJ3BhY2thZ2UuanNvbicpKS5uYW1lLnRvVXBwZXJDYXNlKCkucmVwbGFjZSgvLS9nLCAnXycpXG4gICAgaWYgKHByb2Nlc3MuZW52W25hbWUgKyAnX1BSRUJVSUxEJ10pIGRpciA9IHByb2Nlc3MuZW52W25hbWUgKyAnX1BSRUJVSUxEJ11cbiAgfSBjYXRjaCAoZXJyKSB7fVxuXG4gIGlmICghcHJlYnVpbGRzT25seSkge1xuICAgIHZhciByZWxlYXNlID0gZ2V0Rmlyc3QocGF0aC5qb2luKGRpciwgJ2J1aWxkL1JlbGVhc2UnKSwgbWF0Y2hCdWlsZClcbiAgICBpZiAocmVsZWFzZSkgcmV0dXJuIHJlbGVhc2VcblxuICAgIHZhciBkZWJ1ZyA9IGdldEZpcnN0KHBhdGguam9pbihkaXIsICdidWlsZC9EZWJ1ZycpLCBtYXRjaEJ1aWxkKVxuICAgIGlmIChkZWJ1ZykgcmV0dXJuIGRlYnVnXG4gIH1cblxuICB2YXIgcHJlYnVpbGQgPSByZXNvbHZlKGRpcilcbiAgaWYgKHByZWJ1aWxkKSByZXR1cm4gcHJlYnVpbGRcblxuICB2YXIgbmVhcmJ5ID0gcmVzb2x2ZShwYXRoLmRpcm5hbWUocHJvY2Vzcy5leGVjUGF0aCkpXG4gIGlmIChuZWFyYnkpIHJldHVybiBuZWFyYnlcblxuICB2YXIgdGFyZ2V0ID0gW1xuICAgICdwbGF0Zm9ybT0nICsgcGxhdGZvcm0sXG4gICAgJ2FyY2g9JyArIGFyY2gsXG4gICAgJ3J1bnRpbWU9JyArIHJ1bnRpbWUsXG4gICAgJ2FiaT0nICsgYWJpLFxuICAgICd1dj0nICsgdXYsXG4gICAgYXJtdiA/ICdhcm12PScgKyBhcm12IDogJycsXG4gICAgJ2xpYmM9JyArIGxpYmMsXG4gICAgJ25vZGU9JyArIHByb2Nlc3MudmVyc2lvbnMubm9kZSxcbiAgICBwcm9jZXNzLnZlcnNpb25zLmVsZWN0cm9uID8gJ2VsZWN0cm9uPScgKyBwcm9jZXNzLnZlcnNpb25zLmVsZWN0cm9uIDogJycsXG4gICAgdHlwZW9mIF9fd2VicGFja19yZXF1aXJlX18gPT09ICdmdW5jdGlvbicgPyAnd2VicGFjaz10cnVlJyA6ICcnIC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgXS5maWx0ZXIoQm9vbGVhbikuam9pbignICcpXG5cbiAgdGhyb3cgbmV3IEVycm9yKCdObyBuYXRpdmUgYnVpbGQgd2FzIGZvdW5kIGZvciAnICsgdGFyZ2V0ICsgJ1xcbiAgICBsb2FkZWQgZnJvbTogJyArIGRpciArICdcXG4nKVxuXG4gIGZ1bmN0aW9uIHJlc29sdmUgKGRpcikge1xuICAgIC8vIEZpbmQgbWF0Y2hpbmcgXCJwcmVidWlsZHMvPHBsYXRmb3JtPi08YXJjaD5cIiBkaXJlY3RvcnlcbiAgICB2YXIgdHVwbGVzID0gcmVhZGRpclN5bmMocGF0aC5qb2luKGRpciwgJ3ByZWJ1aWxkcycpKS5tYXAocGFyc2VUdXBsZSlcbiAgICB2YXIgdHVwbGUgPSB0dXBsZXMuZmlsdGVyKG1hdGNoVHVwbGUocGxhdGZvcm0sIGFyY2gpKS5zb3J0KGNvbXBhcmVUdXBsZXMpWzBdXG4gICAgaWYgKCF0dXBsZSkgcmV0dXJuXG5cbiAgICAvLyBGaW5kIG1vc3Qgc3BlY2lmaWMgZmxhdm9yIGZpcnN0XG4gICAgdmFyIHByZWJ1aWxkcyA9IHBhdGguam9pbihkaXIsICdwcmVidWlsZHMnLCB0dXBsZS5uYW1lKVxuICAgIHZhciBwYXJzZWQgPSByZWFkZGlyU3luYyhwcmVidWlsZHMpLm1hcChwYXJzZVRhZ3MpXG4gICAgdmFyIGNhbmRpZGF0ZXMgPSBwYXJzZWQuZmlsdGVyKG1hdGNoVGFncyhydW50aW1lLCBhYmkpKVxuICAgIHZhciB3aW5uZXIgPSBjYW5kaWRhdGVzLnNvcnQoY29tcGFyZVRhZ3MocnVudGltZSkpWzBdXG4gICAgaWYgKHdpbm5lcikgcmV0dXJuIHBhdGguam9pbihwcmVidWlsZHMsIHdpbm5lci5maWxlKVxuICB9XG59XG5cbmZ1bmN0aW9uIHJlYWRkaXJTeW5jIChkaXIpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZnMucmVhZGRpclN5bmMoZGlyKVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXR1cm4gW11cbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRGaXJzdCAoZGlyLCBmaWx0ZXIpIHtcbiAgdmFyIGZpbGVzID0gcmVhZGRpclN5bmMoZGlyKS5maWx0ZXIoZmlsdGVyKVxuICByZXR1cm4gZmlsZXNbMF0gJiYgcGF0aC5qb2luKGRpciwgZmlsZXNbMF0pXG59XG5cbmZ1bmN0aW9uIG1hdGNoQnVpbGQgKG5hbWUpIHtcbiAgcmV0dXJuIC9cXC5ub2RlJC8udGVzdChuYW1lKVxufVxuXG5mdW5jdGlvbiBwYXJzZVR1cGxlIChuYW1lKSB7XG4gIC8vIEV4YW1wbGU6IGRhcndpbi14NjQrYXJtNjRcbiAgdmFyIGFyciA9IG5hbWUuc3BsaXQoJy0nKVxuICBpZiAoYXJyLmxlbmd0aCAhPT0gMikgcmV0dXJuXG5cbiAgdmFyIHBsYXRmb3JtID0gYXJyWzBdXG4gIHZhciBhcmNoaXRlY3R1cmVzID0gYXJyWzFdLnNwbGl0KCcrJylcblxuICBpZiAoIXBsYXRmb3JtKSByZXR1cm5cbiAgaWYgKCFhcmNoaXRlY3R1cmVzLmxlbmd0aCkgcmV0dXJuXG4gIGlmICghYXJjaGl0ZWN0dXJlcy5ldmVyeShCb29sZWFuKSkgcmV0dXJuXG5cbiAgcmV0dXJuIHsgbmFtZSwgcGxhdGZvcm0sIGFyY2hpdGVjdHVyZXMgfVxufVxuXG5mdW5jdGlvbiBtYXRjaFR1cGxlIChwbGF0Zm9ybSwgYXJjaCkge1xuICByZXR1cm4gZnVuY3Rpb24gKHR1cGxlKSB7XG4gICAgaWYgKHR1cGxlID09IG51bGwpIHJldHVybiBmYWxzZVxuICAgIGlmICh0dXBsZS5wbGF0Zm9ybSAhPT0gcGxhdGZvcm0pIHJldHVybiBmYWxzZVxuICAgIHJldHVybiB0dXBsZS5hcmNoaXRlY3R1cmVzLmluY2x1ZGVzKGFyY2gpXG4gIH1cbn1cblxuZnVuY3Rpb24gY29tcGFyZVR1cGxlcyAoYSwgYikge1xuICAvLyBQcmVmZXIgc2luZ2xlLWFyY2ggcHJlYnVpbGRzIG92ZXIgbXVsdGktYXJjaFxuICByZXR1cm4gYS5hcmNoaXRlY3R1cmVzLmxlbmd0aCAtIGIuYXJjaGl0ZWN0dXJlcy5sZW5ndGhcbn1cblxuZnVuY3Rpb24gcGFyc2VUYWdzIChmaWxlKSB7XG4gIHZhciBhcnIgPSBmaWxlLnNwbGl0KCcuJylcbiAgdmFyIGV4dGVuc2lvbiA9IGFyci5wb3AoKVxuICB2YXIgdGFncyA9IHsgZmlsZTogZmlsZSwgc3BlY2lmaWNpdHk6IDAgfVxuXG4gIGlmIChleHRlbnNpb24gIT09ICdub2RlJykgcmV0dXJuXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgdGFnID0gYXJyW2ldXG5cbiAgICBpZiAodGFnID09PSAnbm9kZScgfHwgdGFnID09PSAnZWxlY3Ryb24nIHx8IHRhZyA9PT0gJ25vZGUtd2Via2l0Jykge1xuICAgICAgdGFncy5ydW50aW1lID0gdGFnXG4gICAgfSBlbHNlIGlmICh0YWcgPT09ICduYXBpJykge1xuICAgICAgdGFncy5uYXBpID0gdHJ1ZVxuICAgIH0gZWxzZSBpZiAodGFnLnNsaWNlKDAsIDMpID09PSAnYWJpJykge1xuICAgICAgdGFncy5hYmkgPSB0YWcuc2xpY2UoMylcbiAgICB9IGVsc2UgaWYgKHRhZy5zbGljZSgwLCAyKSA9PT0gJ3V2Jykge1xuICAgICAgdGFncy51diA9IHRhZy5zbGljZSgyKVxuICAgIH0gZWxzZSBpZiAodGFnLnNsaWNlKDAsIDQpID09PSAnYXJtdicpIHtcbiAgICAgIHRhZ3MuYXJtdiA9IHRhZy5zbGljZSg0KVxuICAgIH0gZWxzZSBpZiAodGFnID09PSAnZ2xpYmMnIHx8IHRhZyA9PT0gJ211c2wnKSB7XG4gICAgICB0YWdzLmxpYmMgPSB0YWdcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICB0YWdzLnNwZWNpZmljaXR5KytcbiAgfVxuXG4gIHJldHVybiB0YWdzXG59XG5cbmZ1bmN0aW9uIG1hdGNoVGFncyAocnVudGltZSwgYWJpKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodGFncykge1xuICAgIGlmICh0YWdzID09IG51bGwpIHJldHVybiBmYWxzZVxuICAgIGlmICh0YWdzLnJ1bnRpbWUgJiYgdGFncy5ydW50aW1lICE9PSBydW50aW1lICYmICFydW50aW1lQWdub3N0aWModGFncykpIHJldHVybiBmYWxzZVxuICAgIGlmICh0YWdzLmFiaSAmJiB0YWdzLmFiaSAhPT0gYWJpICYmICF0YWdzLm5hcGkpIHJldHVybiBmYWxzZVxuICAgIGlmICh0YWdzLnV2ICYmIHRhZ3MudXYgIT09IHV2KSByZXR1cm4gZmFsc2VcbiAgICBpZiAodGFncy5hcm12ICYmIHRhZ3MuYXJtdiAhPT0gYXJtdikgcmV0dXJuIGZhbHNlXG4gICAgaWYgKHRhZ3MubGliYyAmJiB0YWdzLmxpYmMgIT09IGxpYmMpIHJldHVybiBmYWxzZVxuXG4gICAgcmV0dXJuIHRydWVcbiAgfVxufVxuXG5mdW5jdGlvbiBydW50aW1lQWdub3N0aWMgKHRhZ3MpIHtcbiAgcmV0dXJuIHRhZ3MucnVudGltZSA9PT0gJ25vZGUnICYmIHRhZ3MubmFwaVxufVxuXG5mdW5jdGlvbiBjb21wYXJlVGFncyAocnVudGltZSkge1xuICAvLyBQcmVjZWRlbmNlOiBub24tYWdub3N0aWMgcnVudGltZSwgYWJpIG92ZXIgbmFwaSwgdGhlbiBieSBzcGVjaWZpY2l0eS5cbiAgcmV0dXJuIGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgaWYgKGEucnVudGltZSAhPT0gYi5ydW50aW1lKSB7XG4gICAgICByZXR1cm4gYS5ydW50aW1lID09PSBydW50aW1lID8gLTEgOiAxXG4gICAgfSBlbHNlIGlmIChhLmFiaSAhPT0gYi5hYmkpIHtcbiAgICAgIHJldHVybiBhLmFiaSA/IC0xIDogMVxuICAgIH0gZWxzZSBpZiAoYS5zcGVjaWZpY2l0eSAhPT0gYi5zcGVjaWZpY2l0eSkge1xuICAgICAgcmV0dXJuIGEuc3BlY2lmaWNpdHkgPiBiLnNwZWNpZmljaXR5ID8gLTEgOiAxXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAwXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGlzTndqcyAoKSB7XG4gIHJldHVybiAhIShwcm9jZXNzLnZlcnNpb25zICYmIHByb2Nlc3MudmVyc2lvbnMubncpXG59XG5cbmZ1bmN0aW9uIGlzRWxlY3Ryb24gKCkge1xuICBpZiAocHJvY2Vzcy52ZXJzaW9ucyAmJiBwcm9jZXNzLnZlcnNpb25zLmVsZWN0cm9uKSByZXR1cm4gdHJ1ZVxuICBpZiAocHJvY2Vzcy5lbnYuRUxFQ1RST05fUlVOX0FTX05PREUpIHJldHVybiB0cnVlXG4gIHJldHVybiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cucHJvY2VzcyAmJiB3aW5kb3cucHJvY2Vzcy50eXBlID09PSAncmVuZGVyZXInXG59XG5cbmZ1bmN0aW9uIGlzQWxwaW5lIChwbGF0Zm9ybSkge1xuICByZXR1cm4gcGxhdGZvcm0gPT09ICdsaW51eCcgJiYgZnMuZXhpc3RzU3luYygnL2V0Yy9hbHBpbmUtcmVsZWFzZScpXG59XG5cbi8vIEV4cG9zZWQgZm9yIHVuaXQgdGVzdHNcbi8vIFRPRE86IG1vdmUgdG8gbGliXG5sb2FkLnBhcnNlVGFncyA9IHBhcnNlVGFnc1xubG9hZC5tYXRjaFRhZ3MgPSBtYXRjaFRhZ3NcbmxvYWQuY29tcGFyZVRhZ3MgPSBjb21wYXJlVGFnc1xubG9hZC5wYXJzZVR1cGxlID0gcGFyc2VUdXBsZVxubG9hZC5tYXRjaFR1cGxlID0gbWF0Y2hUdXBsZVxubG9hZC5jb21wYXJlVHVwbGVzID0gY29tcGFyZVR1cGxlc1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(action-browser)/./node_modules/.pnpm/node-gyp-build@4.8.1/node_modules/node-gyp-build/node-gyp-build.js\n");

/***/ })

};
;