import React, { Component } from 'react'
import { TouchableOpacity, Text, View } from 'react-native'
import { Item, Input, Label } from 'native-base';

export default class ListHeader extends Component {



    render() {
        return (
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={{flex: 1, height: 60, backgroundColor: '#F4F5F9', paddingTop: 30, paddingLeft: 15}}>
                        {this.props.leftContent}
                    </View>
                    <View style={{flex: 1, height: 60, backgroundColor: '#F4F5F9', paddingTop: 30, alignItems: 'flex-end', paddingRight: 15}}>
                        {this.props.rightContent}
                    </View>
                </View>
        )
    }
}
