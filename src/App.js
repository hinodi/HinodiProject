import React from 'react';
import {FlatList} from 'react-native';
import styled from 'styled-components';

import Header from './components/Header';
import Loading from './components/Loading';
import Card from './components/Card';
import request from './configs/request';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            data: [],
        };
    }
    componentDidMount() {
        request
            .get()
            .then(data => this.setState({isLoading: false, data}))
            .catch(() => this.setState({isLoading: false}));
    }
    //I use index because I can't get the id of each element from response api data
    keyExtractor = (item, index) => index.toString();
    renderItem = ({item}) => <Card data={item} />;

    render() {
        return (
            <Container>
                <Header number={this.state.data.length} />
                <BodyContainer>
                    {this.state.isLoading ? (
                        <Loading />
                    ) : (
                        <FlatList
                            data={this.state.data}
                            renderItem={this.renderItem}
                            keyExtractor={this.keyExtractor}
                        />
                    )}
                </BodyContainer>
            </Container>
        );
    }
}

export default App;

const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #ffffff;
`;

const BodyContainer = styled.View`
    flex: 1;
    background-color: #eaeaea;
`;
