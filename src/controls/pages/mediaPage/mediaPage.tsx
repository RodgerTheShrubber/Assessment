import React from 'react';
import { AppStrings, galleryItem } from '../../../data';
import { FocusZone, FocusZoneDirection } from 'office-ui-fabric-react/lib/FocusZone';
import { Image, ImageFit } from 'office-ui-fabric-react/lib/Image';
import { List } from 'office-ui-fabric-react/lib/List';
import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';

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
    return (
    <FocusZone direction={FocusZoneDirection.vertical}>
      <h2>{this.props.appStrings.heading}</h2>
      <p>{this.props.appStrings.description}</p>
      <p>{this.props.appStrings.snippets[2]}</p>
      <p>{this.props.appStrings.snippets[0]}</p>
      <p>"{this.props.appStrings.quote.text}" -{this.props.appStrings.quote.author}</p>
      <p></p>
      <p>Here are a few of the locations in RTP that appear in the show:</p>
      <ul>
        {this.props.appStrings.locations.map((location)=><li>{location}</li>)}
      </ul>
      <div className={classNames.container}>
        <List items={this.props.appStrings.gallery} onRenderCell={this._onRenderCell}/>
      </div>
      <div className={classNames.iFrameContainer}>
        <iframe className={classNames.videoEmbed} src={this.props.appStrings["video-embed"]}></iframe>
      </div>
    </FocusZone>)
  }

  private _onRenderCell(item?: galleryItem): JSX.Element {
    return (
      <div
        className={classNames.cellContainer}
        data-is-focusable={true}
      >
        <a href={item && item.reference}><img src={item && item.src} className={classNames.cellImage} /></a>
        <span className={classNames.cellLabel}>{item && item.text}</span>
      </div>
    );
  }
}

interface IListGridExampleClassObject {
  container: string;
  cellContainer: string;
  videoEmbed?: string;
  cellLabel: string;
  cellImage: string;
  iFrameContainer: string;
}

const classNames: IListGridExampleClassObject = mergeStyleSets({
  container: {
    display: 'flex',
    justifyContent: 'center'
  },
  cellContainer: {
    width: 500,
    margin: 25,
    position: 'relative'
    },
  videoEmbed: {
    width: 560,
    height: 310
  },
  iFrameContainer: {
    display: 'flex',
    justifyContent: 'center'
  },
  cellLabel: {
    background: 'rgba(0, 0, 0, 0.3)',
    position: 'absolute',
    top: 0,
    left: 0,
    color: '#FFFFFF',
    padding: 10,
    width: '100%',
    fontSize: 14,
    boxSizing: 'border-box'
  },
  cellImage: {
    width: '100%'
  }
});

