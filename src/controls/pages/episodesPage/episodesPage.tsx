import React from 'react';
import { AppStrings } from '../../../data';

export interface EpisodesPageProps {
  appStrings: AppStrings
}

export interface EpisodesPageState {
}

export class EpisodesPage extends React.PureComponent<EpisodesPageProps, EpisodesPageState> {
  public constructor(props: EpisodesPageProps) {
    super(props);
  }

  public render(): JSX.Element {
    return <div>{this.props.appStrings["episode-list"].map((item) => item.name)}</div>
  }
}

