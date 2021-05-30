import './App.css';
import Headers from './containers/Headers';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import ProductDetails from './containers/ProductDetails';
import HeaderMain from './containers/Headermain/HeaderMain';
import ProductListing from './containers/ProductListing';

function App() {
  return (
    <Router>
     <HeaderMain></HeaderMain>
     <Switch>
       <Route path="/products">
      <ProductListing></ProductListing>
       </Route>
       <Route path="/product/:productId" exact component={ProductDetails}/>
       
       
       
     </Switch>
    </Router>
  );
}

export default App;
