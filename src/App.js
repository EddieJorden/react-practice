import './App.css';
import Button from '../src/components/button/button'
import Greeting from '../src/components/Greeting/Greeting'
const App = ({ greeting }) => {
  const onClick = () => {
    console.log('click')
  }
  return (
    <div>
      <div className="App">
        <Greeting text= {greeting}/>
      </div>
      <Button color='green' text='click sahdud' onClick={onClick}/>
    </div>
  );
}

App.defaultProps = {
  greeting: 'Hello from eddie@eddieJorden.tech'
}



export default App;
