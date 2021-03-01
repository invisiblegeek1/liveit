import "./App.css";
import Navbar from "./components/navbar";
import Data from "./containers/dataloader";
import { createStore } from "redux";
import Reducer from "./redux/reducer";
import { Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import CartLoader from './containers/CartLoader';
import CheckOutFrom from './components/checkOutForm/AddressForm';
import Signup from './containers/signup'
// import Footer from './components/footer'

const store = createStore(Reducer);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
        
        <Switch>
          <Route path="/" render={()=><Signup />} />

          <Route path="/products" exact render={() => <Data />} />
          <Route path="/cart"  render={() => <CartLoader />}/>
          <Route path="/checkout" render={() => <CheckOutFrom />}/>
        </Switch>
        {/* <Footer /> */}
      </div>
    </Provider>
  );
}

export default App;
