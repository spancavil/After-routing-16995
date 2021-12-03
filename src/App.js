import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ItemListContainer from './Containers/ItemListContainer';
import NavBar from './Components/NavBar';
import ItemDetailContainer from './Containers/ItemDetailContainer';
import CartContextProvider from './Context/CartContext';

function App() {
  return (
    <CartContextProvider>
      <Router>
        <NavBar/>
        <Routes>
          <Route exact path = "/" element={<ItemListContainer/>}/>
          <Route exact path = "/category/:categoryId" element={<ItemListContainer/>}/>
          <Route exact path = "/item/:id" element={<ItemDetailContainer/>} />
          <Route element={<h2>Not found</h2>}/>
        </Routes>
      </Router>
    </CartContextProvider>
  );
}

export default App;
