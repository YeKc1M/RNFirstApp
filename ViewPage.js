import React from 'react'
import { View, Text } from 'react-native'
import ViewPager from '@react-native-community/viewpager'

const ViewPage=()=>{
    return(
        <>
        <View><Text>page view</Text></View>
        
        <ViewPager initialPage={0} style={{flex:1}}>
            <View key="1" style={{borderWidth:1, backgroundColor: 'red'}}><Text>page 1</Text></View>
            <View key="2" style={{borderWidth:1, backgroundColor: 'yellow'}}><Text>page 2</Text></View>
        </ViewPager> 
        
        </>
    )
}

export default ViewPage