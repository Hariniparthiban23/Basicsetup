import { StyleSheet } from 'react-native';
import AppStyle from '../../config/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
    backgroundColor: AppStyle.color.COLOR_BG, 
  },
  centerFlex: {
    justifyContent: "center",
    alignItems: "center",
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    color: 'blue', // Color of the text
    fontSize: 28,
    fontWeight:"bold",// Font size of the text
  },
  buttonstyle: {    
   marginBottom:15,
 borderRadius:50,
 minWidth:200
  },
});
 
export default styles;
