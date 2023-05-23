import { Tag, User, CreditCard } from 'phosphor-react-native'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'


interface PagamentoProps {
    name: string,
    desc: string,
    value: string,
}

const Pagamento = ({name, desc, value}: PagamentoProps) => {

    

    return (
        <View style={{justifyContent: 'center', alignItems: 'center', paddingVertical: 5}}>
        <View style={styles.container}>

            <View style={styles.collectorInfo}>
               

                <View>
                    <Text style={styles.collectorName}>{name}</Text>
                    <Text style={styles.collectorLocation}>
                        {desc}
                    </Text>
                </View>
            </View>

            <TouchableOpacity style={styles.callCollecor}>
                <Text style={{color: '#8F2121'}}> -{value} AOA</Text>
            </TouchableOpacity>
            
            
        </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        width: 340,
        height: 60,
        paddingTop: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#B4B4B4',
        


    },
    collectorInfo: {
        width: '70%',
        flexDirection: 'row',
        alignItems: 'center',
        
    },
    collectorName: {
        fontSize: 14,
        fontWeight: '500',
        color: '#7A7A7A'
    },
    collectorLocation: {
        fontSize: 12,
        color: '#222',
        fontWeight: '800'
    },
    callCollecor: {
        justifyContent: 'center',
        alignItems:'center',

        
    }
})

export default Pagamento