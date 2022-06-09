import { StyleSheet, Text } from 'react-native';

export default function Dolar(props) {
	return (
	  <>
	  <Text style={styles.cabecalho}>Cotação do Dolar em tempo real</Text>      
	    <Text style={styles.text}> compra: {props.data.bid}</Text>
	    <Text style={styles.text}> venda: {props.data.ask}</Text>
	    <Text style={styles.text}> variação: {props.data.varBid}</Text>
	    <Text style={styles.text}> maximo: {props.data.high}</Text>
	    <Text style={styles.text}> minimo: {props.data.low}</Text>
	  </>
  );
}
const styles = StyleSheet.create({
    cabecalho:{
    color:'#fff',
    fontSize:20,
    marginTop:10,
    },
	text:{
		color:'#fff',
		fontSize:20,
	  	textAlign:'center',
		marginTop:10
	}
});