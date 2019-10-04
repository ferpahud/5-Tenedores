import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import t from "tcomb-form-native"; // importamos tcomb-form-native
const Form = t.form.Form; // creamos la constante Form
import { LoginStruct, LoginOptions} from "./app/components/forms/testForm"; //importamos el archivo que contiene el Form

export default class App extends React.Component {
  render(){
  return (
    <View style={styles.container}>
      <Form ref = "formTest" tye={LoginStruct} options={LoginOptions}/>
    </View>
  );
 }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
