import React, { useState } from 'react'
import { View, Text, Alert } from 'react-native'
import ViewPager from '@react-native-community/viewpager'

const ViewPage=()=>{
    const [currentPage, setCurrentPage]=useState(0)
    return(
        <>
        <View><Text>page view</Text></View>
        <View style={{flexDirection:'row'}}>
            <Text style={currentPage==0?{margin:2, backgroundColor:'gray'}:{margin:2}}>page1</Text>
            <Text style={currentPage==1?{margin:2, backgroundColor:'gray'}:{margin:2}}>page2</Text>
            <Text style={currentPage==2?{margin:2, backgroundColor:'gray'}:{margin:2}}>page3</Text>
        </View>
        <ViewPager initialPage={currentPage} style={{flex:1, margin: 5}} scrollEnabled={true}
            onPageSelected={(e)=>{setCurrentPage(e.nativeEvent.position)}}>
            <View key="1" style={{borderWidth:1}}><Text>page {currentPage+1}</Text></View>
            <View key="2" style={{borderWidth:1}}><Text>page {currentPage+1}</Text></View>
            <View key="3" style={{borderWidth:1}}><Text>page {currentPage+1}</Text></View>
        </ViewPager> 
        <View><Text>after view pager</Text></View>
        </>
    )
}

export default ViewPage