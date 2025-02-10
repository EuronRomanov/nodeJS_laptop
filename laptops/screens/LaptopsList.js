import { View,Text,StyleSheet,FlatList ,TouchableHighlight} from "react-native";
import { Button,ListItem,FAB } from "@rneui/base";

import { getAllLaptops } from "../rest_client/laptops";
import { useState,useEffect } from "react";
export const LaptopsList=({navigation})=>{
    const [laptopList,setLaptopList]=useState([]);

    useEffect(()=>{ getAllLaptops(fnRefreshList);},[]);

    const LaptopItem=({laptop})=>{
        return <TouchableHighlight onPress={()=>{
          navigation.navigate("LaptopsFormNav",{laptopParam:laptop});
        }}>
           <ListItem>
        <ListItem.Content>
          <ListItem.Title>{laptop.marca}  {laptop.procesador}</ListItem.Title>
          <ListItem.Subtitle>"Memoria:" {laptop.memoria} " , DISCO:" {laptop.disco}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
        </TouchableHighlight>
        
    };


   const fnRefreshList=(laptops)=>{
    setLaptopList(laptops);
        
    };
   

    return  (
        <View style={styles.container}>
          <Text>LISTA DE COMPUTADORAS</Text>
          
          <FlatList 
            data={laptopList}
            renderItem={({ item }) => <LaptopItem laptop={item} />}
            keyExtractor={(item, index) => index.toString()} // Necesario para un FlatList
          />
          <FAB 
          title="+"
          onPress={()=>{ navigation.navigate("LaptopsFormNav",{})}}
          />
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      flexDirection:'column',
      alignItems: 'stretch',
      justifyContent: 'flex-start',
    },
  });
  