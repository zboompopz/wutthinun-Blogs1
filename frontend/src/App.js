import React from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import { Container } from 'reactstrap';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import Home from './components/Home';
import Products from './components/Products';
import Profile from './components/Profile';
import Users from './components/Users';
import Login from './components/Login';
import Register from './components/Register';
function App() {
  return (
    <div className="App">
      <Header />
      <Container fluid={true}>
        <Route path="/" exact={true} component={Home} />
        <Route path="/about" component={About} />
        <Route path="/products" component={Products} />
        <Route path="/profile" component={Profile} />
        <Route path="/users" component={Users} />
        <Route path="/Login" component={Login} />
        <Route path="/Register" component={Register} />
      </Container>
      <Footer />
    </div>
  );
}
export default App;