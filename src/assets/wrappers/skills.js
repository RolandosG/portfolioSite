import styled from 'styled-components'

const Wrapper = styled.section`

.avatar {
    margin-top: 100px;
    width: 550px;
      height: 550px;
      box-sizing: border-box;
      border: 5px white solid;
      border-radius: 20%;
      overflow: hidden;
      box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
      transform: translatey(0px);
      animation: float 6s ease-in-out infinite;
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
      box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
      transform: translatey(0px);
      animation: float 6s ease-in-out infinite;
      img { width: 100%; height: auto; }
  }
  @keyframes float {
      0% {
          box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
          transform: translatey(0px);
      }
      50% {
          box-shadow: 0 25px 15px 0px rgba(0,0,0,0.2);
          transform: translatey(-20px);
      }
      100% {
          box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
          transform: translatey(0px);
      }
  }
`

export default Wrapper