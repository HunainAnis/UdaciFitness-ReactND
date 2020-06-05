import React from 'react'
import { View, Text, StyleSheet, Platform } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { FontAwesome } from '@expo/vector-icons'
import { white, purple, gray } from '../utils/colors'

export default function UdaciSteppers({ value, unit, step, max, onDecrement, onIncrement }) {
        return(
            <View style={[styles.row, {justifyContent: 'space-between'}]}>
                <View style={{flexDirection:'row'}}>
                    <TouchableOpacity 
                        onPress={onDecrement}
                        style={[Platform.OS === 'ios' ? styles.iosBtn: styles.androidBtn, {borderTopRightRadius: 0, borderBottomRightRadius: 0}]} >
                        <FontAwesome name='minus' color={Platform.OS === 'ios'? purple : white} size={30} />
                    </TouchableOpacity>
                    <TouchableOpacity 
                        onPress={onIncrement}
                        style={[Platform.OS === 'ios' ? styles.iosBtn: styles.androidBtn, {borderTopLeftRadius: 0, borderBottomLeftRadius: 0}]} >
                        <FontAwesome name='plus' color={Platform.OS === 'ios'? purple : white} size={30} />
                    </TouchableOpacity>
                </View>
                <View style={styles.metricCounter}>
                    <Text style={{fontSize: 24, textAlign: 'center'}}>{value}</Text>
                    <Text style={{fontSize: 18, color: gray}}>{unit}</Text>
                </View>
            </View>
        )
    }

    const styles = StyleSheet.create({
        row: {
            flexDirection: 'row',
            flex: 1,
            alignItems: 'center'
        },
        iosBtn: {
            backgroundColor: white,
            borderColor: purple,
            borderRadius: 3,
            borderWidth: 1,
            padding: 5,
            paddingLeft: 25,
            paddingRight: 25
        },
        androidBtn: {
            margin: 5,
            backgroundColor: purple,
            padding: 10,
            borderRadius: 2
        },
        metricCounter: {
            width: 85,
            justifyContent: 'center',
            alignItems: 'center',

        }
    })