import React, { PropsWithChildren } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

interface Props {
    navigation: any
}

const Books: React.FC<Props> = ({navigation}) => {
    return (
        <View style={styles.conteiner} >
            <Text>Books</Text>
           
        </View>
    )
}

export default Books

const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})