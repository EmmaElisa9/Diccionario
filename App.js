import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Text, View, Button, TouchableOpacity, StyleSheet, TextInput} from 'react-native';
import { Alert } from 'react-native-web';
import AppHeader from './components/AppHeader';
import diccionary from './db';

export default class App extends React.Component{
    constructor(){
        super();
        this.state={
            text: ''
        }
    }

    getWord=(word)=>{
        var text =word.toLowerCase()
        try{
            var word = diccionary[text]["word"]
            var definition= diccionary[text]["definition"]
            var lexicalCategory= diccionary[text]["lexicalCategory"]

            this.setState({ 
                isSearchPressed:true,
                    "word" : word, 
                    "definition" :definition, 
                    "lexicalCategory": lexicalCategory
            });
        }
        catch(err){
            alert("lo sentimos esta palabra no esta disponible");
            this.setState({ 
                text: '',
                isSearchPressed: false,
            });
        }
    
    }
      
    render(){
        return(
            <View>
            <AppHeader/>
            <TextInput 
            style={styles.inputBox}
            onChangeText={text => {
                this.setState({ 
                    text: text,
                    isSearchPressed: false,
                    word: 'Loading...',
                    lexicalCategory: '',
                    examples:[],
                    defination:''
                });
              }}
              value = {this.state.text}
              />

              <TouchableOpacity
          style={styles.goButton}
          onPress={() => {
            this.setState({ isSearchPressed:true,});
            this.getWord(this.state.text);
          }}>
          <Text style={[styles.text, { marginTop:0}]}>IR</Text>
        </TouchableOpacity>

        <Text style={[styles.text,{backgroundColor: 'green'}]}>word:{''}</Text>
        <Text style={[styles.text,{fontSize: 15}]}>{this.state.word}</Text>

        <Text style={[styles.text,{backgroundColor: 'green'}]}>Type:{''}</Text>
        <Text style={[styles.text,{fontSize: 15}]}>{this.state.lexicalCategory}</Text>

        <Text style={[styles.text,{backgroundColor: 'green'}]}>definition:{''}</Text>
        <Text style={[styles.text,{fontSize: 15}]}>{this.state.definition}</Text>
        
        </View>

        )
    }

}

const styles = StyleSheet.create({
    inputBox: {
        marginTop: 90,
        alignSelf: 'center',
        width: '80%',
        height: 40,
        textAlign: 'center',
        borderWidth: 4,
      },
      goButton: {
        marginTop:90,
        width: '50%',
        height: 55,
        alignSelf: 'center',
        padding: 10,
        margin: 5,
        backgroundColor:'#f99900',
      },
      text:{
        marginTop: 20,
        textAlign: 'center',
        fontSize: 20,
      }
})