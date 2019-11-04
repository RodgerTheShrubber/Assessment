import React from 'react';
import { Dropdown, IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';
import { englishStrings, pigLatinStrings } from '../../data';
import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';

export interface LanguageSelectorProps {
  onLanguageChange: (languageOption: IDropdownOption) => void
}

export interface LanguageSelectorState {
}

const languageOptions: IDropdownOption[] = [
  {key: 'English', text: 'English', data: { languageOption: englishStrings }},
  {key: 'PigLatin', text: 'PigLatin', data: { languageOption: pigLatinStrings }}
] 

export class LanguageSelector extends React.PureComponent<LanguageSelectorProps, LanguageSelectorState> {
  public constructor(props: LanguageSelectorProps) {
    super(props);
  }

  public render(): JSX.Element {
    return (
    <div className={classNames.container}>
      <Dropdown options={languageOptions} placeHolder="English" onChanged={this.props.onLanguageChange}/>
    </div>
  )}
}

interface IEpisodesListClassObject {
  container: string;
}

const classNames: IEpisodesListClassObject = mergeStyleSets({
  container: {
    float:'right',
    maxWidth: 100
  }
});

