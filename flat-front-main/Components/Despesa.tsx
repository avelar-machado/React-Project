import { Tag, User, CreditCard } from 'phosphor-react-native'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'


interface DespesaProps {
    name: string,
    location: string,
    profilePicture?: string,
    collecting: string
}

const Despesa = ({name, location, profilePicture, collecting}: DespesaProps) => {

    

    return (
        <View style={{justifyContent: 'center', alignItems: 'center', paddingVertical: 5}}>
        <View style={styles.container}>

            <View style={styles.collectorInfo}>
               

                <View style={styles.collectorTextInfo}>
                    <Text style={styles.collectorName}>{name}</Text>
                    <Text style={styles.collectorLocation}>
                        {location} • {collecting}</Text>
                </View>
            </View>

            <TouchableOpacity style={styles.callCollecor}>
                <CreditCard color='#5BB126' size={24} weight='fill'/>
            </TouchableOpacity>
            
            
        </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        width: '95%',
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
    collectorLocation: {
        fontSize: 12,
        color: '#fff'
    },
    callCollecor: {
        justifyContent: 'center',
        alignItems:'center',
        paddingRight: 15

        
    }
})

export default Despesa