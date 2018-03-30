import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, TouchableOpacity, View, Image,Dimensions } from 'react-native';
import { Container, Content, Footer, Label } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import ListHeader from '../Components/ListHeader';
import styles from './Styles/RateCardScreenStyle';
import { connect } from 'react-redux';
import { Colors, Images } from '../Themes';
const {height, width} = Dimensions.get("window");
import { Dropdown } from 'react-native-material-dropdown';

const data = [{
      value: 'Hatchback',
    }, {
      value: 'Hatchback1',
    }, {
      value: 'Hatchback2',
    }];
class RateCardScreen extends Component {

    headerLeftContent(){
        return(
            <Text style={[styles.header, styles.leftHeader]}>STANDARD RATE</Text>
        )
    }

    headerRightContent(){
        return(
            <View style={styles.wrapText}>
                <Text style={[styles.header1, styles.rightHeader]}>
                    DAY
                </Text>
                <Icon style={{paddingLeft:5}} name="sun-o" size={18} />
            </View>
        )
    }

    render() {
        return (
            <Container>
                <ScrollView>

                    <View style={styles.item}>

                                <View style={styles.main}>
                                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                        <Dropdown
                                            label=''
                                            data={data}
                                            fontSize={12}
                                            containerStyle={{width: 100}}
                                            dropdownPosition={0}
                                        />
                                    </View>
                                    <View style={styles.mainRightSub}>
                                        <Image style={styles.mainRightImg} source={Images.car}/>
                                        <Text style={styles.mainRightText1}>Base fare <Text style={styles.mainRightText2}>$20</Text></Text>
                                    </View>
                                </View>

                        <ListHeader leftContent={this.headerLeftContent()} rightContent={this.headerRightContent()} />
                        <View style={styles.subItem}>
                            <View style={styles.partition1}>
                                <View style={styles.main1}>
                                    <View style={styles.subLeftCont}>
                                        <View style={styles.subLeftSub1}>
                                            <Image source={Images.slocation} style={styles.location}/>
                                        </View>
                                        <View style={styles.subLeftSub2}>
                                            <Text style={styles.locText}>First 8.00 km</Text>
                                        </View>
                                        <View style={styles.subLeftSub2}>
                                            <Text>$ 9.50</Text>
                                        </View>
                                        <View style={styles.subLeftSub1}>
                                            <Text style={styles.subLeftText}>Per kilometer</Text>
                                        </View>
                                    </View>
                                    <View style={styles.midLine}></View>
                                    <View style={styles.locIcon}>
                                        <View style={styles.subLeftSub1}>
                                            <Image source={Images.slocation} style={styles.location}/>
                                        </View>
                                        <View style={styles.subLeftSub2}>
                                            <Text style={styles.locText}>First 8.00 km</Text>
                                        </View>
                                        <View style={styles.subLeftSub2}>
                                            <Text>$ 9.50</Text>
                                        </View>
                                        <View style={styles.subLeftSub1}>
                                            <Text style={styles.subLeftText}>Per kilometer</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <ListHeader leftContent={this.headerLeftContent()} rightContent={this.headerRightContent()} />
                        <View style={styles.subItem}>
                            <View style={styles.partition1}>
                                <View style={styles.main1}>
                                    <View style={styles.subLeftCont}>
                                        <View style={styles.subLeftSub1}>
                                            <Image source={Images.slocation} style={styles.location}/>
                                        </View>
                                        <View style={styles.subLeftSub2}>
                                            <Text style={styles.locText}>First 8.00 km</Text>
                                        </View>
                                        <View style={styles.subLeftSub2}>
                                            <Text>$ 9.50</Text>
                                        </View>
                                        <View style={styles.subLeftSub1}>
                                            <Text style={styles.subLeftText}>Per kilometer</Text>
                                        </View>
                                    </View>
                                    <View style={styles.midLine}></View>
                                    <View style={styles.locIcon}>
                                        <View style={styles.subLeftSub1}>
                                            <Image source={Images.slocation} style={styles.location}/>
                                        </View>
                                        <View style={styles.subLeftSub2}>
                                            <Text style={styles.locText}>First 8.00 km</Text>
                                        </View>
                                        <View style={styles.subLeftSub2}>
                                            <Text>$ 9.50</Text>
                                        </View>
                                        <View style={styles.subLeftSub1}>
                                            <Text style={styles.subLeftText}>Per kilometer</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <ListHeader leftContent={this.headerLeftContent()} rightContent={this.headerRightContent()} />
                        <View style={styles.subItem}>
                            <View style={styles.partition1}>
                                <View style={styles.main1}>
                                    <View style={styles.subLeftCont}>
                                        <View style={styles.subLeftSub1}>
                                            <Image source={Images.slocation} style={styles.location}/>
                                        </View>
                                        <View style={styles.subLeftSub2}>
                                            <Text style={styles.locText}>First 8.00 km</Text>
                                        </View>
                                        <View style={styles.subLeftSub2}>
                                            <Text>$ 9.50</Text>
                                        </View>
                                        <View style={styles.subLeftSub1}>
                                            <Text style={styles.subLeftText}>Per kilometer</Text>
                                        </View>
                                    </View>
                                    <View style={styles.midLine}></View>
                                    <View style={styles.locIcon}>
                                        <View style={styles.subLeftSub1}>
                                            <Image source={Images.slocation} style={styles.location}/>
                                        </View>
                                        <View style={styles.subLeftSub2}>
                                            <Text style={styles.locText}>First 8.00 km</Text>
                                        </View>
                                        <View style={styles.subLeftSub2}>
                                            <Text>$ 9.50</Text>
                                        </View>
                                        <View style={styles.subLeftSub1}>
                                            <Text style={styles.subLeftText}>Per kilometer</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.bottom}>
                            <View style={{padding:10}}>
                                <View style={styles.bottomText}>
                                    <Text>PEAK TIME CHANGES</Text>
                                </View>
                                <View style={styles.bottomSubText}>
                                    <Text>Peak time changes may be applicable during high demand  hours and will be conveyed during the booking. This enable us to make more cabs available to you.</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </Container>
        )
    }
}
RateCardScreen.navigationOptions = ({ navigation }) => ({
    title: "Rate Card",

    headerLeft: (
        <TouchableOpacity
            onPress={() => navigation.navigate("DrawerOpen")}
            activeOpacity={0.5}
            style={styles.bookingPageHeader}
        >
            <Icon name="bars" size={20} />

        </TouchableOpacity>
    ),
    headerRight: <Text />
});
const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RateCardScreen)
