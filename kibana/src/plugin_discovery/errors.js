'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createInvalidDirectoryError = createInvalidDirectoryError;
exports.isInvalidDirectoryError = isInvalidDirectoryError;
exports.createInvalidPackError = createInvalidPackError;
exports.isInvalidPackError = isInvalidPackError;
exports.createInvalidPluginError = createInvalidPluginError;
exports.isInvalidPluginError = isInvalidPluginError;
exports.createIncompatiblePluginVersionError = createIncompatiblePluginVersionError;
exports.isIncompatiblePluginVersionError = isIncompatiblePluginVersionError;

const errorCodeProperty = Symbol('pluginDiscovery/errorCode');

/**
 *  Thrown when reading a plugin directory fails, wraps failure
 *  @type {String}
 */
const ERROR_INVALID_DIRECTORY = 'ERROR_INVALID_DIRECTORY';
function createInvalidDirectoryError(sourceError, path) {
  sourceError[errorCodeProperty] = ERROR_INVALID_DIRECTORY;
  sourceError.path = path;
  return sourceError;
}
function isInvalidDirectoryError(error) {
  return error && error[errorCodeProperty] === ERROR_INVALID_DIRECTORY;
}

/**
 *  Thrown when trying to create a PluginPack for a path that
 *  is not a valid plugin definition
 *  @type {String}
 */
const ERROR_INVALID_PACK = 'ERROR_INVALID_PACK';
function createInvalidPackError(path, reason) {
  const error = new Error(`PluginPack${path ? ` at "${path}"` : ''} ${reason}`);
  error[errorCodeProperty] = ERROR_INVALID_PACK;
  error.path = path;
  return error;
}
function isInvalidPackError(error) {
  return error && error[errorCodeProperty] === ERROR_INVALID_PACK;
}

/**
 *  Thrown when trying to load a PluginSpec that is invalid for some reason
 *  @type {String}
 */
const ERROR_INVALID_PLUGIN = 'ERROR_INVALID_PLUGIN';
function createInvalidPluginError(spec, reason) {
  const error = new Error(`Plugin from ${spec.getId()} at ${spec.getPack().getPath()} is invalid because ${reason}`);
  error[errorCodeProperty] = ERROR_INVALID_PLUGIN;
  error.spec = spec;
  return error;
}
function isInvalidPluginError(error) {
  return error && error[errorCodeProperty] === ERROR_INVALID_PLUGIN;
}

/**
 *  Thrown when trying to load a PluginSpec whose version is incompatible
 *  @type {String}
 */
const ERROR_INCOMPATIBLE_PLUGIN_VERSION = 'ERROR_INCOMPATIBLE_PLUGIN_VERSION';
function createIncompatiblePluginVersionError(spec) {
  const error = new Error(`Plugin ${spec.getId()} is only compatible with Kibana version ${spec.getExpectedKibanaVersion()}`);
  error[errorCodeProperty] = ERROR_INCOMPATIBLE_PLUGIN_VERSION;
  error.spec = spec;
  return error;
}
function isIncompatiblePluginVersionError(error) {
  return error && error[errorCodeProperty] === ERROR_INCOMPATIBLE_PLUGIN_VERSION;
}
