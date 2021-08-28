import './App.css';
import Button from '../src/components/button/button'
import Heading from './components/Heading/Heading'




const App = () => {
  
  
  const onClick = (e) => {
    console.log(e)
  
  }

  return (
      <div className="App" >
        <Heading text="some nice text" />
        <Button text="Click Here" color="rgb(237, 91, 43)" textColor="azure" onClick={onClick} boldFont='bold' fontSize='20px'/>
        
      </div>
  );
}





export default App;
