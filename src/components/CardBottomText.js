import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components';

import {getFontSize} from '../configs/styles/Size';
import Color from '../configs/styles/Color';

class CardBottomText extends React.PureComponent {
    render() {
        const {bigText, smallText} = this.props;
        return (
            <CardBottomTextContainer>
                <CardBottomTextWrapper>
                    <CardBottomLargeText>{bigText}</CardBottomLargeText>
                    <CardBottomSmallText> {smallText}</CardBottomSmallText>
                </CardBottomTextWrapper>
            </CardBottomTextContainer>
        );
    }
}

export default CardBottomText;

const CardBottomTextContainer = styled.Text`
    flex: 1;
`;

const CardBottomTextWrapper = styled.Text`
    text-align: center;
`;

const CardBottomLargeText = styled.Text`
    color: ${Color.TEXT};
    font-size: ${getFontSize(14)};
    font-weight: 700;
`;

const CardBottomSmallText = styled.Text`
    color: ${Color.TEXT};
    font-size: ${getFontSize(12)};
    font-weight: 500;
`;
