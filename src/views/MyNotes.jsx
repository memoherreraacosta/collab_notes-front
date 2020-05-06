import React from "react";
import NotePreview from '../components/NotePreview';

const MyNotes = () => {
    return (
        <div  >
           <NotePreview subject="Math" />
           <NotePreview subject="Data Science" />
           <NotePreview subject="Algorithms" />
           <NotePreview subject="Object Oriented Programming"/>
        </div>
            
    );
};

export default MyNotes;
