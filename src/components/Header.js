import React from 'react';
import styled from 'styled-components';

import color from '../configs/styles/Color';
import {getFontSize, getSizeByHeight} from '../configs/styles/Size';

class Header extends React.PureComponent {
    render() {
        const {number} = this.props;
        return (
            <HeaderContainer>
                <HeaderTitle>Mes annonces ({number})</HeaderTitle>
            </HeaderContainer>
        );
    }
}

export default Header;

const HeaderContainer = styled.View`
    background-color: ${color.WHITE};
    align-items: center;
    padding-vertical: ${getSizeByHeight(12)};
`;

const HeaderTitle = styled.Text`
    color: ${color.TEXT};
    font-size: ${getFontSize(14)};
    font-weight: 700;
`;
