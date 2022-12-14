import React from 'react';
import Header from '../components/Header';
import Introduction from '../components/Introduction';
import Cards from '../components/Cards';
import Wrapper from '../assets/wrappers/Dashboard';
import AboutPage from '../components/AboutPage';
import ProjectGrid from '../components/ProjectGrid.js';
const HomePage = () => {
  
  return (
    
    <Wrapper>
        
        <main style={{background: "#222429", overflow: 'hidden'}}>
      <Header/>

    
      <body style={{marginTop: '-206px !important', top: '0px !important'}}>  
        
        <main class="scroll-container">
        
          <section>
        <Introduction/>
        </section>
        <section>
        <AboutPage style={{marginLeft: "50%"}}/>
        <Cards style={{marginLeft: "50%"}}/>
        </section>
        <section>
          <ProjectGrid/>
        </section>   
        
        </main>
      </body>
      <footer>Hello</footer>
  
  </main>

    </Wrapper>
  );
}

export default HomePage;