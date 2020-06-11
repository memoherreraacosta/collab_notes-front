import React from "react";
import NotePreview from '../components/NotePreview';
import {connection_db} from './../utils/connection_db'
import { getId } from "./../utils/getData";

class MyClasses extends React.Component {
    constructor(props){
        super(props);
        this.state={
          email:'',
          classes: []
        }
        const user_id = getId();
        const query = "SELECT `collabnotes`.`ESTUDIANTE-CLASE`.clave, `collabnotes`.`CLASE`.nombre, `collabnotes`.`CLASE`.descripcion " 
        + "FROM  `collabnotes`.`ESTUDIANTE-CLASE` " 
        + "JOIN `collabnotes`.`CLASE` ON `collabnotes`.`ESTUDIANTE-CLASE`.clave = `collabnotes`.`CLASE`.clave " 
        + "WHERE `collabnotes`.`ESTUDIANTE-CLASE`.idEstudiante =" + user_id + ";"
        const x = connection_db(query, true);
        const promise = Promise.resolve(x);
        promise.then((value) => {
            console.log(value);
            this.setState({classes: value})
        });

    }


    render(){
        return (
            <div >
                <h1>Your classes</h1>
                <div>
                    {
                    this.state.classes.map(function(x){
                        return (<NotePreview 
                            subject={x.nombre} 
                            description={x.descripcion}
                            clave={x.clave}

                            />)
                    })
                    }
                </div>
            </div>
                
        );
    }
};

export default MyClasses;
