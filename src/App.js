import './App.css';
import Button from '../src/components/button/button'
import Greeting from '../src/components/Greeting/Greeting'


const App = () => {

  return (
    <div>
      <div className="App">
        <Greeting text="some nice text" lineTwo="second line of some text"/>
      </div>
        <Button text="button text" color="green" />
    </div>
  );
}





export default App;
