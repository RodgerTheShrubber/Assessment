import React from 'react';
import { englishStrings, AppStrings } from '../../data'
import { LanguageSelector } from '..'
import { IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';

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

  private onLanguageChange = (languageOption: IDropdownOption) => {
    // When the language dropdown changes we swap out the app strings object with the new language. If we can't get a language object for that option
    // fall back to english strings.
    this.setState({ appStrings: languageOption.data.languageOption || englishStrings})
  }

  public render(): JSX.Element {
    return (<div>
      <LanguageSelector onLanguageChange={this.onLanguageChange}/>
      {this.state.appStrings.heading}
      </div>
  )};
}

