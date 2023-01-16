import React from 'react';
import Header from '../components/Header';
import Wrapper from '../assets/wrappers/Dashboard';
import Grid from '../assets/wrappers/Portfolio';

import {SiGithub} from 'react-icons/si'
import { SiYoutube } from "react-icons/si";
import { MdWebAsset } from "react-icons/md";

import { FaReact } from 'react-icons/fa'
import { GiVintageRobot } from 'react-icons/gi';
import { SiCplusplus } from 'react-icons/si';

const Portfolio = () => {
  
  return (
    
    
        <Wrapper>
        <main style={{background: "#222429", overflow: 'hidden'}}>
      <Header/>

    
      <body style={{marginTop: '-206px !important', top: '0px !important'}}>  
        
        <main>
        
          <section>
           
            <Grid style={{ height: '0px', padding : '0px'}}>
          
          <ul style={{width: '1200px', height: '1200px'}}>  
          <div class='container'>

            <div class='zoom'>
          <li class ="slideRight slides" style={{animation: "slideRight ease 2.4s forwards 2.2s", background: 'linear-gradient(88deg,#a82e72,#9dc85f,#1b3af5,#cee7a2)',
  backgroundSize: '240% 240%',
  }}>
            <div class="title">BlackJack Website <FaReact  size={'50px'}/></div>
             <div className='desc'>A group project built with React to showcase abilities of full stack development.
             <a style={{marginLeft: '15px'}} href="https://github.com/RolandosG/PRJ666-BlackJack-main" target="_blank" rel="noopener noreferrer"><SiGithub  size={'25px'}/>Github</a>
             <a style={{marginLeft: '10px'}} href="https://blackjack.herokuapp.com/landing" target="_blank" rel="noopener noreferrer"><MdWebAsset size={'25px'}/>Website</a>
             </div>
          </li>
          </div>
          
          <div class='zoom'>
          <li class ="slideRight slides" style={{animation: "slideRight ease 3.4s forwards 3.2s", background: 'linear-gradient(88deg,#a82e72,#9dc85f,#1b3af5,#cee7a2)',
  backgroundSize: '240% 240%',
  }}>
            <div className='title'>Shopping store <FaReact  size={'50px'}/></div>
            <div className='desc'>A RESTful Apps back end that displays items from mongoDB.
            <a style={{marginLeft: '15px'}} href="https://github.com/RolandosG/backend" target="_blank" rel="noopener noreferrer"><SiGithub  size={'25px'}/>Github</a>
            <a style={{marginLeft: '10px'}} href="https://storepage-back-end.herokuapp.com/products" target="_blank" rel="noopener noreferrer"><MdWebAsset size={'25px'}/>Website</a>
            </div>
          </li>
           </div>

           <div class='zoom'>
          <li class ="slideRight slides" style={{animation: "slideRight ease 3.4s forwards 4.2s",  background: 'linear-gradient(88deg,#a82e72,#9dc85f,#1b3af5,#cee7a2)',
  backgroundSize: '240% 240%',
  }}>
            <div className='title'>Robotics in C <GiVintageRobot size={'50px'}/></div>
            <div className='desc'>Real time robot simulation using sensors to locate & move objects
            <a style={{marginLeft: '15px'}} href="https://github.com/RolandosG/exploration-machine" target="_blank" rel="noopener noreferrer"><SiGithub  size={'25px'}/>Github</a>
            <a style={{marginLeft: '10px'}} href="https://youtu.be/a51OEI5wD8A" target="_blank" rel="noopener noreferrer"><SiYoutube size={'25px'}/>Gameplay</a>
            
            </div>
          </li>
          </div>
            
          <div class='zoom'>
          <li class ="slideRight slides" style={{animation: "slideRight ease 3.4s forwards 5.2s",  background: 'linear-gradient(88deg,#a82e72,#9dc85f,#1b3af5,#cee7a2)',
  backgroundSize: '240% 240%',
  }}>
            <div className='title'>Adventure Game <SiCplusplus  size={'40px'}/></div>
            <div className='desc'>An RPG adventure game made from scratch using unreals blueprints.
            <a style={{marginLeft: '15px'}}href="https://github.com/RolandosG/Rolos-Grand-Adventure" target="_blank" rel="noopener noreferrer"><SiGithub  size={'25px'}/>Github</a>
            <a style={{marginLeft: '10px'}} href="https://youtu.be/GpPjLehmRSk" target="_blank" rel="noopener noreferrer"><SiYoutube size={'25px'}/>Gameplay</a></div>
          </li>
          </div>


          <div class='zoom'>
          <li class ="slideRight slides" style={{animation: "slideRight ease 3.4s forwards 6.2s",  background: 'linear-gradient(88deg,#a82e72,#9dc85f,#1b3af5,#cee7a2)',
  backgroundSize: '240% 240%',
  }}>
            <div className='title'>Portfolio Website<FaReact  size={'50px'}/></div>
            <div className='desc'>The website I've designed here. <a style={{marginLeft: '15px'}} href="url">
           <SiGithub  size={'20px'}/>Github </a></div>
          </li>
          </div>
 
          <li class="slideRight" style={{animation: "slideRight ease 3.4s forwards 7.2s", marginTop: '00px'}}>
            <div className='title' style={{textDecoration: 'none'}}><br></br>More to come...</div>
            <div className='desc'></div>
          </li>

            </div>
</ul>

</Grid>

        </section>
        
        </main>
      </body>
      <footer>FOOTER</footer>
  
  </main>
  </Wrapper>
    
    
  );
}


export default Portfolio;