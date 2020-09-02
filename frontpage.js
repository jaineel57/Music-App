import React,{Component} from 'react';
import {StyleSheet, Text, View,TextInput,Button,Image,ImageBackground,Header} from 'react-native';
export default class frontpage extends React.Component {
    static navigationOptions = { 

        title: 'UPBEAT  ',  
        headerStyle: {  
            backgroundColor: '#EB9CD0'
        
        },  
         
        headerTitleStyle: {  
            fontWeight: 'bold', 
            fontStyle: 'italic',
             
        },  
    };  
    render(){
return (
    <ImageBackground
    style={{ flex: 1,opacity:1}}
    source={{
      uri:
        'https://wallpapertag.com/wallpaper/full/9/2/f/751297-new-good-mac-backgrounds-2560x1600-ipad-pro.jpg',
    }}

    >
    
<View style={{flex:1,justifyContent:'center',alignItems:'center',paddingHorizontal:50}} >
<View>
<Image source={{uri:'https://i.pinimg.com/originals/5c/c7/70/5cc7702abc7c46969efc48d5d4cdf2d7.png'}}
      style={{width:200, height:250,marginVertical:20}} />
</View> 
<View>
<Text style={{fontStyle:"italic",margin:15,fontWeight:"bold",fontSize:40}}> UPBEAT </Text>
</View>     
<View> 
<Button title="Start listening" color="black" 
         onPress={() => this.props.navigation.navigate('login')}/>

</View>

</View>
</ImageBackground>
);
}
}