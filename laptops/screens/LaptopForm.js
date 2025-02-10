import { View,Text,StyleSheet,Alert } from "react-native";
import { Input,Button } from "@rneui/base";
import { useState } from "react";
import { saveLaptopRest,updateLaptopRest,deleteLaptopRest } from "../rest_client/laptops";


export   const LaptopForm=({navigation,route})=>{

    let laptopRetrieved=route.params.laptopParam;
    let isNew=true;
    if (laptopRetrieved!=null) {
        isNew=false;
    }

    const [marca, setMarca] = useState(isNew?null:laptopRetrieved.marca);
    const [procesador, setProcesador] = useState(isNew?null:laptopRetrieved.procesador);
    const [memoria, setMemoria] = useState(isNew?null:laptopRetrieved.memoria); 
    const [disco, setDisco] = useState(isNew?null:laptopRetrieved.disco);

const showMessage=(message)=>{
    Alert.alert("CONFIRMACIÓN",message);
    navigation.goBack();
}

const createLaptop=()=>{
   
 
   saveLaptopRest(
    {
        marca:marca,
       procesador:procesador,
        memoria:memoria,
        disco:disco
    }, showMessage);
};

const updateLaptop=()=>{
   
    console.log("actuizando laptop");
    updateLaptopRest(
     {
        id:laptopRetrieved.id,
         marca:marca,
        procesador:procesador,
         memoria:memoria,
         disco:disco
     }, showMessage);
 };

  const confirmDelete=()=>{
       Alert.alert("CONFIRMACIÓN",
           "Está seguro que quiere eliminar?",
           [{
               text:"SI",
                onPress:deleteLaptop
           },
           {
               text:"CANCELAR"
           }]);
   }
   
   const deleteLaptop=()=>{
    deleteLaptopRest({
           id:laptopRetrieved.id
       },showMessage);
   }

    return <View style={styles.container}>
<Text >Formulario de laptop</Text>
<Input 
    value={marca}
    placeholder="MARCA"
    onChangeText={(value) => setMarca(value)}
/>

<Input 
 value={procesador}
 placeholder="PROCESADOR"
 onChangeText={(value)=>{ setProcesador(value)}}
/>

<Input 
 value={memoria}
 placeholder="MEMORIA"
 onChangeText={(value)=>{ setMemoria(value)}}
/>
<Input 
 value={disco}
 placeholder="DISCO"
 onChangeText={(value)=>{ setDisco(value)}}
/>

<Button title="GUARDAR" onPress={isNew?createLaptop:updateLaptop}/>
{
        isNew?<View></View>:<Button title="ELIMINAR" onPress={confirmDelete}/>
    }
    </View>

    
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  