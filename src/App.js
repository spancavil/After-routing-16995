import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ItemListContainer from './Containers/ItemListContainer';
import NavBar from './Components/NavBar';
import ItemDetailContainer from './Containers/ItemDetailContainer';
import NotFound from './Components/NotFound';

function App() {
  return (
    <>
    <Router>
    <NavBar/>
      <Routes>
        <Route exact path = "/" element={<ItemListContainer/>}/>
        <Route exact path = "/category/:categoryId" element={<ItemListContainer/>}/>
        <Route exact path = "/item/:id" element={<ItemDetailContainer/>} />
        <Route path = "*" element={<NotFound/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
