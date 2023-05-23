import { View, Text, StyleSheet,  ScrollView, SafeAreaView} from 'react-native'
import Definicao from '../Components/Definicao'



const Definicoes = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#6B5AD0'}}>

        
    <ScrollView style={{marginTop: 30}}>
    <View style={style.container}>
      <View style={{justifyContent: 'flex-start', width: '90%'}}>
        <Text style={{fontSize: 24, marginVertical:12, fontWeight: 'bold', color: '#fff'}}>Definições</Text>
      </View>
      <Definicao name='Editar Perfil'/>
      <Definicao name='Gerir Despesas'/>
      <Definicao name='Gerir Quartos'/>
      <Definicao name='Gerir Moradores'/>
      
      
      
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
  }
})

export default Definicoes