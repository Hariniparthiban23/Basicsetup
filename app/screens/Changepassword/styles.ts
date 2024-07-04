import {StyleSheet, Dimensions, Platform} from 'react-native';
import AppStyle from '../../config/styles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {Colors} from 'react-native-paper';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  validText: {
    color: Colors.red400,
    fontSize: 14,
    marginLeft: 16,
  },
  btnStyle: {
    width: '80%',
    marginTop: wp(10),
    backgroundColor: '#2B83D5',
  },
  logoImg: {
    width: wp(80),
    height: wp(20),
    marginTop: wp(20),
    marginLeft: wp(10),
    justifyContent: 'center',
    resizeMode: 'cover',
  },
  logs: {
    justifyContent: 'center',
  },
  loginViaImg: {
    width: '70%',
    height: wp(4),
    marginLeft: wp(15),
    marginRight: wp(20),
    marginTop: wp(10),
  },
  emailIconStyle: {
    width: 45,
    height: 30,
    marginTop: wp(5),
  },
  appleIconStyle: {
    width: 25,
    height: 30,
    marginTop: wp(5),
  },
  facebookIcoStyle: {
    width: 30,
    height: 30,
    marginTop: wp(5),
  },
  emailTxt: {
    marginTop: wp(5),
  },
  pwdTxt: {
    marginTop: 4,
    width: '90%',
    fontSize: 15,
    marginLeft: 20,
    marginRight: 10,
    fontFamily: AppStyle.fonts.FONT_REGULAR,
    paddingHorizontal: -10,
    backgroundColor: AppStyle.color.COLOR_WHITE,
  },
  password: {
    left: wp(85),
    alignSelf: 'center',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
  },
  passwordContainer: {
    flexDirection: 'row',
    borderColor: '#000',
  },
  forgotPwd: {
    alignItems: 'flex-end',
    marginRight: wp(5),
    marginTop: wp(5),
  },
  forgotPwdTxt: {
    color: AppStyle.color.TITLE_COLOR,
    textAlign: 'left',
    fontSize: 14,
    marginLeft: 20,
    fontFamily: AppStyle.fonts.ROBOTO_FONT_REGULAR,
  },
  title: {
    marginTop: wp(7),
    color: AppStyle.color.TITLE_COLOR,
    textAlign: 'left',
    fontSize: 34,
    marginLeft: wp(5),
    fontFamily: AppStyle.fonts.FONT_BOLD,
  },
  subTitle: {
    marginTop: wp(2),
    color: AppStyle.color.TITLE_COLOR,
    textAlign: 'left',
    fontSize: 14,
    marginLeft: wp(5),
    fontFamily: AppStyle.fonts.ROBOTO_FONT_REGULAR,
  },
  socialView: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-evenly',
    marginLeft: 10,
    marginRight: 20,
    marginTop: 10,
  },
  socialBtn: {
    borderColor: '#8195a7',
    borderWidth: 2,
    borderRadius: 10,
    width: 80,
    height: 80,
  },
  signUpView: {
    width: '100%',
    height: 20,
    marginTop: 50,
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 70,
   },
  signUpTxt: {
    color: AppStyle.color.UNDERLINECOLOR,
    textAlign: 'left',
    fontSize: 14,
    textDecorationLine: 'underline',
    fontFamily: AppStyle.fonts.ROBOTO_FONT_BOLD,
  },
});
export default styles;
