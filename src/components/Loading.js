import React from 'react';
import {ActivityIndicator} from 'react-native';

import styled from 'styled-components';

class Loading extends React.PureComponent {
    render() {
        return (
            <LoadingContainer>
                <ActivityIndicator />
            </LoadingContainer>
        );
    }
}

export default Loading;

const LoadingContainer = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;
