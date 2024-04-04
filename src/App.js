import { Route, Switch } from "react-router";
import Cart from "./pages/Cart";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import View from "./pages/View";

const App = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/Cart" exact>
          <Cart />
        </Route>
        <Route path="/View/:id" exact>
          <View />
        </Route>
        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </>
  );
};

export default App;
