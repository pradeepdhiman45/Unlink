import { Route, Switch } from "react-router-dom";
import Address from "./pages/Address";
import History from "./pages/History";

const Routing = () => {
  return (
    <Switch>
      <Route path="/" component={History} exact />
      <Route path="/address" component={Address} exact />
    </Switch>
  );
};

export default Routing;
