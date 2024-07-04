import { Platform, StyleSheet, Dimensions } from "react-native";
import OutlineTextinput from "../../components/OutlineTextinput";
import AppStyle from "../../config/styles";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height:'100%',
    backgroundColor: AppStyle.color.COLOR_BG, 
  },
  abbTitle: {
    margin: 15, 
    fontSize:22,
    textAlign:"center",    
},
  fab: {
    backgroundColor: AppStyle.color.PRIMARY_BUTTON_COLOR,
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
  card: {
    borderRadius:20,
    margin: 10,
    padding:5,
    textAlign:'center',
    justifyContent:'center',
    alignItems:'center',
    minWidth:'80%',
    minHeight: 100,
    textAlignVertical: 'center',
    backgroundColor:'#fff',
    border: '1px solid #77aaff', 
    shadowOffset: {width: -2, height: 4},  
    shadowColor: '#171717',  
    shadowOpacity: 0.2,  
    shadowRadius: 3,   
    elevation: 20,    
  
},
card2: {
  borderRadius:20,
  margin: 10,
  padding:5,
  textAlign:'center',
  justifyContent:'center',
  alignItems:'center',
  minWidth:'80%',
  minHeight: 100,
  textAlignVertical: 'center',
  backgroundColor:'#fff',
  border: '1px solid #77aaff', 
  //shadowOffset: {width: -2, height: 4},  
  shadowColor: '#171717',  
  shadowOpacity: 0.2,  
  shadowRadius: 3,   
  elevation: 20, 
  opacity:.5,

},
vehtitle :{
  fontSize:18,
  marginLeft:15,
  fontWeight:'bold'
},
cimg : {
height:50,
margin:5,
justifyContent:'center',
width:50
},
cardTitle: {
  textAlign:'center',
    marginBottom: 10, 
    fontSize:13,
    lineHeight:20,
    fontWeight:'600'    
},

cardActions: {
    marginTop: 0

},
carddesc:{
  fontSize:6    
}
});

export default styles;
