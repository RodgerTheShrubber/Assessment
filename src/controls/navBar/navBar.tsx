import React from 'react';
import { Pivot, PivotItem, IPivotItemProps } from 'office-ui-fabric-react/lib/Pivot';
import { AppStrings } from '../../data';

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
    return (<Pivot onLinkClick={this.props.onNavToNewPage}>
      {pivotItems.map((item) => <PivotItem {...item}/>)}
      </Pivot>
      )
  }
}

