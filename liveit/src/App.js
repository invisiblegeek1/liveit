import "./App.css";
import Navbar from "./components/navbar";
import Data from "./containers/dataloader";
import { createStore } from "redux";
import Reducer from "./redux/reducer";
import { Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import Cart from './components/Cart'

const store = createStore(Reducer);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact render={() => <Data />} />
          <Route path="/cart"  render={() => <Cart />}/>
        </Switch>
      </div>
    </Provider>
  );
}

export default App;
