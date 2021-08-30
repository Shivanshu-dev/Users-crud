import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import NaviagtionTop from "./components/commonComponents/NaviagtionTop";
import GetUsers from "./screen/GetUsers";
import AddUser from "./screen/AddUser";
import EditUser from "./screen/EditUser";

function App() {
  return (
    <>
      <BrowserRouter>
        <header>
          <NaviagtionTop />
        </header>
        <main>
          <Switch>
            <Route exact path="/" component={GetUsers} />
            <Route exact path="/user/create" component={AddUser} />
            <Route exact path="/user/:userID" component={EditUser} />
            <Redirect to="/" />
          </Switch>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
