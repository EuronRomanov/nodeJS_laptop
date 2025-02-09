import { View,Text,StyleSheet,Alert } from "react-native";
import { Input,Button } from "@rneui/base";
import { useState } from "react";
import { saveLaptopRest } from "../rest_client/laptops";


export   const LaptopForm=({navigation})=>{

    const [marca, setMarca] = useState("");
    const [procesador, setProcesador] = useState("");
    const [memoria, setMemoria] = useState(""); 
    const [disco, setDisco] = useState("");

const showMessage=()=>{
    Alert.alert("CONFIRMACIÓN","Se creó la laptop ");
}

const saveLaptop=()=>{
   navigation.goBack();
 
   saveLaptopRest(
    {
        marca:marca,
       procesador:procesador,
        memoria:memoria,
        disco:disco
    }, showMessage);
};

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

<Button title="GUARDAR" onPress={saveLaptop}/>
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
  