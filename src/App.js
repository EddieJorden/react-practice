import './App.css';
import Button from '../src/components/button/button'
import Heading from './components/Heading/Heading'
import Image from './components/Image/Image'
import background from "../src/components/Image/24h-2019-Porsche-Nr911-Foto-GruppeC-ADAC.jpeg"


const App = () => {
  
  
  const onClick = () => {
   
  
  }

  return (
      <div className="App" >
        <Heading text="some nice text" />
        <Button text="Click Here" color="rgb(237, 91, 43)" textColor="azure" onClick={onClick} boldFont='bold' fontSize='20px'/>
        <Image altText="alt text test" width="100%"/>
      </div>
  );
}





export default App;
