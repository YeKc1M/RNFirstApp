import React, {useState} from 'react'
import {Text, View, ScrollView, Image, Button, Alert, StyleSheet} from 'react-native'

let megumiPic=require("./preview.jpg")

class Greet extends React.Component{
    render(){
        return <Text>Welcome{this.props.name==null? "": ", "+this.props.name+"."}</Text>
    }
}

// class ToggleView extends React.Component{
//     constructor(props){
//         super(props)
//         this.state={show:true};
//     }
//     handleClick(){
//         this.setState(()=>({show:!this.state.show}))
//     }
//     render(){
//         return(
//             <View>
//                 <View>
//                     <Button onPress={()=>this.handleClick()} title={this.state.show?"hide":"show"}></Button>
//                 </View>
//                 {this.state.show && <View>
//                     <MegumiImage/>
//                 </View>}
//             </View>
//         )
//     }
// }

const ToggleView=()=>{
    const [show, setShow]=useState(true)
    return (
        <View>
        <View>
            <Button onPress={()=>setShow(!show)} title={show? "hide":"show"}></Button>
        </View>
        {show &&<View>
            <MegumiImage/>
            </View>}
        </View>
    )
}

class MegumiImage extends React.Component{
    render(){
        return <Image source={megumiPic} style={{width:110, height:110, marginLeft: 50}}/>
    }
}

class ImageOnline extends React.Component{
    render(){
        return(
            <Image source={{uri:"https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg"}}
            style={{width: 100, height: 100, marginLeft: 100}}/>
        )
    }
}

const HelloWorldApp=()=>{
    return (
        <>
            <View style={{
                // flex:1,
                // justifyContent:"center",
                alignItems:"center"
                }}>
                <Text>Hello world!</Text>
            </View>
            <View>
                <Greet name="mky"/>
                <Greet/>
            </View>
            <View>
                <MegumiImage/>
            </View>
            <View>
                <Button onPress={()=>{
                    Alert.alert("Button pressed")
                }} title="Button"></Button>
            </View>
            <ToggleView/>
            <ScrollView>
                <View>
                    <ImageOnline/>
                </View>
                <ScrollView>
                    <Text>it seems that inner ScrollView do not work</Text>
                    <MegumiImage/>
                    <MegumiImage/>
                    <MegumiImage/>
                </ScrollView>
            </ScrollView>
            <Text>after outer scroll view</Text>
        </>
    )
}

export default HelloWorldApp