import { CaretRight } from 'phosphor-react-native'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'


interface DefinicaoProps {
    name: string
}


const Definicao = ({ name }: DefinicaoProps) => {

    

    return (
        <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center', paddingVertical: 5}}>
        <View style={styles.container}>

            <View style={styles.collectorInfo}>

                <View style={styles.collectorTextInfo}>
                    <Text style={styles.collectorName}>{name}</Text>
                </View>
            </View>

            <View style={styles.callCollecor}>
                <CaretRight color='#fff' size={18} weight='bold'/>
            </View>
 
        </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container: {
        width: '75%',
        height: 70,
        paddingTop: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#232323',
        borderRadius: 10,
        


    },
    collectorInfo: {
        width: '70%',
        flexDirection: 'row',
        alignItems: 'center',
        
    },
    collectorTextInfo: {
        paddingLeft: 15,
        
    },
    collectorName: {
        fontSize: 14,
        fontWeight: '500',
        color: '#fff'
    },
    callCollecor: {
        justifyContent: 'center',
        alignItems:'center',
        right: -50   
    }
})

export default Definicao