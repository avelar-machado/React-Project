import { 
    View, 
    Text, 
    StyleSheet, 
    TouchableOpacity, 
    ScrollView, 
    TextInput,  
  } from 'react-native'
  import { CaretLeft } from 'phosphor-react-native'
  import { RadioButton } from '../Components'
  import Slider from '@react-native-community/slider'
  import { useState } from 'react'

  import { useNavigation } from '@react-navigation/native'
  
  const Settings = () => {

    const navigation = useNavigation();  
    const [selectedOption, setSelectedOption] = useState('Male');
  
    const handleSelect = (option: string) => {
      setSelectedOption(option);
    };
  
    return (
      <>
        <View style={settingStyles.headerSettings}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <CaretLeft color='#242424' size={24} weight='bold'/>
          </TouchableOpacity>
  
          <Text style={settingStyles.settings}>Edit Settings</Text>
  
          <TouchableOpacity>
            <Text style={settingStyles.save}>save</Text>
          </TouchableOpacity>
        </View>
        
        <ScrollView style={settingStyles.scrollView}>
    
        <View style={settingStyles.photoSection}>
            <View style={settingStyles.profilePic}></View>
            <TouchableOpacity>
              <Text style={settingStyles.editPic}>Edit Photo</Text>
            </TouchableOpacity>
          </View>
  
          <View style={settingStyles.settingsInfo}>
            <View style={settingStyles.inputArea}>
              <TextInput 
                editable 
                autoFocus
                placeholder='Username'
                style={settingStyles.textInput}/>
  
              <TextInput 
                editable
                placeholder='Location'
                style={settingStyles.textInput}/>
  
              <TextInput 
                editable
                placeholder='Age in Years'
                style={settingStyles.textInput}/>
              </View>
  
              <View style={settingStyles.pickGender}>
                <Text style={settingStyles.label}>Gender</Text>
  
                <View style={settingStyles.radios}>
                  <RadioButton
                    options={['Male', 'Female', 'Prefer not to say']}
                    selectedOption={selectedOption}
                    onSelect={handleSelect}
                  />
              
                </View>
              </View>
  
              <View style={settingStyles.pickRadio}>
                <View style={settingStyles.pickRadioText}>
                  <Text style={settingStyles.label}>Radio</Text>
                  <Text style={settingStyles.radioValue}>30 km</Text>
                </View>
  
                
  
                <View style={settingStyles.radios}>
                <Slider
                  style={{width: '100%', height: 40, marginTop: 5}}
                  minimumValue={0}
                  maximumValue={1}
                  minimumTrackTintColor="#0567AD"
                  maximumTrackTintColor="#D9D9D9"
                />
              
                </View>
  
                <View style={settingStyles.infoArea}>
                  <Text style={settingStyles.info}>
                    By choosing a specific radius, the app can detect who is
                    selling or buying near your location. 
                  </Text>
                </View>
              </View>
  
            </View>
            
      </ScrollView>
      </>
    )
  }
  
  

  
  const settingStyles = StyleSheet.create({
    scrollView: {
      flex: 1,
      flexDirection: 'column',
      paddingTop: 0,
      padding: 10,
      backgroundColor: '#fff'
  
    },
    headerSettings: {
      height: 50,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingRight: 10,
      backgroundColor: '#fff'
    },
    settings: {
      fontSize: 14,
      fontWeight: '900'
    },
    save: {
      fontSize: 14,
      fontWeight: '800',
      color: '#0567AD'
    },
    photoSection: {
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'center',
      height: 190,
    },
    profilePic: {
      width: 120,
      height: 120,
      borderRadius: 120,
      backgroundColor: '#6AB891'
    },
    editPic: {
      fontSize: 13,
      fontWeight: '800',
      color: '#0567AD'
    },
    settingsInfo: {
      width: '100%',
      alignItems: 'center',
  
    },
    inputArea: {
      width: '100%',
      height: 190,
      justifyContent: 'space-evenly',
      alignItems: 'center',
    },
    textInput: {
      width: '97%',
      borderWidth: 1,
      borderColor: '#D9D9D9',
      borderRadius: 4,
      padding: 12
    },
    pickGender: {
      width: '95%',
      justifyContent: 'space-between',
      height: 50,
    },
    radios: {
      width: '97%',
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    label: {
      fontWeight: '600'
    },
    pickRadio: {
      marginTop: 25,
      width: '100%',
      height: 25,
      justifyContent: 'space-between'
    },
    pickRadioText: {
      width: '97%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingLeft: 8
    },
    radioValue: {
      fontSize: 12
    },
    infoArea: {
      width: '97%',
      marginTop: 10,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center'
  
    },
    info: {
      color: '#999',
      fontSize: 10
    }
    
  })
  
  
  export default Settings