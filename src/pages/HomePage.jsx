import React from 'react';
import { Link } from 'react-router-dom';
import Footer4HP from '../components/Footer4HomePage';

function HomePage(){
    return(
        <div className="HomePage">
            <ul>
                <li><Link to='/main'>MainPage</Link></li>
                <li><Link to='/career'>Career</Link></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <Footer4HP/>
        </div>
    );
}

export default HomePage;