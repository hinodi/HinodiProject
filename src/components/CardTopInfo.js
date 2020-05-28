import React from 'react';
import styled from 'styled-components';

import {
    getSizeByHeight,
    getFontSize,
    getSizeByWidth,
} from '../configs/styles/Size';
import Color from '../configs/styles/Color';
import CardBottomText from './CardBottomText';

const cameraIcon = require('../assets/images/camera.png');

class CardTopInfo extends React.PureComponent {
    formatPrice = () => {
        const {price = 0} = this.props;

        //format: insert space every 3 character from the end
        return price
            .toString()
            .split('')
            .reverse()
            .join('')
            .replace(/(\d{3})/g, '$1 ')
            .replace(/(^\s+|\s+$)/, '')
            .split('')
            .reverse()
            .join('');
    };
    render() {
        const {numberImages = 0, name = ''} = this.props;
        return (
            <CardTopInfoContainer>
                <CardInfoNamePriceContainer>
                    <CardInfoNameText>{name}</CardInfoNameText>
                    <CardInfoNameText>{this.formatPrice()} €</CardInfoNameText>
                </CardInfoNamePriceContainer>
                <CardTopInfoSpacer />
                <CardInfoNumberImageContainer>
                    <CardInfoNumberImageIcon source={cameraIcon} />
                    <CardInfoNumberImageText>
                        {numberImages}
                    </CardInfoNumberImageText>
                </CardInfoNumberImageContainer>
            </CardTopInfoContainer>
        );
    }
}

export default CardTopInfo;

const CardTopInfoContainer = styled.View`
    flex: 1;
    position: absolute;
    bottom: 0;
    flex-direction: row;
    align-items: flex-end;
    padding-horizontal: ${getSizeByWidth(12)};
    padding-vertical: ${getSizeByHeight(10)};
`;

const CardInfoNamePriceContainer = styled.View``;

const CardInfoNameText = styled.Text`
    color: ${Color.WHITE};
    font-size: ${getFontSize(14)};
    font-weight: 700;
    margin-bottom: ${getSizeByHeight(4)};
    text-shadow-color: ${Color.TEXT_SHADOW};
    text-shadow-offset: {width: 0, height: 1};
    text-shadow-radius: ${getSizeByWidth(3)};
`;

const CardInfoNumberImageContainer = styled.View`
    background-color: ${Color.ELEMENT_BACKGROUND};
    border-radius: ${getSizeByWidth(16)};
    flex-direction: row;
    align-items: center;
    padding-vertical: ${getSizeByHeight(2)};
    padding-horizontal: ${getSizeByWidth(8)};
`;

const CardInfoNumberImageIcon = styled.Image`
    tint-color: ${Color.WHITE};
    width: ${getSizeByWidth(12)};
    height: ${getSizeByWidth(12)};
    margin-right: ${getSizeByWidth(6)};
`;

const CardInfoNumberImageText = styled.Text`
    color: ${Color.WHITE};
    font-size: ${getFontSize(14)};
    font-weight: 600;
`;

const CardTopInfoSpacer = styled.View`
    flex: 1;
`;
