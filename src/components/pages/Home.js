import React from 'react';
import '../../App.css';
import Slider from '../Slider';
import { ContactUsButton } from '../ContactUsButton';

export default function Home() {
    return(
        <div className='homepage-container'>
            <div className='home'>
                <h1 className='home-heading'>POWERFUL PROJECTS</h1>
                <div className='homepage-button'>
                    <ContactUsButton/>
                </div>
            </div>
            <div>
                <Slider className='homepage-slider'/>
            </div>
        </div>
    );
}