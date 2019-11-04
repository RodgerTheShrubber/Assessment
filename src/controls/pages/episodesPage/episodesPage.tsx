import React from 'react';
import { AppStrings, episodeDetails } from '../../../data';
import { FocusZone, List, Image, FocusZoneDirection, ImageFit, mergeStyleSets } from 'office-ui-fabric-react'

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
    return (
    <FocusZone direction={FocusZoneDirection.vertical}>
      <div className={classNames.container} data-is-scrollable={true}>
        <List items={this.props.appStrings["episode-list"]} onRenderCell={this._onRenderCell} />
      </div>
    </FocusZone>)
  }

  private _onRenderCell(item?: episodeDetails): JSX.Element {
    return (
      <div className={classNames.itemCell} data-is-focusable={true}>
        <Image
          className={classNames.itemImage}
          src={require(`../../../images/season${item && item.season}.jpg`)}
          width={50}
          height={50}
          imageFit={ImageFit.cover}
        />
        <div className={classNames.itemContent}>
          <div className={classNames.itemName}>{`Season ${item && item.season} - ${item && item.name}`}</div>
          <div className={classNames.itemIndex}>{`Rating: ${item && item.rating}`}</div>
        </div>
      </div>
    );
  }
}

interface IEpisodesListClassObject {
  container: string;
  itemCell: string;
  itemImage: string;
  itemContent: string;
  itemName: string;
  itemIndex: string;
  chevron: string;
}

const classNames: IEpisodesListClassObject = mergeStyleSets({
  container: {
    overflow: 'auto',
    maxHeight: 500,
  },
  itemCell: [
    {
      minHeight: 54,
      padding: 10,
      boxSizing: 'border-box',
      borderBottom: `1px solid #4444444`,
      display: 'flex',
      selectors: {
        '&:hover': { background: '#eeeeee' }
      }
    }
  ],
  itemImage: {
    flexShrink: 0
  },
  itemContent: {
    marginLeft: 10,
    overflow: 'hidden',
    flexGrow: 1
  },
  itemName: [
    {
      fontSize: 14,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  ],
  itemIndex: {
    fontSize: 14,
    marginBottom: 10
  },
  chevron: {
    alignSelf: 'center',
    marginLeft: 10,
    color: '#888888',
    fontSize: 24,
    flexShrink: 0
  }
});

