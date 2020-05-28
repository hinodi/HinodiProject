import React from 'react';
import {Image, View} from 'react-native';
import styled from 'styled-components';
import ImageSlider from 'react-native-image-slider';

import Size, {getSizeByHeight, getSizeByWidth} from '../configs/styles/Size';
import Color from '../configs/styles/Color';

class CardImage extends React.PureComponent {
    render() {
        const {images = []} = this.props;
        return (
            <CardImageContainer>
                <ImageSlider
                    images={images}
                    customSlide={({index, item, style, width}) => (
                        <Image
                            key={index}
                            source={{uri: item}}
                            style={[
                                style,
                                {
                                    height: 200 * Size.HEIGHT_RATIO,
                                    //calculate for the width of image
                                    // = DEVICE_WIDTH minutes 14 * 2 (horizontal margin of card)
                                    width:
                                        Size.DEVICE_WIDTH -
                                        28 * Size.WIDTH_RATIO,
                                },
                            ]}
                        />
                    )}
                    customButtons={(position, move) => (
                        <CardImageDotContainer>
                            {images.map((image, index) => {
                                return position === index ? (
                                    <CardImageActiveDot
                                        key={index.toString()}
                                    />
                                ) : (
                                    <CardImageInactiveDot
                                        key={index.toString()}
                                    />
                                );
                            })}
                        </CardImageDotContainer>
                    )}
                />
            </CardImageContainer>
        );
    }
}

export default CardImage;

const CardImageContainer = styled.View`
    height: ${getSizeByHeight(200)};
    flex: 1;
`;

const CardImageDotContainer = styled.View`
    flex-direction: row;
    position: absolute;
    bottom: ${getSizeByHeight(6)};
    align-self: center;
`;

const CardImageActiveDot = styled.View`
    width: ${getSizeByWidth(6)};
    height: ${getSizeByWidth(6)};
    border-radius: ${getSizeByWidth(3)};
    margin: ${getSizeByWidth(6)};
    background-color: ${Color.DOT_ACTIVE_COLOR};
`;

const CardImageInactiveDot = styled.View`
    width: ${getSizeByWidth(6)};
    height: ${getSizeByWidth(6)};
    border-radius: ${getSizeByWidth(3)};
    margin: ${getSizeByWidth(6)};
    background-color: ${Color.WHITE};
`;
