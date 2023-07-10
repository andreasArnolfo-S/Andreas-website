import React from 'react';
import './hero.css';
import { Zoom } from 'react-awesome-reveal';

const Hero = () => {
    return (
        <div style={{ position: 'relative', height: '100vh' }}>
            <div className="hero">

                <div className="circle">
                    <img src="https://cdn.discordapp.com/attachments/978413517780697141/1110589547546411078/Main_Logo.png" alt="Logo" />
                </div>
                <div className="signature">
                    <h2 className='myFontDeux'>Andreas Arnolfo</h2>
                </div>
                <div className="text_hero">
                    <Zoom  cascade>
                        <h1 className='firstname_hero myFont'>Dével</h1>
                        <h1 className='lastname_hero myFont'>ppeur</h1>
                    </Zoom>
                </div>
                <div className='label_title_hero'>
                    <h1 className=' myFont'>Web.</h1>
                </div>
                <div className="half black"></div>
                <div className="white">

                </div>
            </div>
            <svg className='svg_hero' xmlns="http://www.w3.org/2000/svg" viewBox="0 -80 1440 320"><path fill="#191d24" fillOpacity="1" d="M0,288L48,282.7C96,277,192,267,288,256C384,245,480,235,576,197.3C672,160,768,96,864,96C960,96,1056,160,1152,170.7C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 100 1440 320"><path fill="#191d24" fillOpacity="1" d="M0,160L48,154.7C96,149,192,139,288,160C384,181,480,235,576,250.7C672,267,768,245,864,213.3C960,181,1056,139,1152,133.3C1248,128,1344,160,1392,176L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
        </div>
    );
}


export default Hero;
