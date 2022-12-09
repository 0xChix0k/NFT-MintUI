import styled from 'styled-components';
// import HomPage from './components/Pages/HomPage';
import Web3Madal from './components/Web3Modal/Web3Madal';

const SubHeah = styled.div`
  font-family: "Lexend Deca", sans-serif;
  margin-top:20px;
  align-items:center;
  position: relative;
  max-width: 475px;
  padding: 32px;
  border-radius: 10px;
  color: #f1f1f1;
  font-family: "Lexend Deca", sans-serif;
  --webkit-box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  @supports ((--webkit-backdrop-filter: none) or (backdrop-filter: none)) {
        background: rgba(0, 0, 0, 0.5);
        --webkit-backdrop-filter: blur(1em);
        backdrop-filter: blur(1em);
  };
  h4{
    font-size: 32px;
    margin: 0;
    margin-top: 10px;
    line-height: 30px;
  };
  p{
    font-weight: 400;
    font-size: 16px;
    padding-top: 0.5rem;
    font-style: italic;
  };
`
const Content = styled.div`
  /* height: 100vh;
  height: calc(var(--vh, 1vh) * 110); */
  position: relative;
  left: 0%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  /* z-index: 99; */
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  overflow: hidden;
  width: 100%;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  max-height: none;
  --webkit-box-pack: center;
  --webkit-justify-content: center;
  --ms-flex-pack: center;
  justify-content: center;
  --webkit-box-align: center;
  --webkit-align-items: center;
  --ms-flex-align: center;
  align-items: center;  
`
const Bg = styled.div`
  background-image:url('background2.jpg');
`

const App = () => {

  return (
    <Bg>
        <Content >
          <SubHeah>
            <Web3Madal />
          </SubHeah>
        </Content>
    </Bg>
  )
}
export default App;