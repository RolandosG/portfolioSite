import styled from 'styled-components'
const Wrapper = styled.section`

@import url('https://fonts.googleapis.com/css?family=Oswald:400,700');
.container {
  margin-top: 250px;
  margin-left: 250px;
}
.title {
  position: static;
  margin-left: 0px !important;
  margin-top: 0px !important;
  display: inline;
  font-size: 24px;
  color: white;
  text-decoration: underline;
  
}
.desc {
  
  margin-left: -.5px !important;
  margin-top: 0px !important;
  
  
  
  display: flex;
  font-size: 14px;
  color: white;
}
.slides {
    
    margin-top: 00px;
    margin-left: 00px;
      width: 750px;
      height: 100px;
      box-sizing: border-box;
      border: 5px white solid;
      border-radius: 0%;
      overflow: hidden;
      box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
      transform: translatey(0px);
      animation: float 6s ease-in-out 2s;
      img { width: 100%; height: auto; }
  }
}
.slideRight {
  top:100px;
  //left:10px;
  animation: slideRight ease 2.4s forwards 2.2s;
}
@keyframes slideRight {
  0% {transform: translateX(0);}
  100% {transform: translateX(40px);opacity:1;}
}
ul {
  margin-right: 800px;
  list-style-type: none;
  overflow: hidden;
  padding: 0;
  display: inline;
}

li {
  margin-right: 0.7rem;
  margin-bottom: 0.7rem;
  background-color: transparent;
  padding: 0.2rem 1rem;
  border-radius: 0.3rem;
  color: white;
  width: 100%;
}

@keyframes fadeIn {
  0%{
    opacity: 0
  }
  
  100% {
    opacity: 1
  }
}
.grid-container {
  margin-right: 450px;
  margin-top: 40px;
  display: grid;
  gap: 10px 40px;
  grid-template-columns: repeat(2, 1fr);
  background-color: transparent;
  padding: -100px;
}



body {
  background: transparent;
  
}


.avatar {
  font-size: 50px;
  margin-bottom: 200px;
  width: 250px;
    height: 80px;
    box-sizing: border-box;
    border: 5px transparent solid;
    border-radius: 5%;
    overflow: hidden;
    //box-shadow: 0 5px 10px 0px rgba(0,0,0,0.6);
    transform: translatey(0px);
    animation: float 12s ease-in-out infinite;
    img { width: 100%; height: auto; }
}
.name-avatar {
  position: absolute;
  margin-top: -475px;
  margin-left: 80px;
  width: 240px;
    //height: 50px;
    box-sizing: border-box;
    //border: 5px white solid;
    border-radius: 0%;
    overflow: hidden;
    //box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
    transform: translatey(0px);
    animation: float 6s ease-in-out infinite;
    img { width: 100%; height: auto; }
}
@keyframes float {
    0% {
        //box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
        transform: translatey(0px);
    }
    50% {
        //box-shadow: 0 25px 15px 0px rgba(0,0,0,0.2);
        transform: translatey(-20px);
    }
    100% {
        //box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
        transform: translatey(0px);
    }
}
`

export default Wrapper