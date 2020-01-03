import * as React from 'react';

import { IStageConfigProps, StageConfigField, TextInput } from '@spinnaker/core';

interface ICloudFormationChangeSetInfo {
  //    changeSetName: string[];
}

export class CloudFormationChangeSetInfo extends React.Component<IStageConfigProps, ICloudFormationChangeSetInfo> {
  constructor(props: IStageConfigProps) {
    super(props);
  }

  private onChange = (value: string[]) => {
    console.log(value);
    this.props.stage.changeSetName = value;
  };

  private changeSetNameUpdated = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    this.props.updateStageField({ changeSetName: event.target.value });
    this.props.stage.changeSetName = event.target.value;
  };

  public render() {
    const { changeSetName } = this.props.stage;

    return (
      <div>
        <hr />
        <div>stage - {this.props.stage.name}</div>
        <h4>ChangeSet Configurtion</h4>
        <StageConfigField label="ChangeSet Name" helpkey="someone">
          <TextInput
            className="form-control"
            type="text"
            value={changeSetName}
            //onChange={ e=> this.onChange(e.target.value)}
            onChange={this.changeSetNameUpdated}
          />
        </StageConfigField>
      </div>
    );
  }
}
