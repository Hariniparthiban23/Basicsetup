import { Platform, StyleSheet, Dimensions } from "react-native";
import OutlineTextinput from "../../components/OutlineTextinput";
import AppStyle from "../../config/styles";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height:'100%',
   
    // backgroundColor:"red",
    // backgroundColor: AppStyle.color.DUAL_COLOR, 
    // background: "rgb(87,41,130)",
    // backgroundColor: "linear-gradient(19deg, #d56195 0%, rgba(0,212,255,1) 100%)",


  },
  gradient: {
    flex: 1,
  },
//   cardhome:{
//     // backgroundColor:"red",
//     // backgroundColor: "linear-gradient(167deg, rgba(87,41,130,1) 5%, rgba(3,207,251,1) 43%, rgba(33,0,255,1) 100%)",
//   },
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
    // borderRadius:20,
    // margin: 5,
    // padding:5,
    // // textAlign:'center',   
    // Width:100,
    // minHeight: 120,
    // textAlignVertical: 'center',
    // backgroundColor:'#fff',
    // border: '1px solid #77aaff', 
    // //shadowOffset: {width: -2, height: 4},  
    // shadowColor: '#171717',  
    // shadowOpacity: 0.2,  
    // shadowRadius: 3,   
    // elevation: 20, 
    borderRadius:20,
    margin: 15,
    padding:5,
    
    width:105,
     height: 110,
    
    backgroundColor:'#fff',
    border: '1px solid #77aaff', 
    shadowOffset: {width: -2, height: 4},  
    shadowColor: '#171717',  
    shadowOpacity: 0.2,  
    shadowRadius: 3,   
    elevation: 4, 
   marginTop:250,
   
  

  
},
card9: {
  borderRadius:20,
  margin: 5,
  padding:5,
  textAlign:'center',   
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
card12: {
  // borderRadius:20,
  // margin: 5,
  // padding:5,
  // // textAlign:'center',   
  // Width:100,
  // minHeight: 120,
  // textAlignVertical: 'center',
  // backgroundColor:'#fff',
  // border: '1px solid #77aaff', 
  // //shadowOffset: {width: -2, height: 4},  
  // shadowColor: '#171717',  
  // shadowOpacity: 0.2,  
  // shadowRadius: 3,   
  // elevation: 20, 
  borderRadius:20,
  margin: 15,
  padding:5,
  
  width:105,
   height: 110,
  
  backgroundColor:'#fff',
  border: '1px solid #77aaff', 
  shadowOffset: {width: -2, height: 4},  
  shadowColor: '#171717',  
  shadowOpacity: 0.2,  
  shadowRadius: 3,   
  elevation: 4, 
  marginTop:160,
  
  
  
  


},
card13: {
  // borderRadius:20,
  // margin: 5,
  // padding:5,
  // // textAlign:'center',   
  // Width:100,
  // minHeight: 120,
  // textAlignVertical: 'center',
  // backgroundColor:'#fff',
  // border: '1px solid #77aaff', 
  // //shadowOffset: {width: -2, height: 4},  
  // shadowColor: '#171717',  
  // shadowOpacity: 0.2,  
  // shadowRadius: 3,   
  // elevation: 20, 
  borderRadius:20,
  margin: 20,
  padding:5,
  
  width:105,
   height: 110,
  
  backgroundColor:'#aaa',
  opacity: 0.3,
  border: '1px solid #77aaff', 
  shadowOffset: {width: -2, height: 4},  
  shadowColor: '#aaa',  
  shadowOpacity: 0.5,  
  shadowRadius: 3,   
  elevation: 4, 
  marginTop:160,
},
Image :{
  alignItems:"center",
  width:45,
  height:45 ,
  justifyContent:"center",
  marginStart:23,
  marginTop:5,
},
card5: {
  borderRadius:20,
  margin: 20,
  padding:5,    
  width:100,
  height: 80, 
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
  minWidth:'40%',
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
cardTitles: {
  textAlign:'center',
    marginTop:10, 
    fontSize:13,
    lineHeight:20,
    fontWeight:'600'    
},
cardActions: {
    marginTop: 0

},
carddesc:{
  fontSize:6    
},
baseText :{
  fontWeight:'bold',
  fontSize:12
},
innerText :{
  paddingLeft:10
},
container1: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
},
map: {
  width: '100%',
  height: '100%',
},
activeStop: {
  backgroundColor: 'yellow',
},
icons:{
width:20,
height:20,
marginStart:40,
},
icontexts:
{
  marginStart:20,
},
containers: {
  position: 'absolute',
  marginTop:-19,
  left: 0,
  right: 0,
  backgroundColor: '#fafafa',
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
  borderBottomLeftRadius: 20,
  borderBottomRightRadius: 20,
  padding: 10,
  justifyContent: 'flex-start',
  alignItems: 'stretch',
  margin: 10,
},
handle: {
  height: 5,
  width: 50,
  backgroundColor: '#ccc',
  borderRadius: 5,
  alignSelf: 'center',
  marginVertical: 10,
},
stopContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  borderBottomWidth: 1,
  borderBottomColor: '#ccc',
  paddingVertical: 10,
},
headingContainer: {
  flexDirection: 'row',
  
  marginBottom: 10,
},
headingmap: {
  flexDirection: 'row',
  position: 'absolute',
  top: 16,
  left: 16,
},
headingText: {
  fontWeight: 'bold',
  fontSize: 20,
},
stopSequence: {
  width: 50,
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: 10,
},
stopSequenceText: {
  fontSize: 18,
},
stopDetails: {
  flex: 1,
  flexDirection: 'column',
  alignItems: 'stretch',
},
stopDetailRow: {
  flexDirection: 'row',
  alignItems: 'center',
  marginVertical: 2,
},
stopLabel: {
  fontSize: 14,
  fontWeight: 'bold',
  marginRight: 5,
  color: "black",
},
stopText: {

  fontSize: 14,
  color: '#666',
  flexDirection: 'row',
},
stopTexts: {

  fontSize: 14,
  color: '#666',
  marginStart: 20,
},
stopArrival: {
  flex: 1,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-start',
},
stopDeparture: {
  flex: 1,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-end',
},
checkPoint: {
  width: 24,
  height: 24,
  borderRadius: 12,
  backgroundColor: '#ccc',
  justifyContent: 'center',
  alignItems: 'center',
  marginStart: 25,
},
checkPointActive: {
  width: 24,
  height: 24,
  borderRadius: 12,
  backgroundColor: 'green',
  justifyContent: 'center',
  alignItems: 'center',
},
checkPointText: {
  color: '#fff',
  fontWeight: 'bold',
},
zoomButton: {
  position: 'absolute',
  top: 16,
  left: 16,
  backgroundColor: '#fff',
  borderRadius: 16,
  elevation: 3,
},
zoomIcon: {
  height: 32,
  width: 32,
  resizeMode: 'contain',
},
//

containers1: {
  flex: 1,
  flexDirection: 'column',
  
},
rows1: {
  flexDirection: 'row',
  
},

cards1: {
  width: '48%',
  borderRadius: 8,
  backgroundColor: '#fff',
  padding: 16,
  alignItems: 'center'
},
images1: {
  height: 56,
  width: 56,
  marginBottom: 8
},
cardTitles1: {
  fontSize: 16,
  fontWeight: 'bold',
  textAlign: 'center'
}


});

export default styles;
