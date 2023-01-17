import React from "react"
import { useSelector } from "react-redux"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { Footer } from "./reusable_components/footer/Footer"
import { Header } from "./reusable_components/header/Header"
import { Home } from "./pages/home/Home"
import { Account } from "./pages/account/Account"
import { Login } from "./pages/register/login/Login"
import { Register } from "./pages/register/signup/Register"

const App = () => {
  const authenticated = useSelector((state) => state.auth.authenticated)

  return (
    <>
      {authenticated && (
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/account" component={Account} />
          </Switch>
          <Footer />
        </Router>
      )}
      {!authenticated && <Login />}
    </>
  )
}
export default App
