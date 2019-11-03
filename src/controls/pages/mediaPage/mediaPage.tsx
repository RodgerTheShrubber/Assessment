import React from 'react';
import { AppStrings } from '../../../data';

export interface MediaPageProps {
  appStrings: AppStrings
}

export interface MediaPageState {
}

export class MediaPage extends React.PureComponent<MediaPageProps, MediaPageState> {
  public constructor(props: MediaPageProps) {
    super(props);
  }

  public render(): JSX.Element {
    return <div>{this.props.appStrings.gallery.map((item) => item.text)}</div>
  }
}

