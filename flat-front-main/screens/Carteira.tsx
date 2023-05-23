import { View, Text, StyleSheet,  ScrollView, SafeAreaView} from 'react-native'
import  Cartao  from '../Components/Cartao'
import { Pagamento } from '../Components'


const Carteira = () => {
  return (
    <SafeAreaView style={{flex: 1}}>

        
    <ScrollView style={{marginTop: 30}}>
    <View style={style.container}>
      <Cartao />
      <View style={{justifyContent: 'flex-start', width: '90%'}}>
        <Text style={{fontSize: 18, marginVertical:12, fontWeight: 'bold'}}>Histórico</Text>
      </View>
      <Pagamento name='Pagamento' desc='Água' value='300'/>
      <Pagamento name='Pagamento' desc='Luz' value='2.000'/>
      
      
    </View>
    </ScrollView>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ff1f1f1'
  }
})

export default Carteira