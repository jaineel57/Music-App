import React from 'react';
import { Text, View,ImageBackground } from 'react-native';
import ReactNativeItemSelect from 'react-native-item-select';

export default class genre extends React.Component {
    static navigationOptions = { 

        title: 'SELECT YOUR GENRE',  
        headerStyle: {  
            backgroundColor: '#EB9CD0', 
             
        },  
         
        headerTitleStyle: {  
            fontWeight: 'bold', 
            fontStyle: 'italic',
             
        },  
    };  
  render() {
    const data = [
      {  displayName: 'JAZZ' },
      {  displayName: 'POP' },
      {  displayName: 'CLASSICAL' },
      {  displayName: 'EDM' },
      {  displayName: 'RAPPER' },
      {  displayName: 'ROCK' }
      
      
    ];

    return (
        <ImageBackground
        style={{ flex: 1,opacity:0.95}}
        source={{
          uri:
            'https://wallpapertag.com/wallpaper/full/9/2/f/751297-new-good-mac-backgrounds-2560x1600-ipad-pro.jpg',
        }}

        >
     
      <ReactNativeItemSelect
        data={data}
        multiselect={true}
        itemComponent={
          item => (
            <View>
                <Text style={{ fontSize:20}}>{item.displayName}</Text>
            </View>
          )
        }
        countPerRow={2}
        onSubmit={item => this.props.navigation.navigate('lanpage')}
        tickPosition={"topRight"}

        styles={
            {   
                btn: { backgroundColor: 'steelblue' },
                disabledBtn: { backgroundColor: 'gray' },
                tickTxt: { backgroundColor: 'green' },
                activeItemBoxHighlight: { backgroundColor: 'steelblue',borderColor:'steelblue' }
                
            }
        }
      />
      </ImageBackground>
      
    );
  }
}