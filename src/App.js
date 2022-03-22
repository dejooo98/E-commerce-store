import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";
import ScrollButton from "./components/ScrollBtn";
import Error from "./pages/Error";
import Cart from "./pages/Cart";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/products">
            <Products />
          </Route>
          <Route path="/cart">
          <Cart />
        </Route>
          <Route path="/products/:id" children={<SingleProduct />}></Route>
          <Route path="*">
          <Error/>
        </Route>
        </Switch>
      </div>
      <ScrollButton />
    </Router>
  );
}

export default App;
