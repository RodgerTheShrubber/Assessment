import React from 'react';
import { Dropdown, IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';
import { englishStrings, pigLatinStrings } from '../../data';

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
    return <Dropdown options={languageOptions} placeHolder="English" onChanged={this.props.onLanguageChange}/>
  }
}

