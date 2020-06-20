import React, {useState} from 'react'
import {View, TextInput, Text, FlatList, Button, Alert, SectionList} from 'react-native'

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

const FlatListView=()=>{
    const [data, setData]=useState([
        {key:'Michael'},
        {key:'Trevor'},
        {key:'Franklin'},
        {key:'Lemma'},
        {key: "Tracy"},
        {key: "Amanda"},
        {key: "Black"},
        {key: 'Harry'},
        {key: 'Hermoin'},
        {key: "Vincenzo"},
        {key: 'Hanyuu'},
        {key: 'Jeremony'}
    ])
    return (
        <View>
            <FlatList 
                style={{width: 200}}
                ItemSeparatorComponent={()=><View style={{height:1, backgroundColor:'black'}}/>}
                data={data}
                renderItem={({item})=>{
                    return <Text>{item.key}</Text>
                }}
                ListHeaderComponent={<Text style={{color:"red"}}>flat list view</Text>}
                ListHeaderComponentStyle={{
                    borderWidth: 1,
                }}
            />
            <Button onPress={()=>{
                data.push({key:'added item'})
                //Alert.alert(data.length.toString())
                setData(data)
            }}
            title="add item"></Button>
        </View>
    )
}

class FlatListClass extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:[
                {key:'Michael'},
                {key:'Trevor'},
                {key:'Franklin'},
                {key:'Lemma'},
                {key: "Tracy"},
                {key: "Amanda"},
                {key: "Black"},
                {key: 'Harry'},
                {key: 'Hermoin'},
                {key: "Vincenzo"},
                {key: 'Hanyuu'},
                {key: 'Jeremony'}
            ]
        }
    }
    handleClick(){
        this.state.data.push({key:'add'})
        Alert.alert(this.state.data.length.toString())
        this.setState({data:this.state.data})
    }
    render(){
        return <View>
            <FlatList 
                style={{width: 200}}
                ItemSeparatorComponent={()=><View style={{height:1, backgroundColor:'black'}}/>}
                data={this.state.data}
                renderItem={({item})=>{
                    return <Text>{item.key}</Text>
                }}
                ListHeaderComponent={<Text style={{color:"red"}}>flat list view</Text>}
                ListHeaderComponentStyle={{
                    borderWidth: 1,
                }}
            />
            <Button onPress={()=>this.handleClick()} title="add item"></Button>
        </View>
    }
}

const SectionListView=()=>{
    return(
        <View>
            <SectionList style={{width:200}}
                sections={[
                    {title:'D', data:['Devin', 'Dan', 'Dominic']},
                    {title:'J', data:['Jackson','James','Jimmy']},
                    {title:'T', data:['Trevor', 'Tracy']}
                ]}
                renderItem={({item})=><Text style={{textDecorationLine: 'underline'}}>{item}</Text>}
                renderSectionHeader={({section})=><Text style={{backgroundColor:'gray'}}>{section.title}</Text>}
                keyExtractor={(item, index)=>index}/>
        </View>
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
            {/* <FlatListView/> */}
            {/* <SectionListView/> */}
            <FlatListClass/>
        </>
    )
}

export default InputApp