import React, { useState, useMemo, useEffect } from 'react';
import {
  View,
  ScrollView,
  TouchableHighlight,
  Image
} from 'react-native';
import { FAB, Text } from 'react-native-paper';
import { useSelector } from '../../redux';
import { useDispatch } from 'react-redux';
import { Title } from 'react-native-paper'
import styles from './styles';
import NavigationService from '../../navigation/NavigationService';
import TemplateApi from '../../services/template';
import { ListResponse } from '../../models/common/listResponse';
import { useRoute } from '@react-navigation/native';
import { setScreenUpdated } from '../../redux/screen/actions';
import images from '../../config/images';
import { Col, Grid } from 'react-native-easy-grid'

const SCREEN_NAME = "LIST_TEMPLATES"

const NewHome: React.FC<any> = ({ navigation }) => {
  const user = useSelector(state => state.userReducer)
  const screen = useSelector(state => state.screenReducer)
  const [isLoading, setIsLoading] = useState(true);
  const templateApi = useMemo(() => new TemplateApi(), [user.loggedIn])
  const [data, setData] = useState<ListResponse<any>>()

  const [data2, setData2] = useState<any>([])

  const previewForm = (formId: number) => {
    NavigationService.navigate("UserApp", {
      screen: "TemplateSubmitForm",
      params: {
        formId
      }
    })
  }

  const dispatch = useDispatch()
  const route = useRoute<any>()


  const addTemplate = () => {
    NavigationService.navigate("UserApp", {
      screen: "AddTemplate"
    })
  }

  useEffect(() => {
    navigation.closeDrawer();
    if (screen.screenName === SCREEN_NAME) {
      onAdded()
      dispatch(setScreenUpdated(""))
    }
  }, [screen.screenName])

  const onAdded = () => {
    loadTemplates()
  }

  useEffect(() => {
    navigation.closeDrawer();
    if (user.loggedIn)
      loadTemplates()
  }, [user.loggedIn])
  useEffect(() => {
    navigation.closeDrawer();
   
  }, [])
  const loadTemplates = () => {
    console.log("Loading started")

    setIsLoading(true)
    setData({} as any)
    templateApi.templateList().then(res => {
      console.log("Loading end", res)
      setData(res.data)
      setData2(res.data.results)
      setIsLoading(false)
    }).catch(err => {
      console.log("Loading error")
      console.log(err)
      setIsLoading(false)
    })
  }

  const Vcheckpage = (checkListType: string) => {
    NavigationService.navigate("UserApp", {
      screen: "Templates",
      params: {
        checkListType
      }
    })
  }

  const supervisorMenu = () => {
    return (
      <View>
        <Grid>
          <Col>
            <TouchableHighlight
              key={'menu_1'}
              underlayColor={'#fff'}
              onPress={() =>
                Vcheckpage("vehicle")
              }
            //  onPress={() => {
            //         previewForm(item.ipss_form_id)
            //      }}
            >
              <View
                style={styles.card}>
             {/*   <Icon name="commute" size={40} color="#900" /> */}
           
                <Title style={styles.cardTitle}>Vehicle Checklist</Title>
              </View>
            </TouchableHighlight>
          </Col>
          <Col>
          <TouchableHighlight
              key={'menu_2'}
              underlayColor={'#fff'}
              onPress={() =>
                Vcheckpage("On Road Complaint")
              }
          
            >

            <View
              style={styles.card}>
              {/* <Icon name="assignment" size={40} color="#82AAE3" /> */}
           
              <Title style={styles.cardTitle}>On Road Compliant</Title>
            </View>
            </TouchableHighlight>
          </Col>
          <Col>
            {/* <TouchableHighlight
              key={'menu_3'}
              underlayColor={'#fff'}
              onPress={() =>
                Vcheckpage("drivers")
              }
            
            >
              <View
                style={styles.card}>
              
               <Image style={{ width:48,height:48 }} source={images.Driver} />
                <Title style={styles.cardTitle}>Driver Checklist</Title>
              </View>
            </TouchableHighlight> */}
          </Col>
        </Grid>
        <Grid>
          <Col>
          <TouchableHighlight
              key={'menu_2'}
              underlayColor={'#fff'}
              onPress={() =>
                NavigationService.navigate("UserApp", {
                  screen: "FuelFilling"
                 
                })
              }      
            >

            <View
              style={styles.card}>

            {/*  <MIcon name="fuel" size={40} color="#F49D1A" /> */}
            <Image style={{ width:48,height:48 }} source={images.Fuel} />
              <Title style={styles.cardTitle}>Fill Fuel</Title>
            </View>
            </TouchableHighlight>
          </Col>
          <Col></Col>
          <Col></Col>
          </Grid>
      </View>
    )
  }
  const MachanicMenu = () => {
    return (
      <View>
        <Grid>
         
          <Col>
          <TouchableHighlight
              key={'menu_2'}
              underlayColor={'#fff'}
              onPress={() =>
                Vcheckpage("On Road Complaint")
              }  
          
            >

            <View
              style={styles.card}>
            {/*  <Icon name="assignment" size={40} color="#82AAE3" /> */}
          
              <Title style={styles.cardTitle}>On Road Compliant</Title>
            </View>
            </TouchableHighlight>
          </Col>
          <Col>
          <TouchableHighlight
              key={'menu_3'}
              underlayColor={'#fff'}
              onPress={() =>
                NavigationService.navigate("UserApp", {
                  screen: "ResolveOnroadComplaint"
                 
                })
              }  
          
            >

            <View
              style={styles.card}>
             {/* <Icon name="assignment" size={40} color="#82AAE3" /> */}
             <Image style={{ width:42,height:42 }} source={images.Problem} />
              <Title style={styles.cardTitle}>Resolve On Road Compliant</Title>
            </View>
            </TouchableHighlight>
          </Col>
          <Col> 
      
          </Col>
          </Grid>
        
      </View>
    )
  }

  const DriverMenu = () => {
    return (
      <View>
      <Grid>
        <Col>
          <TouchableHighlight
            key={'menu_1'}
            underlayColor={'#fff'}
            onPress={() =>
              Vcheckpage("vehicle")
            }
          //  onPress={() => {
          //         previewForm(item.ipss_form_id)
          //      }}
          >
            <View
              style={styles.card}>
            {/*  <Icon name="commute" size={40} color="#900" /> */}
           
              <Title style={styles.cardTitle}>Vehicle Checklist</Title>
            </View>
          </TouchableHighlight>
        </Col>
        <Col>
        <TouchableHighlight
            key={'menu_2'}
            underlayColor={'#fff'}
            onPress={() =>
              Vcheckpage("On Road Complaint")
            }
        
          >

          <View
            style={styles.card}>
            {/* <Icon name="assignment" size={40} color="#82AAE3" /> */}
          
            <Title style={styles.cardTitle}>On Road Compliant</Title>
          </View>
          </TouchableHighlight>
        </Col>
        <Col></Col>
        {/*
        <Col>
        <TouchableHighlight
              key={'menu_2'}
              underlayColor={'#fff'}
              onPress={() =>
                Vcheckpage("Fill Fuel") 
              }      
            >

            <View 
              style={styles.card}>

              <MIcon name="fuel" size={40} color="#F49D1A" />
              <Title style={styles.cardTitle}>Fill Fuel</Title>
            </View>
            </TouchableHighlight>
        </Col>
            */}
      </Grid>
     
    </View>

     
    )
  }

  const adminMenu = () => {
 
    return (
      <View>
        <Grid>
          <Col>
            <TouchableHighlight
              key={'menu_1'}
              underlayColor={'#fff'}
              onPress={() =>
                Vcheckpage("Templates")
              }
            
            >
              <View
                style={styles.card}>
              
              
                <Title style={styles.cardTitle}>Checklist</Title>
              </View>
            </TouchableHighlight>
          </Col>
          <Col>
          <TouchableHighlight
              key={'menu_2'}
              underlayColor={'#fff'}
              onPress={() =>
                Vcheckpage("Templates") 
              }      
            >
            <View
              style={styles.card}>


             
            
              <Title style={styles.cardTitle}>Data entry</Title>
            </View>
            </TouchableHighlight>
          </Col>
          <Col>
          {/* <TouchableHighlight
              key={'menu_3'}
              underlayColor={'#fff'}
              onPress={() =>
                Vcheckpage("drivers")
              }
          
            >
            <View
              style={styles.card}> 

       
           <Image style={{ width:48,height:48 }} source={images.Driver} />
              <Title style={styles.cardTitle}>Change Password</Title>
            </View>
            </TouchableHighlight> */}
          </Col>
        </Grid>
        {/* <Grid>
          <Col>
          <TouchableHighlight
              key={'menu_2'}
              underlayColor={'#fff'}
              onPress={() =>
                NavigationService.navigate("UserApp", {
                  screen: "FuelFilling"
                 
                })
              }      
            >

            <View
              style={styles.card}>

           
           <Image style={{ width:48,height:48 }} source={images.Fuel} />
              <Title style={styles.cardTitle}>Fill Fuel</Title>
            </View>
            </TouchableHighlight>
          </Col>
          <Col>
            <View
              style={styles.card2}>
              <AIcon name="notification" size={40} color="#5F8D4E" />

              <Title style={styles.cardTitle}>Notifications</Title>
            </View>
          </Col>
          <Col  style={{ opacity: .5}}>
            <View
              style={styles.card}>

              <Icon name="notifications-active" size={40} color="#EB6440" />
              <Title style={styles.cardTitle}>Alerts</Title>
            </View>
          </Col>

        </Grid>
        <Grid>

          <Col>
            <View
              style={styles.card2}>

              <AIcon name="areachart" size={40} color="#900" />
              <Title style={styles.cardTitle}>Reports</Title>
            </View>
          </Col>
          <Col>
            <View
              style={styles.card2}>

              <Icon name="feedback" size={40} color="#D6E4E5" />
              <Title style={styles.cardTitle}>Feedback</Title>
            </View>
          </Col>

          <Col>
            <View
              style={styles.card2}>

              <MIcon name="qrcode-scan" size={38} color="#282A3A" />
              <Title style={styles.cardTitle}>Fuel QR Code Scaner</Title>
            </View>
          </Col>
        </Grid> */}
   
      </View>
    )
  }

//   const renderMenu = () => {
//     if (user.userRoles.includes("Supervisor")) {
//       return supervisorMenu()
//     } else if (user.userRoles.includes("Admin")) {
//       return adminMenu()
//     }
//     else if(user.userRoles.includes('Mechanic')){
// return MachanicMenu()
//     } 
//     else if(user.userRoles.includes('Driver')){
//       return DriverMenu()
//           } 
    

//   } 
const renderMenu = () => {
  // if (user.userRoles === 'Parent') {
  //    return supervisorMenu();
  //  }else{
       return adminMenu();
     
  //  }
 };


  return (
    <>
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.abbTitle}>Dashboard</Text>
          {renderMenu()}
          
        </ScrollView>  
        {(user.userRoles.includes('Admin')) &&
          <FAB 
            icon="file"    
            style={styles.fab}
            onPress={addTemplate}
          /> 
        } 
      </View>
    </>
  );
};

export default NewHome;
