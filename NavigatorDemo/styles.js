
import { 
  StyleSheet,
 
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  containerDisplay:{
  	flex:2,
 	backgroundColor:'#90CAF9',
 	justifyContent: 'center'
  },

  textDisplay:{
  	fontSize:45,
  	color:'#FFF',
  	alignSelf:'flex-end',
  	padding:5
  },

  containerInput:{
  	flex: 8,
  	backgroundColor: "#424242"
  },



  inputRow:{
  	flex:1,
  	flexDirection:'row'
  },

  inputButton:{
  	flex:1,
  	padding:20,
  	backgroundColor:'#757575',
  	borderWidth:1,
  	borderColor:'white',
  	justifyContent: 'center',
  	alignItems:'center'
  },

  textInputButton:{
  	fontSize:25,
  	fontWeight:'800',
  	color:'#FFF'
  }

});

export default styles;