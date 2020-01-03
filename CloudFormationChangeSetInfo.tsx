import * as React from 'react';

import { IStageConfigProps, StageConfigField } from '@spinnaker/core';

interface ICloudFormationChangeSetInfo {
  changeSetName: string[];
}

export class CloudFormationChangeSetInfo extends React.Component<IStageConfigProps, ICloudFormationChangeSetInfo> {
  constructor(props: IStageConfigProps) {
    super(props);
  }

  private onChange = (value: string[]) => {
    console.log(value);
    this.props.stage.changeSetName = value;
  };

  public render() {
    const { changeSetName } = this.props.stage;

    return (
      <div>
        <hr />
        <div>stage - {this.props.stage.name}</div>
        <h4>ChangeSet Configuration</h4>
        <StageConfigField label="ChangeSet Name" helpkey="someone">
          <input
            className="form-control input-sm"
            type="text"
            value={changeSetName}
            onChange={e => this.onChange(e.target.value)}
          />
        </StageConfigField>
      </div>
    );
  }
}
