import NavBar from './NavBar';
import BlogList from './BlogList';
import Create from './Create';
import BlogDetails from './BlogDetails';
import { BrowserRouter, Routes, Route } from 'react-router';

function App() { 
 
  return (  
<BrowserRouter>
  <div className="App">
  
    <NavBar/> 
    <div className="content">
    <Routes>
      <Route path='/create' element={<Create />} />
      <Route path='/blogs/:id' element={<BlogDetails />} />
      <Route path='/' element={<BlogList />} />
      
    </Routes>
    </div>

    </div>
</BrowserRouter>  
  )  
  
}
export default App
