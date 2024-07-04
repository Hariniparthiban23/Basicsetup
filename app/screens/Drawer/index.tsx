import React, {useEffect, useState} from 'react';

import {
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import NavigationService from '../../navigation/NavigationService';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';
import {useSelector} from '../../redux';
import {useDispatch} from 'react-redux';
import {deleteCurrentUser} from '../../redux/user/actions';
import DeviceInfo from 'react-native-device-info';

const CustomDrawerContent: React.FC<any> = ({navigation}) => {
  const [profileImgUrl, setProfileImgUrl] = useState('');
  const user = useSelector(state => state.userReducer);
  const dispatch = useDispatch();
  const version = DeviceInfo.getVersion();
 
  const gotoNHome = () => {
    NavigationService.navigate('MainApp', {
      screen: 'NewHome',
    });
  };
  
  const logout = () => {
    dispatch(deleteCurrentUser());
    NavigationService.replace('Auth', {
      screen: 'Login',
    });
    navigation.closeDrawer();
  };

  useEffect(() => {
    navigation.closeDrawer();
  }, []);

  return (
    <>
      
      <View style={styles.container}>
        <View
          style={{
            flex: 0.2,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 10,
          }}>
          <View style={{flexDirection: 'row'}}>
            <View style={[styles.centerFlex, {flex: 0.3}]}>
              {profileImgUrl !== '' &&
              profileImgUrl !== null &&
              profileImgUrl !== undefined ? (
                <TouchableOpacity
                  style={[
                    styles.centerFlex,
                    {height: 65, width: 65, borderRadius: 50},
                  ]}>
                  <View style={[styles.avatar, {backgroundColor: '#007bff'}]}>
                    <Text style={styles.avatarText}>
                      {user?.user?.firstname?.charAt(0).toUpperCase()}
                    </Text>
                  </View>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={[
                    styles.centerFlex,
                    {height: 65, width: 65, borderRadius: 50},
                  ]}>
                  <View style={[styles.avatar, {backgroundColor: '#ffff'}]}>
                    <Text style={styles.avatarText}>
                      {user?.user?.firstname?.charAt(0).toUpperCase()}
                    </Text>
                  </View>
                </TouchableOpacity>
              )}
            </View>

            <View
              style={[
                styles.centerFlex,
                {
                  flex: 0.7,
                  paddingLeft: 5,
                  alignItems: 'flex-start',
                  justifyContent: 'space-evenly',
                },
              ]}>
              <Text style={styles.nameTxt}>{`${user.user.firstname}`}</Text>
              <Text style={styles.degreeTxt}>{user.user.username}</Text>
            </View>
          </View>
        </View>

        <View style={{flex: 0.8}}>
          <KeyboardAwareScrollView style={{flex: 1}}>
            <TouchableOpacity
              onPress={() => {
                navigation.closeDrawer();
                gotoNHome;
              }}
              style={styles.drawerItemStyle}>
              <Icon name="home" size={22} style={{color: 'white'}} />
              <Text style={styles.drawerItemTxt}>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                navigation.closeDrawer();
                NavigationService.navigate('UserApp', {
                  screen: 'AboutDetails',
                });
              }}
              style={styles.drawerItemStyle}>
              <Icon name="info" size={22} style={{color: 'white'}} />
              <Text style={styles.drawerItemTxt}>About</Text>
            </TouchableOpacity>

            

            <TouchableOpacity
              onPress={() => {
                navigation.closeDrawer();
                NavigationService.navigate('UserApp', {
                  screen: 'Changepassword',
                });
              }}
              style={styles.drawerItemStyle}>
              <Icon name="vpn-key" size={22} style={{color: 'white'}} />
              <Text style={styles.drawerItemTxt}>Change Password</Text>
            </TouchableOpacity>
          

            <TouchableOpacity
              onPress={() => {
                navigation.closeDrawer();
                NavigationService.navigate('UserApp', {
                  screen: 'Settings',
                });
              }}
  
              style={styles.drawerItemStyle}>
              <Icon name="settings" size={22} style={{color: 'white'}} />
              <Text style={styles.drawerItemTxt}>Settings</Text>
            </TouchableOpacity>


                    

            <TouchableOpacity onPress={logout} style={styles.drawerItemStyle}>
              <Icon name="logout" size={22} style={{color: 'white'}} />
              <Text style={styles.drawerItemTxt}>Logout</Text>
            </TouchableOpacity>
          </KeyboardAwareScrollView>
        </View>

        <View style={{flex: 0.1, justifyContent: 'center', paddingLeft: 10}}>
          <Text style={{fontSize: 12, color: 'white'}}>Version {version}</Text>
          <Text style={{fontSize: 10, color: 'white'}}>Powered By</Text>
          <Text style={{fontSize: 14, color: 'white'}}>Techgenzi</Text>
        </View>
      </View>
    </>
  );
};

export default CustomDrawerContent;
