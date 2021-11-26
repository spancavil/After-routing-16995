import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ItemListContainer from './Containers/ItemListContainer';
import NavBar from './Components/NavBar';
import ItemDetailContainer from './Containers/ItemDetailContainer';

function App() {
  return (
    <>
    <NavBar/>
    <Router>
      <Switch>
        <Route exact path = "/" component={ItemListContainer}/>
        <Route exact path = "/category/:categoryId" component={ItemListContainer}/>
        <Route exact path = "/item/:id" component={ItemDetailContainer} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
