import { Route, Switch, Link } from "react-router-dom";
import vector from "../images/Vector.svg";

function Header({handleSignOut, email}) {
  // function signOut(){
  //   handleSignOut()
  // }

  return (
    <Switch>
    <Route exact path="/"> 
    <header className="header">
      <img className="header__logo" alt="Место" src={vector} />
      <p className="header__email">{email}</p>
      <button className="header__signout" onClick={handleSignOut}>Выход</button>
    </header>
    </Route>
    <Route path="/signin">
    <header className="header">
      <img className="header__logo" alt="Место" src={vector} />
      <Link to="/signup" className="header__signout">Зарегистрироваться</Link>
    </header>
    </Route>
    <Route path="/signup">
    <header className="header">
      <img className="header__logo" alt="Место" src={vector} />
     
      <Link to="/signin" className="header__signout">Войти</Link>
    </header>
    </Route>
    </Switch>
  );
}

export default Header;
