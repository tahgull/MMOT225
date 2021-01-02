import React, {Component} from 'react';
import { Text, TouchableOpacity, View, ScrollView, FlatList} from 'react-native';

export default class Restaurant extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            rest: null,
            review:null,
            Comment:null,
        }
    }

    componentDidMount(){
        fetch ('https://developers.zomato.com/api/v2.1/search?entity_type=city&q=kars'
        ,{
            method:'GET',
            headers:{
                "user-key" : "fe1b4386d33a13efb5604d9a4da68118"
            }
        }
        )
        .then(r=>{
            return r.json();
        })
        .then(res=>{
            this.setState({
                rest:res.restaurants,
            });
        }).catch(e=>{
            console.warn("error zomato", e);
        })
    }


     componentWillMount(){
        fetch("https://developers.zomato.com/api/v2.1/reviews?res_id=18324439"
        ,{
            method:'GET',
            headers:{
                "user-key" : "fe1b4386d33a13efb5604d9a4da68118",
            }
        }
        )
        .then(r=>{
            return r.json();
        })
        .then(rev=>{
            this.setState({
                review:rev.user_reviews,
            });
        }).catch(e=>{
            console.warn("error zomato", e);
        })
    }
 
    handlePress = name =>{
        this.setState({Comment:name})
    }

    CommentAndMenuList(){
        let Comment=[];
        this.state.review.map((v,k)=>{

            if(v.name===this.state.Comment){
                Comment.push(
                   <>
                   <Text style={{color:'white', paddingLeft:5, marginTop:15, fontSize:18, fontStyle:'italic'}}>Müşteri Adı:{"\n"}{v.review.user.name}</Text>
                <Text style={{color:'white', paddingLeft:5, marginTop:15, fontSize:18, fontStyle:'italic'}}>YORUM:{"\n"}{v.review.rating}</Text>
                   <Text style={{color:'white', paddingLeft:5, marginTop:15, fontSize:18, fontStyle:'italic'}}>Restaurant Menüsü:{"\n"}{v.review.review_text}{"\n"}</Text>   
                   </>         
               )
            }
        }
        )
        return Comment
    }


    
    render(){

        console.warn("Restaurant: ", this.state.rest)

        if(!this.state.rest){
           return null;
        }

        console.warn("Comments and Menu: ", this.state.review)

        if(!this.state.review){
            return null;
         }


        return(
            <View style={{flex:1}}>
                <Text style={{color:'#212121', backgroundColor:'#004D40', fontSize:17, textAlign:'center', padding:5, margin:4}}>RESTAURANTLAR</Text>
                <FlatList style={{flex:1, minHeight:100, padding:7, backgroundColor:'#004D40'}}
                let data = {this.state.rest}
                renderItem={({item})=>{
                    return(
                      <>
                       <Text style={{color:'#004D40', backgroundColor:'white', paddingLeft:5, marginTop:7, fontSize:18}}>RESTAURANTLAR:</Text>
                       <TouchableOpacity onPress={()=>this.handlePress(item.name)}  style={{flex:1, minHeight:310, marginTop:2, backgroundColor:'#004D40'}}>
                           <Text style={{color:'white', paddingLeft:3, marginTop:3,fontSize:17}}>{item.restaurant.name}</Text>
                       </TouchableOpacity>
                       </> 
                    )
                }
                }
                />

                <ScrollView style={{flex:2, minHeight:550, marginTop:5, padding:12, backgroundColor:'#004D40'}}>
                <Text style={{color:'black', backgroundColor:'white', paddingLeft:5, marginTop:7, fontSize:18}}>Menu ve Yorumlar</Text>
                    {this.CommentAndMenuList()}
                </ScrollView>
            </View>
            
        )
    }

}