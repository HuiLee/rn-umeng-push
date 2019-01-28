import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import PushUtil from './native/PushUtil'

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {tag: "running_lee_top", result: "结果..."};
    }

    onPush() {
        PushUtil.addAlias(this.state.tag, "hfzd", (code, res) => {
            if (code == 200) {
                this.setState({result: code});
            }
            console.log(res)
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.instructions}>{this.state.result}</Text>
                <TouchableOpacity
                    style={styles.u_c_item}
                    onPress={() => {
                        this.onPush()
                    }}
                >
                    <Text style={styles.welcome}>Welcome to React Native!</Text>
                </TouchableOpacity>

                <Text style={styles.instructions}>To get started, edit App.js</Text>
                <Text style={styles.instructions}>{instructions}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
