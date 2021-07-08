import React from 'react';
import {View, Text, SafeAreaView,Image, FlatList} from 'react-native';
import {Ionicons, Entypo} from '@expo/vector-icons';

Data =[{id:'1', img:'https://images.unsplash.com/photo-1503104834685-7205e8607eb9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZWx8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80'},
        {id:'2', img:'https://media.istockphoto.com/photos/beautiful-girl-with-curly-hairstyle-picture-id1180484935?k=6&m=1180484935&s=612x612&w=0&h=LTC7YEN-WN-bYH5yvL9Q8Tfy_e6oJPcWBl9KpjmeoD4='},
        {id:'3', img:'https://expertphotography.com/wp-content/uploads/2020/06/find-models-13.jpg'},
        {id:'4', img:'https://media.istockphoto.com/photos/closeup-profile-side-view-portrait-of-her-she-nicelooking-attractive-picture-id1146670536?k=6&m=1146670536&s=612x612&w=0&h=UTTh4DIxA4K2yz9UeIzhGx3nOZ28582bYtKrbc21mfE='},
        {id:'5', img:'https://st2.depositphotos.com/6903990/9767/i/600/depositphotos_97674118-stock-photo-fashion-woman-with-jewelry-set.jpg'},
        {id:'6', img:'https://www.ukmodels.co.uk/wp-content/uploads/2020/08/shutterstock_397813951-scaled.jpg'},
        {id:'7', img:'https://233e5r7tfnv3se11m26d4k8g-wpengine.netdna-ssl.com/wp-content/uploads/2020/08/shutterstock_746398405-scaled.jpg'},
        {id:'8', img:'https://2204rc2zx3ub2qs0mx2dgyfo-wpengine.netdna-ssl.com/wp-content/uploads/2020/07/red-blue-light-1600x900.jpg'},
        {id:'9', img:'https://img.freepik.com/free-photo/young-woman-with-long-straight-hair-studio-portrait-attractive-brunette-girl-fashion-model-wears-black-shirt-anf-jeans-sexy-female-model_186202-7460.jpg?size=626&ext=jpg&ga=GA1.2.1851677743.1619654400'}]

const Home = () => {
    return (
        <SafeAreaView style={{flex:1}}>
            <View style={{flex:1,backgroundColor:'white'}}>
            <View style={{flex:1}}>
                <View style={{flexDirection:'row',marginHorizontal:25,marginVertical:15,justifyContent:'space-between',alignItems:'center',backgroundColor:'white'}}>
                <View style={{}}>
                    <Text style={{fontSize:20,marginBottom:5,fontWeight:'500',color:'#9CA9BC'}}>Hello,</Text>
                    <Text style={{fontSize:30,fontWeight:'700',color:'#566D8D'}} >Alvarado!</Text>
                </View>
                <View style={{shadowColor:'#C2C2C2',shadowRadius:7,shadowOpacity:1,shadowOffset:{width:3,height:3}}}> 
                    <Image style={{height:90,width:90,borderRadius:50}} source={{uri:'https://img.freepik.com/free-photo/travel-concept-close-up-portrait-young-beautiful-attractive-redhair-girl-wtih-trendy-hat-sunglass-smiling-blue-pastel-background-copy-space_1258-826.jpg?size=626&ext=jpg&ga=GA1.2.1753887426.1623542400'}} />
                </View>
            </View>

            <View style={{marginTop:10,marginHorizontal:35,height:60,justifyContent:'center',paddingHorizontal:20,backgroundColor:'white',borderRadius:15,shadowColor:'#C0C0C0',shadowRadius:10,shadowOpacity:0.4,shadowOffset:{width:1,height:3}}}>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <View style={{backgroundColor:'#E97EB2',height:40,width:40,borderRadius:50,justifyContent:'center',alignItems:'center'}}>
                        <Ionicons name='search' size={24} color='white' />
                    </View>
                    <View style={{marginLeft:20}}>
                    <Text style={{color:'#9CA9BC', fontSize:18,fontWeight:'500'}}>Search friend</Text>
                    </View>
                </View>
            </View>

            <View style={{marginTop:15,backgroundColor:'white',height:90,justifyContent:'center',marginLeft:35}}>
                <FlatList showsHorizontalScrollIndicator={false} horizontal={true} data={Data} keyExtractor={(key)=> key.id}
                renderItem={({item})=>{
                    return(
                        <View style={{flexDirection:'row',backgroundColor:'white'}} >

                            <View style={{height:85,width:85,justifyContent:'center',alignItems:'center',borderRadius:50,backgroundColor:'pink',marginRight:10}}>
                                <Image source={{uri:item.img}} style={{height:78,width:78,borderRadius:50}} />
                            </View>

                        </View>
                    )
                }}
                />
            </View>

            </View>

            <View style={{flex:1,marginHorizontal:35, marginBottom:10,marginTop:5}}>
                <View style={{flex:3}}>
                    <Image style={{flex:1,borderTopLeftRadius:20,borderTopRightRadius:20}} source={{uri:'https://media.istockphoto.com/photos/red-haired-woman-with-voluminous-shiny-and-curly-hairstyleflying-hair-picture-id849234512?k=6&m=849234512&s=612x612&w=0&h=acnUHhmDmaxjC7laSE1D9C87uLh5-W8X4q7_eX2o69Y='}} />
                </View>

                <View style={{flex:1,borderBottomLeftRadius:20,borderBottomRightRadius:20,backgroundColor:'white',flexDirection:'row',alignItems:'center',justifyContent:'space-between',shadowColor:'#C2C2C2',shadowRadius:10,shadowOpacity:0.7,shadowOffset:{width:0,height:3}}}>
                    <View >
                        <Image style={{height:50,width:50,borderRadius:50,marginLeft:20}} source={{uri:'https://wallpaperaccess.com/full/1196156.jpg'}} />
                    </View>
                    <View>
                        <Text style={{color:'#566D8D',fontSize:20,marginBottom:5}}>Shane Robertson</Text>
                        <Text style={{color:'#9CA9BC'}}>32m ago</Text>
                    </View>
                    <View style={{marginRight:10}}>
                        <Entypo name='dots-two-vertical' size={25} color='#566D8D' />
                    </View>
                </View>

            </View>

            </View>
        </SafeAreaView>
       
    )
}
export default Home
