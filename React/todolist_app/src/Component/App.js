import {Route, Routes} from 'react-router-dom';
import Home from '../Pages/Home';
function App() {
  return (
    <div className="App">
      <h1>Todolist</h1>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
