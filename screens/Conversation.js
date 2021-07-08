import React from 'react';
import { View,Image ,Text, SafeAreaView,FlatList} from 'react-native';
import { Ionicons,Entypo, Octicons} from '@expo/vector-icons';

const Data= [{id:'1',img:'https://media.istockphoto.com/photos/beautiful-girl-with-curly-hairstyle-picture-id1180484935?k=6&m=1180484935&s=612x612&w=0&h=LTC7YEN-WN-bYH5yvL9Q8Tfy_e6oJPcWBl9KpjmeoD4=', name:'Bevely Jones', message:'You know you are in love when'},
            {id:'2', img:'https://i.pinimg.com/originals/b3/65/78/b365786fde09197da31ee3661bd1e118.jpg', name:'Crystal Flores', message:"Hey you what's' up"},
            {id:'3',img:'https://img.huffingtonpost.com/asset/5e543c25230000520939c2c3.jpeg?cache=CjTYKi66vw&ops=crop_0_0_4000_3703%2Cscalefit_720_noupscale', name:'Brittany Hart', message:"When I'm good, I'm very good"},
            {id:'4',img:'https://t3.ftcdn.net/jpg/02/64/25/36/360_F_264253699_VXA6069Cp2ALxcjDtwI1hg1PCooXzw2K.jpg', name:'Deborah Flores', message:"Hey you! What's up"},            
            {id:'5', img:'https://img.pngio.com/classy-black-woman-png-free-classy-black-womanpng-transparent-black-model-png-1367_1600.png', name:'Harley Quinn', message:'I am a dancer.I know you are'},
        ]

const Conversation = () =>{
    return(
        <SafeAreaView style={{flex:1}}>
        <View style={{flex:1,paddingHorizontal:20,paddingTop:10}}>

            <View style={{flex:1}}>
                <View style={{justifyContent:'space-between',flexDirection:'row',marginTop:5}}>
                    <Ionicons name='arrow-back' size={24} color='#566D8D' />
                    <Entypo name='dots-two-vertical' size={24} color='#566D8D' />
                </View>

                <View style={{marginTop:10}}>
                    <Text style={{fontSize:30,color:'#566D8D',fontWeight:'bold'}}>Conversation</Text>
                </View>

                <View style={{marginTop:20,height:60,justifyContent:'center',marginRight:10,paddingHorizontal:20,backgroundColor:'white',borderRadius:15,shadowColor:'#C0C0C0',shadowRadius:10,shadowOpacity:0.4,shadowOffset:{width:3,height:3}}}>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <View style={{backgroundColor:'#E97EB2',height:40,width:40,borderRadius:50,justifyContent:'center',alignItems:'center'}}>
                            <Ionicons name='search' size={24} color='white' />
                        </View>
                        <View style={{marginLeft:20}}>
                        <Text style={{color:'#9CA9BC', fontSize:18,fontWeight:'500'}}>Search friend</Text>
                        </View>
                    </View>
                </View>

            </View>

            <View style={{marginTop:20,flex:3}}>
                <FlatList 
                    data={Data}
                    keyExtractor={(key)=> key.id }
                    renderItem={({item})=>{
                        return(
                            <View style={{flexDirection:'row',marginBottom:20}}>
                                <View style={{flex:1}}>
                                    <Image style={{height:60,width:60,borderRadius:50}} source={{uri:item.img}} />
                                </View>

                                <View style={{flex:3,justifyContent:'center'}}>
                                    <Text style={{color:'#566D8D', fontSize:20,fontWeight:'600'}}>{item.name}</Text>
                                    <Text style={{color:'#9CA9BC', fontSize:16,fontWeight:'400',marginTop:3}}>{item.message}</Text>
                                </View>

                            </View>
                        )
                    }}
                />
                <View style={{backgroundColor:'#E97EB2',position:'absolute',marginTop:370,marginLeft:240,height:70,width:70,borderRadius:50,justifyContent:'center',alignItems:'center',shadowColor:'#C0C0C0',shadowRadius:5,shadowOpacity:1,shadowOffset:{width:3,height:3}}}>
                    <Octicons name='pencil' size={30} color='white' />
                </View>
            </View>

        </View>
        </SafeAreaView>
        
    )
}

export default Conversation