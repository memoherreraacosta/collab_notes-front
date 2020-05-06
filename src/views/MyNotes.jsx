import React from "react";
import NotePreview from '../components/NotePreview';
import SearchBar from '../components/SearchBar';

const MyNotes = () => {
    return (
        <div  >
           <SearchBar />
           <br/>
           <NotePreview subject="Math" />
           <NotePreview subject="Data Science" />
           <NotePreview subject="Algorithms" />
           <NotePreview subject="Object Oriented Programming"/>
        </div>
            
    );
};

export default MyNotes;
