import React from "react";
import NotePreview from '../components/NotePreview';
import SearchBar from '../components/SearchBar';
import {connection_db} from './../utils/connection_db'
import { render } from "@testing-library/react";

class MyNotes extends React.Component {
    constructor(props){
        super(props);
        this.state={
          email:'',
          classes: []
        }
        const x = connection_db("SELECT * FROM `collabnotes`.`CLASE`;", true);
        const promise = Promise.resolve(x);
        promise.then((value) => {
            console.log(value);
            this.setState({classes: value})
        });

    }


    render(){
        return (
            <div >
               <SearchBar />
               <br/>
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

export default MyNotes;
