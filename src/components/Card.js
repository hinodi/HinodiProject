import React from 'react';
import styled from 'styled-components';

import {getSizeByWidth, getSizeByHeight} from '../configs/styles/Size';
import Color from '../configs/styles/Color';
import CardTopInfo from './CardTopInfo';
import CardBottomInfo from './CardBottomInfo';

class App extends React.PureComponent {
    getPrice = () => {
        const {tariffs} = this.props.data;

        if (!tariffs || !tariffs.length) return 0;
        const priceObject = tariffs.find(e => e.type === 1);
        return priceObject?.price;
    };
    render() {
        const {medias, identity} = this.props.data;
        if (!medias || !medias.length || !medias[0] || !medias[0].source)
            return <View />;
        console.log(medias[0].source);

        return (
            <CardOutSideContainer>
                <CardContainer>
                    <CardTopContainer>
                        <CardImage
                            source={{
                                uri: medias[0].source,
                            }}
                        />
                        <CardTopInfo
                            numberImages={medias.length}
                            name={identity?.name}
                            price={this.getPrice()}
                        />
                    </CardTopContainer>
                    <CardBottomInfo />
                </CardContainer>
            </CardOutSideContainer>
        );
    }
}

export default App;

const CardOutSideContainer = styled.View`
    margin-horizontal: ${getSizeByWidth(14)};
    border-radius: ${getSizeByWidth(12)};
    margin-top: ${getSizeByHeight(20)};
    background-color: ${Color.WHITE};
    shadow-color: ${Color.SHADOW};
    shadow-offset: {
	    width: ${getSizeByWidth(5)},
	    height: ${getSizeByWidth(5)},
    };
    shadow-opacity: 0.5;
    shadow-radius: ${getSizeByWidth(8)};
    elevation: 2;
`;

const CardContainer = styled.View`
    overflow: hidden;
    border-radius: ${getSizeByWidth(12)};
`;

const CardTopContainer = styled.View``;

const CardImage = styled.Image`
    height: ${getSizeByHeight(200)};
    flex: 1;
`;
