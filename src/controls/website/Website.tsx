import React from 'react';

export interface WebsiteProps {

}

export interface WebsiteState {
  
}

export class Website extends React.PureComponent<WebsiteProps, WebsiteState> {
  public constructor(props: WebsiteProps) {
    super(props);
  }

  public render(): JSX.Element {
    return <div>Hellow World</div>
  }
}

