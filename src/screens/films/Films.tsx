import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

interface Props {
    navigation: any
}

const Films: React.FC<Props> = ({navigation}) => {
    return (
        <View style={styles.conteiner} >
            <Text>Films</Text>
            <Button onPress={() => navigation.navigate('Films1')} title={'btn'} />
        </View>
    )
}

export default Films

const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})