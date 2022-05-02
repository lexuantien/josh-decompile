import React from 'react';
import styled from 'styled-components';

import Spinner from '@components/Spinner';
import Spacer from '@components/Spacer';
import Checkbox from '@components/Checkbox';
import {
    ConfigContext
} from '@components/ConfigContext';

function SettingCheckbox({
    settingKey,
    children,
    ...delegated
}) {
    const {
        disableTabInCodeSnippets,
        setDisableTabInCodeSnippets,
    } = React.useContext(ConfigContext);

    return ( <
        Wrapper >
        <
        Checkbox checked = {!disableTabInCodeSnippets
        }
        onChange = {
            () =>
            setDisableTabInCodeSnippets(!disableTabInCodeSnippets)
        }
        label = "Enable ‘tab’ key" /
        >
        <
        /Wrapper>
    );
}

const Wrapper = styled.div `
  display: flex;

  input {
    margin-top: 4px;
  }
`;

export default SettingCheckbox;