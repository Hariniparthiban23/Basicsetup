import * as React from 'react';
import {NavigationContainer, Theme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {navigationRef} from './NavigationService';
import {StyleSheet, StatusBar} from 'react-native';
import SplashScreen from '../screens/Splash';
import Login from '../screens/Login';
import CustomDrawerContent from '../screens/Drawer';
import Home from '../screens/Home';
import Changepassword from '../screens/Changepassword';
import AboutDetails from '../screens/About/About';
import Templates from '../screens/NewHome/templates';
import {Colors} from 'react-native-paper';
import homeui from '../screens/uihome/homeui';
import ScanScreen from '../screens/uihome/QrScanner';

const Stack = createStackNavigator();
const AuthStack = createStackNavigator();
const UserStack = createStackNavigator();
const UserAppStack = createStackNavigator();
const BottomTab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();


interface IProps {
  theme: Theme;
}

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      <AuthStack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <AuthStack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
    </AuthStack.Navigator>
  );
};

const UserHome = () => {
  return (
    <UserStack.Navigator screenOptions={{headerShown: false}}>
      <UserStack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
    </UserStack.Navigator>
  );
};

const NewHome = () => {
  return (
    <UserStack.Navigator screenOptions={{headerShown: false}}>
      <UserStack.Screen
        name="NewHome"
        component={homeui}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
    </UserStack.Navigator>
  );
};

const MainApp = () => {
  return (
    <Drawer.Navigator
      drawerContent={navigation => <CustomDrawerContent {...navigation} />}>
      <Drawer.Screen
        name="Home"
        options={{
          headerShown: false,
          headerStyle: {
            backgroundColor: '#2B83D5',
          },
          headerTintColor: 'white',
        }}
        component={homeui}
      />
    </Drawer.Navigator>
  );
};

const UserApp = () => {
  return (
    <UserAppStack.Navigator>
     
    

      
      
      
      

    
     
      
    
      
      <UserAppStack.Screen
        name="Changepassword"
        component={Changepassword}
        options={{
          title: 'Change Password',
          headerStyle: {
            backgroundColor: '#2B83D5',
          },
          headerTintColor: 'white',
        }}
      />
  
    
      <UserAppStack.Screen
        name="AboutDetails"
        component={AboutDetails}
        options={{
          title: 'About',
          headerStyle: {
            backgroundColor: '#2B83D5',
          },
          headerTintColor: 'white',
        }}
      />
      
      
    
      

     
      <UserAppStack.Screen
        name="UserMainHome"
        options={{
          title: 'Templates',
        }}
        component={UserHome}
      />
    
     
    </UserAppStack.Navigator>
  );
};

const App: React.FC<IProps> = (props: IProps) => {
  const {theme} = props;
  return (
    <NavigationContainer ref={navigationRef} theme={theme}>
      <StatusBar translucent={true} backgroundColor={Colors.black} />

      <Stack.Navigator>
        <Stack.Screen
          name="Auth"
          component={AuthNavigator}
          options={{headerShown: false, gestureEnabled: false}}
        />
        <Stack.Screen
          name="MainApp"
          component={MainApp}
          options={{headerShown: false, gestureEnabled: false}}
        />
        <Stack.Screen
          name="UserApp"
          component={UserApp}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  tabbarStyle: {
    color: '#07245B',
    fontSize: 11,
  },
  unselecttabbarStyle: {
    color: 'gray',
    fontSize: 11,
  },
});

export default App;
