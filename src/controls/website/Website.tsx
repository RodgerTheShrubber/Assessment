import React from 'react';
import { englishStrings, AppStrings } from '../../data'

export interface WebsiteProps {
}

export interface WebsiteState {
  appStrings: AppStrings;
}

export class Website extends React.PureComponent<WebsiteProps, WebsiteState> {
  public constructor(props: WebsiteProps) {
    super(props);
    this.state = {
      appStrings: englishStrings
    }
  }

  public render(): JSX.Element {
    return <div>{englishStrings.heading}</div>
  }
}

