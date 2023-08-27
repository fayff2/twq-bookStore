import Home from './pages/Home';
import {Routes , Route} from 'react-router-dom'
import './App.css'
import Books from './pages/Books';
import BookDetails from './pages/BookDetails';
import NotFound from './pages/NotFound';
import Register from './pages/Register';
import Login from './pages/Login';


function App() {
 

  return (
    <>
    <Routes>

    <Route path='/' element={<Register/>}></Route>
<Route path='/login' element={<Login/>}></Route>


<Route path='/home'>
<Route path='' element={<Home/>}/>
<Route path='books' element={<Books/>}/>
</Route>

<Route path='books/:bookId' element={<BookDetails/>}></Route>


<Route path='*' element={<NotFound/>}></Route>



    </Routes>
     
    </>
  )
}

export default App;
