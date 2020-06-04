import React from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { FontAwesome } from '@expo/vector-icons'

export default function UdaciSteppers({ value, unit, step, max, onDecrement, onIncrement }) {
        return(
            <View>
                <View>
                    <TouchableOpacity onPress={onDecrement} >
                        <FontAwesome name='minus' color='black' size={30} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onIncrement} >
                        <FontAwesome name='plus' color='black' size={30} />
                    </TouchableOpacity>
                </View>
                <View>
                    <Text>{value}</Text>
                    <Text>{unit}</Text>
                </View>
            </View>
        )
    }
