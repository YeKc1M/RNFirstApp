import React, {useState} from 'react'
import {View, TextInput, Text} from 'react-native'

const InputView1=()=>{
    const [text, setText]=useState('');
    return (
        <View>
            <TextInput 
                placeholder="press to enter" 
                value={text} 
                onChangeText={(text)=>setText(text)}
                style={{borderWidth:1, width:100, height: 35}}/>
            <Text>{text+" back"}</Text>
        </View>
    )
}

const HundredCal=()=>{
    const [num1, setNum1]=useState(50)
    const [num2, setNum2]=useState(50)
    return(
        <>
            <TextInput 
                value={num1.toString()} 
                onChangeText={(num1)=>{
                    setNum1(num1)
                    setNum2(100-num1)
                    }}
                style={{
                    borderWidth:1,
                    width: 120,
                    height: 35,
                    }}/>
            <Text style={{fontSize: 25}}>+</Text>
            <TextInput 
                value={num2.toString()} 
                onChangeText={(num2)=>{
                    setNum2(num2)
                    setNum1(100-num2)
                    }}
                style={{
                    borderWidth:1,
                    width: 120,
                    height: 35,
                    }}/>
            <Text style={{fontSize: 25}}>=100</Text>
        </>
    )
}

const InputApp=()=>{
    return(
        <>
            <InputView1/>
            <View 
            style={{
                flexDirection:'row',
            }}>
                <HundredCal/>
            </View>
        </>
    )
}

export default InputApp