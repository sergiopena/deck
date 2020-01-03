import { module } from 'angular';

import {
  ArtifactReferenceService,
  ExecutionDetailsTasks,
  ExpectedArtifactService,
  IStage,
  Registry,
} from '@spinnaker/core';

import { EvaluateCloudFormationChangeSetExecutionMarkerIcon } from './evaluateCloudFormationChangeSetExecutionMarkerIcon';
import { EvaluateCloudFormationChangeSetExecutionLabel } from './evaluateCloudFormationChangeSetExecutionLabel';
import { EvaluateCloudFormationChangeSetExecutionDetails } from './evaluateCloudFormationChangeSetExecutionDetails';

import { DeployCloudFormationStackConfigController } from './deployCloudFormationStackConfig.controller';

import { CLOUD_FORMATION_CHANGE_SET_INFO } from './cloudFormationChangeSet.component';
import { CLOUD_FROMATION_CHANGE_SET_INFO } from './CloudFromationChangeSetInfo';
export const DEPLOY_CLOUDFORMATION_STACK_STAGE = 'spinnaker.amazon.pipeline.stages.deployCloudFormationStage';

module(DEPLOY_CLOUDFORMATION_STACK_STAGE, [CLOUD_FORMATION_CHANGE_SET_INFO, CLOUD_FROMATION_CHANGE_SET_INFO])
  .config(() => {
    Registry.pipeline.registerStage({
      label: 'Deploy (CloudFormation Stack)',
      description: 'Deploy a CloudFormation Stack',
      key: 'deployCloudFormation',
      cloudProvider: 'aws',
      templateUrl: require('./deployCloudFormationStackConfig.html'),
      controller: 'DeployCloudFormationStackConfigController',
      controllerAs: 'ctrl',
      useCustomTooltip: true,
      executionDetailsSections: [ExecutionDetailsTasks, EvaluateCloudFormationChangeSetExecutionDetails],
      executionLabelComponent: EvaluateCloudFormationChangeSetExecutionLabel,
      producesArtifacts: true,
      supportsCustomTimeout: true,
      validators: [],
      markerIcon: EvaluateCloudFormationChangeSetExecutionMarkerIcon,
      accountExtractor: (stage: IStage): string[] => (stage.account ? [stage.account] : []),
      configAccountExtractor: (stage: any): string[] => (stage.account ? [stage.account] : []),
      artifactExtractor: ExpectedArtifactService.accumulateArtifacts(['stackArtifactId', 'requiredArtifactIds']),
      artifactRemover: ArtifactReferenceService.removeArtifactFromFields(['stackArtifactId', 'requiredArtifactIds']),
    });
  })
  .controller('DeployCloudFormationStackConfigController', DeployCloudFormationStackConfigController);
