import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { Timer, Coins } from 'phosphor-react-native'
import TrashCan from '../assets/images/trash.svg'
import Collector from './Despesa'



const ForYou = () => {


  return (
    <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.container}>


      <View style={styles.nearby}>
        <Text style={styles.nearbyText}>Despesas</Text>
        <View style={styles.nearbyValue}>
            <Text style={styles.nearbyTextValue}>Março</Text>
            <Timer color='#157DC8' size={16} />
        </View>
      </View>

      <View style={styles.collectors}>
        <Collector name={'Água'} location={'Água do apartamento'} collecting={'3.100 AOA'}/>
        <Collector name={'Luz'} location={'Luz do festa do Abel'} collecting={'12.000 AOA'}/>
        <Collector name={'Remodelação'} location={'Obras na casa de banho'} collecting={'7.200 AOA'}/>
        <Collector name={'Renda'} location={'Renda do apartamento'} collecting={'25.400 AOA'}/>
      </View>
    </View>
    </ScrollView>
    
  )
}


const styles = StyleSheet.create({
    scrollView: {
        paddingTop: 10,
        backgroundColor: '#fff'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    banner: {
        width: '94%',
        height: 265,
        borderRadius: 8,
        backgroundColor: '#4DA67F',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bannerTop: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 20,
        paddingTop: 5,
    },
    trashCan: {
        transform: [{rotate : '2deg'}]
    },
    bannerText: {
        width: 200,
        height: 140,
        justifyContent: 'space-between'
    },
    bannerHeadline: {
        fontSize: 24,
        fontWeight: '800',
        color: '#fff'  
    },
    moneyText: {
        color: '#FFE96B'
    },
    bannerStep: {
        color: '#fff',
        fontWeight: '500'
    },
    bannerBottom: {
        width: '95%',
        padding: 24,
        paddingVertical: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 8
        
    },
    bannerBottomText: {
        height: 40,
        justifyContent: 'space-between'
    },
    bannerBottomHeadline: {
        fontSize: 14,
        fontWeight: '800',
        color: '#4DA67F'
    },
    bannerBottomCTA: {
        fontSize: 12,
        color: '#6F6F6F'
    },
    nearby: {
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 17,
    },
    nearbyValue: {
        width: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    nearbyText: {
        fontSize: 16,
        fontWeight: '800'
    },
    nearbyTextValue: {
        color: '#157DC8',
        fontSize: 12
    },
    collectors: {
        width: '100%',
    }
})

export default ForYou


