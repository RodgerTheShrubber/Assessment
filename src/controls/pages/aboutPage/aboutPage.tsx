import React from 'react';
import { AppStrings } from '../../../data';

export interface AboutPageProps {
  appStrings: AppStrings
}

export interface AboutPageState {
}

export class AboutPage extends React.PureComponent<AboutPageProps, AboutPageState> {
  public constructor(props: AboutPageProps) {
    super(props);
  }

  public render(): JSX.Element {
    return <div>{this.props.appStrings.heading}</div>
  }
}

