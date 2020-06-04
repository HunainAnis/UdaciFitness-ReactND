import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Text } from 'react-native'

export default function TextButton ({ children, onPress }) {
    return(
        <TouchableOpacity onPress={onPress}>
            <Text>{children}</Text>
        </TouchableOpacity>
    )
}