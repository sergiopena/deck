import * as React from 'react';

import { IExecutionDetailsSectionProps } from 'core/pipeline';
import { IStage } from 'core/domain';
import { ExecutionDetailsSection } from 'core/pipeline/config/stages/common';
import {
  EvaluateCloudFormationChangeSetExecutionApproval,
  IEvaluateCloudFormationChangeSetExecutionApprovalState,
} from './evaluateCloudFormationChangeSetExecutionApproval';

export interface IEvaluateCloudFormationChangeSetExecutionDetailsState {
  parentDeployStage: IStage;
}

export class EvaluateCloudFormationChangeSetExecutionDetails extends React.Component<
  IExecutionDetailsSectionProps,
  IEvaluateCloudFormationChangeSetExecutionApprovalState
> {
  public static title = 'Change Set Execution';

  constructor(props: IExecutionDetailsSectionProps) {
    super(props);
  }

  public render() {
    const { application, execution, stage, current, name } = this.props;
    const hasReplacement = stage.context.changeSetIsReplacement;
    if (hasReplacement && stage.isRunning && stage.context.actionOnReplacement === 'ask') {
      return (
        <ExecutionDetailsSection name={name} current={current}>
          <EvaluateCloudFormationChangeSetExecutionApproval
            key={stage.refId}
            application={application}
            execution={execution}
            stage={stage}
          />
        </ExecutionDetailsSection>
      );
    } else {
      return <br />;
    }
  }
}
