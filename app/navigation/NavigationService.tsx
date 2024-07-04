import * as React from 'react';
import { CommonActions, NavigationContainerRef, StackActions } from '@react-navigation/native';


export const navigationRef = React.createRef<NavigationContainerRef<any>>();
function navigate(name: string, params?: any) {
  navigationRef.current?.navigate(name, params);
}
function replace(name: string, params?: any) {
  navigationRef.current?.dispatch(StackActions.replace(name, params));
}
function goBack() {
  navigationRef.current?.goBack();
}
function logout(name:string){
  navigationRef.current?.dispatch(CommonActions.reset({
    index: 0,
    routes: [{ name: name }], // Replace with your Auth screen name
  }));
};
export default {
  navigate,
  goBack,
  replace,
  logout
};
