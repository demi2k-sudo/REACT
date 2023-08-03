import {BrowserRouter,Routes,Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Register from './pages/Register';
import SearchPage from './pages/Search';


function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
          <Route path ='/' element = {<HomePage/>}/>
          <Route path ='/login' element = {<Login/>}/>
          <Route path ='/register' element = {<Register/>}/>
          <Route path ='/search' element = {<SearchPage/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
