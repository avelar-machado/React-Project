import { 
    View, 
    Text, 
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import React from 'react'
import { CaretCircleUp } from 'phosphor-react-native'
import { useNavigation } from '@react-navigation/native'


const Cartao = () => {
    const navigation = useNavigation();
    return (
        <View>
        <Text style={{fontSize: 20, fontWeight: 'bold', marginBottom: 10, marginLeft: 10}}>A minha conta</Text>
        <View style={styles.banner}>
          <View style={styles.bannerTop}>
              <View style={styles.bannerText}>
                  <Text style={styles.bannerHeadline}>Énio Carlos</Text>
                  <Text style={styles.bannerStep}>eniocarlos@isptec.co.ao</Text>
              </View>
          </View>
  
          <View style={styles.bannerBottom}>
            <Text style={{fontSize: 24, fontWeight: 'bold', color: '#fff'}}>13.000 AOA</Text>
              <TouchableOpacity style={styles.bannerBottomText} onPress={() => navigation.navigate('Profile')}>
                  <CaretCircleUp color='#5BB126' size={32} weight='fill' />
              </TouchableOpacity>
          </View>
  
        </View>
        </View>
    )
  }
  
export default Cartao


const styles = StyleSheet.create({

        banner: {
            width: 350,
            height: 200,
            borderRadius: 20,
            backgroundColor: '#6B5AD0',
            justifyContent: 'space-around',
            alignItems: 'center',
            
        },
        bannerTop: {
            width: '90%',
            alignItems: 'center',
            
        },
        bannerText: {
            width: 300,
            
            
        },
        bannerHeadline: {
            fontSize: 20,
            fontWeight: '700',
            color: '#fff'  
        },
        bannerStep: {
            color: '#fff',
            fontWeight: '500'
        },
        bannerBottom: {
            width: 300,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            
            
            
        },
        bannerBottomText: {
            height: 60,
            width: 60,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#000',
            borderRadius: 50
        },
})

