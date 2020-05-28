import React from 'react';
import styled from 'styled-components';

import {getSizeByHeight} from '../configs/styles/Size';
import Color from '../configs/styles/Color';
import CardBottomText from './CardBottomText';

class CardBottomInfo extends React.PureComponent {
    render() {
        return (
            <CardBottomInfoContainer>
                <CardBottomText bigText="81" smallText="m²" />
                <CardBottomDivider />
                <CardBottomText bigText="4" smallText="pèces" />
                <CardBottomDivider />
                <CardBottomText bigText="3" smallText="chambres" />
            </CardBottomInfoContainer>
        );
    }
}

export default CardBottomInfo;

const CardBottomInfoContainer = styled.View`
    flex-direction: row;
    padding-vertical: ${getSizeByHeight(18)};
`;

const CardBottomDivider = styled.View`
    width: ${getSizeByHeight(0.8)};
    background-color: ${Color.TEXT};
`;
