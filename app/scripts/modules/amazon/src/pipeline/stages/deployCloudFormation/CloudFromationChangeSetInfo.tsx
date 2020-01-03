import React from 'react';

import { module } from 'angular';
import { react2angular } from 'react2angular';

import { IStage, IStageConfigProps, StageConfigField } from '@spinnaker/core';

export interface ICloudFromationChangeSetInfoProps {
  stage: IStage;
  onChange: (stage: IStage) => void;
}

export const CloudFromationChangeSetInfo: React.SFC<ICloudFromationChangeSetInfoProps> = props => {
  const { stage } = props;

  const onChange = (value: string) => {
    console.log(name + value);
    stage.changeSetName = value;
    console.log(stage);
  };

  /*    return  (
        <div>
            <hr />
            <h4>Fucking ChangeSet Configuration</h4>
            <StageConfigField label="ChangeSet Name" helpkey='someone'>
                <input
                    className="form-control input-sm"
                    type="text"
                    value={ stage.changeSetName }
                    onChange={ e => onChange(e.target.value)} 
                />
            </StageConfigField>
        </div>
    )*/
  return <div>CloudFromation</div>;
};

export const CLOUD_FROMATION_CHANGE_SET_INFO = 'spinnaker.amazon.cloudfromation.changetset.info.component';

module(CLOUD_FROMATION_CHANGE_SET_INFO, []).component(
  'cloudFromationChangeSetInfo',
  react2angular(CloudFromationChangeSetInfo, ['stage']),
);
