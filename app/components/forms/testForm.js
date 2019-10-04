import React from "react"; //importamos react
import t from "tcomb-form-native"; //importamos el componente para crear formularios
const Form = t.form.Form; // Creamos la contante Form, que es de tipo "t" que es de tcomb-form-native

//Esta va a ser la estructura del loguin
export const LoginStruct = t.struct({
    user: t.String, //Le indicamos que el campo "user" va a ser un formulario (t) y sera del tipo string
    password: t.String // idem a user
});

//Creamos el componente de opciones
export const LoginOptions = {
    fields: {
        user: {
            label: "Nombre de Usuario (*)", //El label que va a tener el componente user
            placeholder: "Nombre de usuario" // Lo que va a decir de forma determinada
        },
        password: {
            label: "Contraseña (*)",
            placeholder: "Contraseña",
            password: true, // Indica que es tipo password
            secureTextEntry: true //Indica que es una entrada de texto segura
        }
    }
}
//Al finalizar, tenemos que importar el formulario en el archivo .js que lo vamos a utilizar
//por ejemplo en App.js