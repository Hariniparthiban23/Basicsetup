import { StyleSheet, Dimensions, Platform } from "react-native";
import { Colors } from "react-native-paper";
import AppStyle from "../../config/styles";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2B83D5",
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    color: 'blue',
    fontSize: 28,
    fontWeight:"bold",
  },
  centerFlex: {
    justifyContent: "center",
    alignItems: "center",
  },
  nameTxt: {
    fontSize: 18,
    fontFamily: AppStyle.fonts.FONT_SEMIBOLD,
    color:"white",
  },
  degreeTxt: {
    fontSize: 14,
    fontFamily: AppStyle.fonts.ROBOTO_FONT_REGULAR,
    color: "white",
  },
  drawerItemStyle: {
    flexDirection: "row",
    height: 45,
    borderRadius:5,
    alignItems: "center",
    paddingLeft: 30,
    
  },
  drawerSubItemStyle: {
    flexDirection: "row",
    height: 45,
    backgroundColor: "#fff",
    alignItems: "center",
    borderBottomColor: "#536476",
    borderBottomWidth: 0.1,
    paddingLeft: 46,
  },
  drawerSubView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "86%",
  },
  drawerItemTxt: {
    fontSize: 16,
    fontFamily: AppStyle.fonts.ROBOTO_FONT_REGULAR,
    color: "white",
    paddingLeft: 20,
  },
});

export default styles;
