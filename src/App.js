import './App.css';
import Button from '../src/components/button/button'
import Heading from './components/Heading/Heading'
import Image from './components/Image/Image'


const App = () => {

  return (
      <div className="App">
        <Heading text="some nice text" lineTwo="second line of some text" lineFour="fourth line of some text"/>
        <Button text="button text" color="green" textColor="white"/>
        <Image altText="alt text test"/>
      </div>
  );
}





export default App;
