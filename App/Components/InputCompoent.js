import React, { Component } from 'react'
import PropTypes from 'prop-types';
import styles from './Styles/InputCompoentStyle'
import { Item, Input, Label, Text } from 'native-base';
import { View } from 'react-native';

import {  Colors } from '../Themes'
import Icon from 'react-native-vector-icons/FontAwesome';


export default class InputCompoent extends Component {

  static propTypes = {
    labelText: PropTypes.string,
    placeholder: PropTypes.string,
    inputRef: PropTypes.string,
    onChangeText: PropTypes.func,
    value: PropTypes.string,
    secureTextEntry: PropTypes.bool
  }

  render() {
    return (
      <Item stackedLabel>
        <Label style={styles.labelStyle}>{this.props.labelText}</Label>
        <View style={styles.Icon}>
          <View style={styles.IconSubCont}>
          <Icon name = {this.props.icon} size={18} color = '#c6c6c6'/>
          </View>
        <Input

          placeholder={this.props.placeholder}
          style={[styles.inputStyle, this.props.style]}
          ref={this.props.inputRef}
          autoFocus={false}
          value={this.props.value}
          placeholderTextColor={Colors.gray}
          autoCapitalize='none'
          autoCorrect={false}
          secureTextEntry={this.props.secureTextEntry}
          onChangeText={this.props.onChangeText}
        />
        </View>

      </Item>
    )
  }
}
