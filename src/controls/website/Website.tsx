import React from 'react';
import { englishStrings, AppStrings } from '../../data'
import { LanguageSelector, NavBar } from '..'
import { IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';
import { PivotItem } from 'office-ui-fabric-react/lib/Pivot';
import { Image } from 'office-ui-fabric-react/lib/Image';
import { AboutPage, EpisodesPage, MediaPage } from '../pages';
import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';

export interface WebsiteProps {
}

export interface WebsiteState {
  appStrings: AppStrings;
  pageToDisplay: () => JSX.Element;
}

export class Website extends React.PureComponent<WebsiteProps, WebsiteState> {
  public constructor(props: WebsiteProps) {
    super(props);
    this.state = {
      appStrings: englishStrings,
      pageToDisplay: () => <AboutPage appStrings={this.state.appStrings}/>
    }
  }

  // When the language dropdown changes we swap out the app strings object with the new language. If we can't get a language object for that option
  // fall back to english strings.
  private onLanguageChange = (languageOption: IDropdownOption) => {
    this.setState({ appStrings: languageOption.data.languageOption || englishStrings})
  }

  /**
   * Callback to handle when we want to navigate to a new page within the website.
   * @param item - The tab that was clicked in the pivot bar. Parameter is kept as optional in order to match the function signature we pass into the
   * external dependency we use to create the pivot.
   */
  private onNavToNewPage = (item?: PivotItem): void => {
    this.setState({
      pageToDisplay: this.convertPivotKeyToPage(item && item.props.itemKey)
    });
  };

  /**
   * Helper function used on navigating to a new page. Converts the link key to the right page we want to display
   */
  private convertPivotKeyToPage = (key?: string): () => JSX.Element => {
    switch(key) {
      case 'Episodes':
        return () => <EpisodesPage appStrings={this.state.appStrings}/>;
      case 'Media':
        return () => <MediaPage appStrings={this.state.appStrings}/>;
      default:
          return () => <AboutPage appStrings={this.state.appStrings}/>;
    }
  }

  public render(): JSX.Element {
    return (
      <div className={classNames.container}>
        <LanguageSelector onLanguageChange={this.onLanguageChange}/>
        <div className={classNames.content}>
          <Image className={classNames.banner} src={require('../../images/strangerThingsBanner.png')} />
          <NavBar onNavToNewPage={this.onNavToNewPage}/>
          {this.state.pageToDisplay()}
        </div>
      </div>
  )};
}


interface IEpisodesListClassObject {
  container: string;
  content: string;
  banner: string;
}

const classNames: IEpisodesListClassObject = mergeStyleSets({
  container: {
    margin: 'auto',
    padding: 25,
    width: '80em'
  },
  content: {
    padding: '100px 0px'
  },
  banner: {
    display: 'flex',
    justifyContent: 'center'
  }
});

