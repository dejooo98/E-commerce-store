import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";
import ScrollButton from "./components/ScrollBtn";




function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/proizvodi">
            <Products />
          </Route>
          <Route path="products/:id" children={<SingleProduct/>}>
          </Route>
        </Switch>
      </div>
      <ScrollButton />
    </Router>
  );
}

export default App;
