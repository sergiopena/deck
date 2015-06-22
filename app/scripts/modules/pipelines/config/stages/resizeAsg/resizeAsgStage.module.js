'use strict';

let angular = require('angular');

module.exports = angular.module('spinnaker.pipelines.stage.resizeAsg', [
  require('./resizeAsgStage.js'),
  require('../stage.module.js'),
  require('../core/stage.core.module.js'),
  require('../../../../account/account.module.js'),
  require('./resizeAsgExecutionDetails.controller.js'),
]).name;
