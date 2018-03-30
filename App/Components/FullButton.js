import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, Text, View } from 'react-native'
import styles from './Styles/FullButtonStyles'
import ExamplesRegistry from '../Services/ExamplesRegistry'

// Note that this file (App/Components/FullButton) needs to be
// imported in your app somewhere, otherwise your component won't be
// compiled and added to the examples dev screen.

// Ignore in coverage report
/* istanbul ignore next */
ExamplesRegistry.addComponentExample('Full Button', () =>
  <FullButton
    text='Hey there'
    onPress={() => window.alert('Full Button Pressed!')}
  />
);

export default class FullButton extends Component {
  static propTypes = {
    text: PropTypes.string,
    onPress: PropTypes.func,
    style: PropTypes.object,
    textStyle: PropTypes.object,
    // disabled: PropTypes.boolean
  };

  render () {
    return (
      <TouchableOpacity style={{width: '100%'}} onPress={()=>{this.props.onPress()}} disabled={this.props.disabled}>
        <View style={[styles.button, this.props.style]}>
          <Text style={this.props.textStyle}>{this.props.text}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}
