import React from "react";
import Wrapper from "../assets/wrappers/projectGrid";


import {SiGithub} from 'react-icons/si'
import { SiYoutube } from "react-icons/si";
import { MdWebAsset } from "react-icons/md";
const ProjectGrid = () => {
  
  return (
    <Wrapper style={{padding: '0px', height: '0px'}}>
     
   
      
      <body style={{padding: '0px', marginTop: '50px'}}>
     
  
  
      <div class="grid-container" style={{marginRight: '50px'}}>
        <div class='box'>
      <div class="grid-item">
    <div class="card">
    <div class="card__content_title">
        <div class="card__front" style={{background: 'transparent'}}>
          <h3 class="card__title" style={{ color: '#003d49'}}> PROJECTS</h3>
            <p class="card__subtitle" style={{color : '#003d49'}}> MORE</p>
        </div> 
            
    </div>
    </div>
   </div>
   </div>
  
        <div class='box'>
      <div class="grid-item">
    <div class="card">
    <div class="card__content">
        <div class="card__front" style={{background: 'linear-gradient(88deg, #005792, #0575E6)',
  backgroundSize: '240% 240%',
  animation: 'section-animation 24s ease infinite'}}>
          <h3 class="card__title">BlackJack website</h3>
            <p class="card__subtitle">REACT</p>
        </div> 
            <div class="card__back" style={{ background: 'radial-gradient(circle,#cee7a2,#a82e72)',
  backgroundSize: '240% 240%',
  animation: 'section-animation 10s ease infinite'}}><p 
            class="card__body">Group project built with React to showcase abilities of full stack development</p>
             <div className="mobile-links">
            <a href="https://github.com/RolandosG/PRJ666-BlackJack-main" target="_blank" rel="noopener noreferrer"><SiGithub  size={'20px'}/> LEARN MORE</a>
            <a href="https://blackjack.herokuapp.com/landing" target="_blank" rel="noopener noreferrer"><MdWebAsset size={'20px'}/> Website</a>
          </div>
          </div>
    </div>
    </div>
   </div>
   </div>
    
   {/*<div class="grid-item">
    <div class="card">
    <div class="card__content">
        <div class="card__front" style={{background: 'linear-gradient(88deg,#00d4ff,#1b3af5,#00d4ff,#00d4ff)',
  backgroundSize: '240% 240%',
  animation: 'section-animation 24s ease infinite'}}>
          <h3 class="card__title">Shopping Store backend</h3>
            <p class="card__subtitle">Just like databases!</p>
        </div> 
            <div class="card__back"  style={{ background: 'radial-gradient(circle,#cee7a2,#a82e72)',
  backgroundSize: '240% 240%',
  animation: 'section-animation 10s ease infinite'}}><p 
            class="card__body">A RESTful Applications backend that displays from mongoDB.<p>
              <br></br><SiGithub  size={'20px'}/>&ensp;<a href="https://github.com/RolandosG/backend" target="_blank" rel="noopener noreferrer">LEARN MORE</a>
              <br></br><MdWebAsset size={'20px'}/>&ensp;<a href="https://storepage-back-end.herokuapp.com/products" target="_blank" rel="noopener noreferrer">Website</a></p></p>
          </div>
    </div>
    </div>
  </div>*/}
<div class='box'>
   <div class="grid-item">
    <div class="card">
    <div class="card__content">
        <div class="card__front" style={{background: 'linear-gradient(88deg, #005792, #0575E6)',
  backgroundSize: '240% 240%',
  animation: 'section-animation 24s ease infinite'}}>
          <h3 class="card__title">Sonar Robotics</h3>
            <p class="card__subtitle">Using C</p>
        </div> 
            <div class="card__back" style={{background: 'radial-gradient(circle,#cee7a2,#a82e72)',
  backgroundSize: '240% 240%',
  animation: 'section-animation 10s ease infinite'}}>
            <p class="card__body">Real time robot simulation using sensors to locate & move objects</p>
            <div className="mobile-links">
            <a href="https://github.com/RolandosG/exploration-machine" target="_blank" rel="noopener noreferrer"> <SiGithub  size={'20px'}/> LEARN MORE</a>
            <a href="https://youtu.be/a51OEI5wD8A" target="_blank" rel="noopener noreferrer"><SiYoutube size={'20px'}/> Simulation</a>
            </div>
          </div>
    </div>
    </div>
   </div>
   </div>

   <div class='box'>
   <div class="grid-item">
    <div class="card">
    <div class="card__content">
        <div class="card__front" style={{background: 'linear-gradient(88deg, #005792, #0575E6)',
  backgroundSize: '240% 240%',
  animation: 'section-animation 24s ease infinite'}}>
          <h3 class="card__title">Space Odessy</h3>
            <p class="card__subtitle">Unity3D</p>
        </div> 
            <div class="card__back" style={{background: 'radial-gradient(circle,#cee7a2,#a82e72)',
  backgroundSize: '240% 240%',
  animation: 'section-animation 10s ease infinite'}}><p 
            class="card__body">My first complex project made with Unity</p>
              <div className="mobile-links">
            <a href="https://Rolandosg.com/3D-Unity-Game" target="_blank" rel="noopener noreferrer"><SiGithub  size={'20px'}/> LEARN MORE</a>
            <a href="https://mega.nz/file/IlRQDDZC#En6A-TSbq-DhhKdxOSyhSoALsFwxM2s8QK1803D-jHk" target="_blank" rel="noopener noreferrer"><MdWebAsset size={'25px'}/> Play here</a>
            </div>
          </div>
    </div>
    </div>
   </div>
   </div>
   
   <div class='box'>
   <div class="grid-item">
    <div class="card">
    <div class="card__content">
        <div class="card__front" style={{background: 'linear-gradient(88deg, #005792, #0575E6)',
  backgroundSize: '240% 240%',
  animation: 'section-animation 24s ease infinite'}}>
          <h3 class="card__title">Adventure game</h3>
            <p class="card__subtitle">UE4</p>
        </div> 
            <div class="card__back" style={{background: 'radial-gradient(circle,#cee7a2,#a82e72)',
  backgroundSize: '240% 240%',
  animation: 'section-animation 10s ease infinite'}}><p 
            class="card__body">A third person RPG adventure game made from scratch using unreals blueprints</p>
             <div className="mobile-links">
             <a href="https://github.com/RolandosG/Rolos-Grand-Adventure" target="_blank" rel="noopener noreferrer"><SiGithub  size={'20px'}/> LEARN MORE</a>
              <a href="https://youtu.be/GpPjLehmRSk" target="_blank" rel="noopener noreferrer"><SiYoutube size={'25px'}/> Gameplay</a>
              </div>
          </div>
    </div>
    </div>
   </div>
   </div>

   <div class='box'>
   <div class="grid-item">
    <div class="card">
    <div class="card__content">
        <div class="card__front" style={{background: 'linear-gradient(88deg, #005792, #0575E6)',
  backgroundSize: '240% 240%',
  animation: 'section-animation 24s ease infinite'}}>
          <h3 class="card__title">Portfolio website</h3>
            <p class="card__subtitle">REACT</p>
        </div> 
          <div class="card__back" style={{background: 'radial-gradient(circle,#cee7a2,#a82e72)',
  backgroundSize: '240% 240%',
  animation: 'section-animation 10s ease infinite'}}>
          <p class="card__body">The website I've designed here. </p>
          <div className="mobile-links">
          <a href="https://github.com/RolandosG/portfolioSite"><SiGithub  size={'20px'}/> LEARN MORE</a>
          </div>
          </div>
    </div>
    </div>
   </div>
  </div>
  </div>

</body>

</Wrapper>

);
};

export default ProjectGrid;
