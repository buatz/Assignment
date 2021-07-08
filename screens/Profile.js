import React from 'react';
import { View, Text, SafeAreaView, Image} from 'react-native';
import {Ionicons, Entypo} from '@expo/vector-icons'

const Profile = () =>{
    return(
        <SafeAreaView style={{flex:1}} >
            <View style={{flex:1}}>
               <View style={{paddingHorizontal:20,flex:1.1,backgroundColor:'white',borderBottomLeftRadius:25,borderBottomRightRadius:25,shadowColor:'#D6E0E4',shadowRadius:30,shadowOpacity:0.8,shadowOffset:{width:0,height:7}}}>
                    <View style={{justifyContent:'space-between',flexDirection:'row',marginTop:5}}>
                        <Ionicons name='arrow-back' size={24} color='#566D8D' />
                        <Entypo name='dots-two-vertical' size={25} color='#566D8D' />
                    </View>
                    <View style={{marginTop:10}}>
                        <Text style={{fontSize:30,color:'#566D8D',fontWeight:'bold'}}>My Profile</Text>
                    </View>
                    <View style={{justifyContent:'center',alignItems:'center',marginTop:10}}>
                        <View style={{shadowColor:'#C2C2C2',shadowRadius:7,shadowOpacity:1,shadowOffset:{width:3,height:3}}}> 
                            <Image style={{height:90,width:90,borderRadius:50}} source={{uri:'https://img.freepik.com/free-photo/travel-concept-close-up-portrait-young-beautiful-attractive-redhair-girl-wtih-trendy-hat-sunglass-smiling-blue-pastel-background-copy-space_1258-826.jpg?size=626&ext=jpg&ga=GA1.2.1753887426.1623542400'}} />
                        </View>
                        <View style={{justifyContent:'center',alignItems:'center',marginTop:20}}>
                            <Text style={{lineHeight:35,fontSize:20,color:'#566D8D',fontWeight:'bold'}}>Anna Alvarado</Text>
                            <Text style={{color:'#9CA9BC',fontWeight:'600'}}>Guildhall School of Music & Drama</Text>
                            <Text style={{lineHeight:20,color:'#9CA9BC',fontWeight:'600'}}>Lsondon, UK</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20,paddingHorizontal:39}}>
                        <View style={{justifyContent:'center',alignItems:'center'}}>
                            <Text style={{color:'#9CA9BC',fontSize:17}}>Photos</Text>
                            <Text style={{color:'#566D8D',fontSize:20,lineHeight:30 ,fontWeight:'bold'}}>456</Text>
                        </View>
                        <View style={{justifyContent:'center',alignItems:'center'}}>
                            <Text style={{color:'#9CA9BC',fontSize:17}}>Followers</Text>
                            <Text style={{color:'#566D8D',fontSize:20,lineHeight:30 ,fontWeight:'bold'}}>602</Text>
                        </View>
                        <View style={{justifyContent:'center',alignItems:'center'}}>
                            <Text style={{color:'#9CA9BC',fontSize:17}}>Follows</Text>
                            <Text style={{color:'#566D8D',fontSize:20,lineHeight:30 ,fontWeight:'bold'}}>290</Text>
                        </View>
                    </View>
                    
                </View>

               <View style={{flex:1,flexDirection:'row',justifyContent:'center',marginHorizontal:35,marginBottom:15}}>
                    <View style={{flex:1,paddingTop:20,marginRight:10}}>
                        <Image style={{flex:1,borderRadius:20}} source={{uri:'https://prgholdings.com/wp-content/uploads/2020/07/istockphoto-652793132-612x612-1.jpg'}} />
                    </View>
                    <View style={{flex:1,paddingTop:20,justifyContent:'space-around'}}>
                        <Image style={{flex:1,marginBottom:10,borderRadius:20}} source={{uri:'https://i.guim.co.uk/img/media/e193f0cc579ba041293d4616fd9929db9e2b62e8/0_889_5480_3288/master/5480.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=6d7119b1ad116474de802bbdeda1c35b'}} />
                        <Image style={{flex:1,borderRadius:20}} source={{uri:'https://cdn.shopify.com/s/files/1/0818/7337/files/essence_magazine_1024x1024.jpg?v=1578947035'}} />
                    </View>
                   
               </View>
            </View>
        </SafeAreaView>
    )
}

export default Profile