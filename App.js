import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Dolar from './components/Dolar';
import Api from './components/Api';

export default function App() {
	const [dolar, setDolar] = useState(0);
  async function GetDolar(){
    const response = await Api.get('/last/USD-BRL');
    setDolar(response.data.USDBRL);
  }
  return (
    <View style={styles.container}>
  <View style={styles.bloco}>
   <Text style={styles.texto}>cotação Dólar</Text>
   
	   
   <TouchableOpacity style={styles.botao} onPress={GetDolar}>
       <Text style={styles.textoBotao}>pesquisar</Text>
   </TouchableOpacity>
	  
  </View>
	 {dolar ? <Dolar data={dolar}/> : null} 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
	  color:'#fff',
    flex: 1,
    backgroundColor: '#252525',
    alignItems: 'center',
    justifyContent: 'center',
  },
	bloco:{
		width:'100%'
	},
  texto:{
	  	color:'#fff',
		fontSize:20,
	  	textAlign:'center',
	},
	botao:{
		width:'80%',
		marginLeft:'10%',
	},
	textoBotao:{
		color:'#fff',
		fontSize:20,
	  	textAlign:'center',
	},
});
