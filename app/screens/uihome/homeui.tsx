import React, {useEffect, useMemo} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Alert,
  Linking,
} from 'react-native';
import {Col, Grid} from 'react-native-easy-grid';
import {Title} from 'react-native-paper';
import NavigationService from '../../navigation/NavigationService';
import images from '../../config/images';
import {useSelector} from '../../redux';
import {deleteCurrentUser} from '../../redux/user/actions';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {DrawerActions} from '@react-navigation/native';
import DeviceInfo from 'react-native-device-info';
import IdmApi from '../../services/auth';
import RNExitApp from 'react-native-exit-app';
import LinearGradient from 'react-native-linear-gradient';
import { useDispatch } from 'react-redux';

const App: React.FC<any> = ({navigation}) => {
  const user = useSelector(state => state.userReducer);
  const api = useMemo(() => new IdmApi(), [user.access_token]);

  const dispatch = useDispatch();
  const logout = () => {
    dispatch(deleteCurrentUser());
    NavigationService.replace('Auth', {
      screen: 'Login',
    });
  };
  const openDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };
  const checkAppVersionUpgrade = async () => {
    let appId = DeviceInfo.getBundleId();
    let versionNumber = Number(DeviceInfo.getVersion().split('.')[2]);
    let codeName = await DeviceInfo.getCodename();
    api
      .checkAppUpdates(appId)
      .then(res => {
        if (res.data.results) {
          let filtered = res.data.results.filter(
            (item: any) =>
              item?.asset_attributes?.active == 'Yes' &&
              item?.asset_attributes?.code_name == codeName,
          );
          const nextVersion = filtered.find((release: any) => {
            return (
              parseInt(release?.asset_attributes?.version) > versionNumber &&
              release?.asset_attributes?.priority === 'high'
            );
          });

          const nextVersionWithoutPriority = filtered.find((release: any) => {
            return parseInt(release?.asset_attributes?.version) > versionNumber;
          });
          const finalVersion = nextVersionWithoutPriority;
          if (finalVersion) {
            let appUpdate = finalVersion;
            let cloudVersion = appUpdate?.asset_attributes?.version;
            let cloudLink = appUpdate?.asset_attributes?.download_url;
            let priority = appUpdate?.asset_attributes?.priority;
            if (cloudVersion > Number(versionNumber)) {
              Alert.alert(
                'App Update required',
                'A new app version released, please download and install to continue.',
                [
                  {
                    text: 'Download Update',
                    onPress: () => {
                      Linking.openURL(cloudLink);
                      RNExitApp.exitApp();
                    },
                  },
                  priority != 'high' && !nextVersion
                    ? {
                        text: 'Skip Update',
                        onPress: () => {},
                      }
                    : (null as any),
                ],
              );
              return;
            }
          }
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (user.loggedIn) {
      checkAppVersionUpgrade();
    }
  }, [user.loggedIn]);
  return (
    <View style={styles.container}>
     
      <View style={styles.rectangle1} />
      
      <View style={styles.rectangle2} />
      
      <View style={styles.rectangle3} />
      
      <View style={{marginTop: 200}}>

      
       
        </View>
      <TouchableOpacity style={styles.logoutButton} onPress={logout}>
        <Icon name="logout" size={30} color="white" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.menubutton} onPress={openDrawer}>
        <Icon name="menu" size={30} color="white" />
      </TouchableOpacity>

      <View style={{marginTop: 400, alignItems: 'center'}}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fcfcfc',
  },
  imageOnRectangle: {
    position: 'absolute',
    top: 140,
    left: 80,

    width: '60%',
    height: 100,
  },
  linearGradient: {
    flex: 1,
    borderRadius: 5, // Adjust as needed
  },
  gradient: {
    flex: 1,
  },
  rectangle1: {
    width: 455.65,
    height: 288,
    borderRadius: 32,
    backgroundColor: '#2B83D5',
    transform: [
      {translateY: -100.31},
      {translateX: -80.01},
      {rotate: '-39.53deg'},
    ],
    position: 'absolute',
    top: 0,
    left: 0,
  },
  logoutButton: {
    position: 'absolute',
    top: 35,
    right: 12,
    backgroundColor: 'transparent',
    padding: 8,
  },
  menubutton: {
    position: 'absolute',
    top: 35,
    left: 12,
    backgroundColor: 'transparent',
    padding: 8,
  },
  Image1: {
    // Styles for the image (modify as needed)
    width: "70%", // Adjust the width
    height: 50,
    alignSelf: 'center',

   // Adjust the height
  },

  overlayImage: {
    position: 'absolute',
    bottom:160, // Adjust the top position
    left: 0, // Adjust the left position
  },
  rectangle2: {
    width: 500.65,
    height: 310,
    borderRadius: 32,
    backgroundColor: '#095885',
    transform: [
      {translateY: -90.31},
      {translateX: -80.01},
      {rotate: '31.16deg'},
    ],
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: -1,
  },
  rectangle3: {
    width: 500.65,
    height: 310,
    borderRadius: 32,
    backgroundColor: '#02EAEA',
    transform: [
      {translateY: -110.31},
      {translateX: -28.01},
      {rotate: '-41.996deg'},
    ],
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: -1,
  },

  cardTitles: {
    textAlign: 'center',
    fontSize: 13,
    lineHeight: 20,
    fontWeight: '600',
  },
  connectionStatus: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  noInternetContainer: {
    backgroundColor: 'red',
    padding: 10,
    alignItems: 'center',
  },
  noInternetText: {
    color: 'white',
    fontWeight: 'bold',
  },
  Image: {
    alignItems: 'center',
    width: 60,
    height: 60,
    justifyContent: 'center',
    marginStart: 22,
    marginTop: 5,
  },
  
  cardTitle: {
    textAlign: 'center',
    fontSize: 13,
    lineHeight: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  logoImg: {
    width: 300,
    height: 100,
    marginTop: 100,
    marginStart: 40,
    justifyContent: 'center',

    alignItems: 'center',
  },

  menu: {
    textAlign: 'left',
  },
  logoImg1: {
    width: 40,
    height: 40,
  },
  card: {
    width: '80%',
    height: 107,
    alignSelf: 'center',
    backgroundColor: '#f77170',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginTop: 150,
  },
  card2: {
    width: '80%',
    height: 108,
    alignSelf: 'center',
    backgroundColor: '#246ee9',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginTop: 150,
  },

  card3: {
    width: '80%',
    height: 107,
    alignSelf: 'center',
    backgroundColor: '#3db588',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginTop: 150,
  },
  card4: {
    width: '80%',
    height: 111,
    alignSelf: 'center',
    backgroundColor: '#f77170',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginTop: 150,
  },
  card5: {
    width: '80%',
    height: 111,
    alignSelf: 'center',
    backgroundColor: '#c4b5fd',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginTop: 150,
  },
  carddashboard: {
    width: '80%',
    height: 109,
    alignSelf: 'center',
    backgroundColor: '#f03c93',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginTop: 150,
  },
  header: {
    marginTop: 55,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignItems: 'center',
    height: 50,
    backgroundColor: 'transparent',
  },
  menuButton: {
    padding: 10,
    borderRadius: 5,

    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 25,
    height: 25,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: 'bold',
  },
  card1: {
    width: '80%',
    height: 100,
    alignSelf: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginTop: 280,
  },
});

export default App;
