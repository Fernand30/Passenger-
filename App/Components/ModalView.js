import React, { Component } from 'react'
import { View, Image, Text, Modal, TouchableOpacity, Button, Dimensions, TouchableHighlight  } from 'react-native'
import InputCompoent from '../Components/InputCompoent'
import styles from '../Components/Styles/ModelViewStyle'

export default class ModalView extends Component{

    constructor() {
        super();
        this.state = {

        }
    }

    render(){
        return(
            <View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.props.modalVisible}
                    onRequestClose={() => {
                        this.props.closeModal()
                    }}>
                    <View onPress={()=>{this.props.closeModal()}} style={styles.forgotView}>
                        {this.props.modalContent()}
                    </View>
                </Modal>
            </View>
        )
    }


}
