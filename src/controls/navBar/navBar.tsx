import React from 'react';
import { Pivot, PivotItem, IPivotItemProps } from 'office-ui-fabric-react/lib/Pivot';
import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';

export interface NavBarProps {
  onNavToNewPage: (item?: PivotItem) => void;
}

export interface NavBarState {
}

const pivotItems: IPivotItemProps[] = [
  {itemKey: 'About', headerText: 'About'},
  {itemKey: 'Episodes', headerText: 'Episodes'},
  {itemKey: 'Media', headerText: 'Media'}
] 

export class NavBar extends React.PureComponent<NavBarProps, NavBarState> {
  public constructor(props: NavBarProps) {
    super(props);
  }

  public render(): JSX.Element {
    return (
    <div className={classNames.container}>
      <Pivot onLinkClick={this.props.onNavToNewPage}>
      {pivotItems.map((item) => <PivotItem {...item}/>)}
      </Pivot>
    </div>
    )
  }
}

interface IEpisodesListClassObject {
  container: string;
}

const classNames: IEpisodesListClassObject = mergeStyleSets({
  container: {
    display: 'flex',
    justifyContent: 'center',
    margin: 25
  }
});
