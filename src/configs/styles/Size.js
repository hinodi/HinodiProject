import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

const Size = {
    DEVICE_WIDTH: width,
    DEVICE_HEIGHT: height,
    WIDTH_RATIO: width / 400,
    HEIGHT_RATIO: height / 600,
};

export const getFontSize = size => `${size * Size.WIDTH_RATIO}px`;
export const getSizeByHeight = size => `${size * Size.HEIGHT_RATIO}px`;
export const getSizeByWidth = size => `${size * Size.WIDTH_RATIO}px`;

export default Size;
