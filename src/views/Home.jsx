import React from "react";
import Carousel from '../components/ImageCarousel';
import './style/Home.css';

const Home = () => {
    return (
        <>
            <h1 className="title">Welcome to CollabNotes</h1>
            <p>CollabNotes is the best way to save and share your school notes. A platform for students by students. You can also find useful notes and filter them by subject, school or class.</p>
            <Carousel />
            <>
                <h3 className="question">Features</h3>
                <ul>
                    <li><p>Create notes using our cool notes editor.</p></li>
                    <li><p>Add tags to your notes, such as subject, topic and school</p></li>
                    <li><p>Find top rated notes from other students</p></li>
                </ul>
            </>
            <>
                <h3 className="question">Schools that use our platform:</h3>
                <ul>
                    <li><p>Tecnológico de Monterrey Campus Guadalajara</p></li>
                </ul>
            </>

        </>
    );
};

export default Home;
