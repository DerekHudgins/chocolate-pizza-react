
import './App.css';
import Ingredients from './Ingredients';
import Main from './Main';
import MyFooter from './MyFooter';
import MyHeader from './MyHeader.js';


function App() {
  return (
    <div className="App">
      <MyHeader></MyHeader> 
      <Main></Main>
      <Ingredients></Ingredients>
      <MyFooter></MyFooter>
    </div>
  );
}

export default App;
