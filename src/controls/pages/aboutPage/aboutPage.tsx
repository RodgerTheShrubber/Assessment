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
    return (<div><h4>What is Stranger Things?</h4><p>{this.props.appStrings.snippets[1]}</p></div>)
  }
}

