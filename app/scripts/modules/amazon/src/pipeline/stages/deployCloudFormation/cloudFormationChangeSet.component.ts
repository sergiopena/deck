import { module } from 'angular';
import { react2angular } from 'react2angular';

import { CloudFormationChangeSetInfo } from './CloudFormationChangeSetInfo';

export const CLOUD_FORMATION_CHANGE_SET_INFO = 'spinnaker.amazon.cloudformation.changetset.info.component';

module(CLOUD_FORMATION_CHANGE_SET_INFO, []).component(
  'cloudFormationChangeSetInfo',
  react2angular(CloudFormationChangeSetInfo, ['stage']),
);
