import React from 'react'
import {View, Text, Alert, ActivityIndicator, FlatList} from 'react-native'

class UserFlatList extends React.Component{
    constructor(props){
        super(props)
        this.state={users:[], isLoading:true}
    }
    componentDidMount(){
        fetch('http://192.168.0.105:3000/users')
        .then((response)=>response.json())
        .then((json=>{
            //Alert.alert(json.data[0].name)
            this.setState({users: json.data})
            //alert(this.state.users[0].name)
        }))
        .catch((error)=>Alert.alert(error))
        .finally(()=>this.setState({isLoading: false}))
    }
    render(){
        //Alert.alert(this.state.users.toString())
        return <View>
            {this.state.isLoading? <ActivityIndicator/>:
            <FlatList
                data={this.state.users}
                ListHeaderComponent={<Text>Users</Text>}
                renderItem={(item)=>{return <Text>{item.name}</Text>}}
                keyExtractor={(item, index)=>{return index.toString()}}
            />}
        </View>
    }
}

const NetApp=()=>{
    return(
        <>
        <View><Text>NetApp</Text></View>
        <UserFlatList/>
        </>
    )
}

export default NetApp