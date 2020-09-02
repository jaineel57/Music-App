import React,{Component} from 'react';
import {StyleSheet, Text, View,TextInput,Button,Image,ImageBackground} from 'react-native';

export default class signUp  extends  React.Component {
        static navigationOptions = { 

                title: 'SIGNUP',  
                headerStyle: {  
                    backgroundColor: '#EB9CD0', 
                    
                },  
                 
                headerTitleStyle: {  
                    fontWeight: 'bold', 
                    fontStyle: 'italic',
                     
                },  
            };  
        render(){
return (
        <ImageBackground
        style={{ flex: 1 }}
        source={{
          uri:
            'https://wallpapertag.com/wallpaper/full/9/2/f/751297-new-good-mac-backgrounds-2560x1600-ipad-pro.jpg',
        }}

        >
     
     
<View style={{flex:1,justifyContent:'center',alignItems:'center',paddingHorizontal:50}} >
  <View>
  <Image source={{uri:'https://i.pinimg.com/originals/5c/c7/70/5cc7702abc7c46969efc48d5d4cdf2d7.png '}}
          style={{width:200, height:250,marginVertical:20}} />
  </View>        
  <View> 
  <TextInput placeholder="Name" style={{borderBottomColor: 'black',borderBottomWidth: 1,paddingVertical:0,paddingHorizontal:15,height:18,fontSize:18,marginVertical:20}} />
  <TextInput placeholder="Email" style={{borderBottomColor: 'black',borderBottomWidth: 1,paddingVertical:0,paddingHorizontal:15,height:18,fontSize:18,marginVertical:20}} />
  <TextInput placeholder="Password" style={{borderBottomColor: 'black',borderBottomWidth: 1,paddingVertical:0,paddingHorizontal:15,height:18,fontSize:18,marginVertical:20}} />
  <TextInput placeholder="Confirm Password" style={{borderBottomColor:'black',borderBottomWidth: 1,paddingVertical:0,paddingHorizontal:15,height:18,fontSize:18,marginVertical:20}} />
  <Button title="Register" color="black" 
          onPress={() => this.props.navigation.navigate('genre')} />
  </View>
  <View>
  <Text style={{color:'white',marginTop:13,fontWeight:"bold",marginLeft:7}}
        onPress={() => this.props.navigation.navigate('login')}>
                {'Already a user ? Login Here'}
        </Text>
        </View>
 
  
  </View>
  </ImageBackground>
);
}
}
        