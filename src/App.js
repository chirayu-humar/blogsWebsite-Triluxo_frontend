import {Route, Switch} from 'react-router-dom'

import Header from './components/Header'
import About from './components/About'
import Home from './components/Home'
import Contact from './components/Contact'
import NotFound from './components/NotFound'
import BlogItemDetails from './components/BlogItemDetails'
import ProtectedRoute from './components/ProtectedRoute'
import SignUpForm from './components/SignUp'
import LoginForm from './components/LoginForm'

import './App.css'

const App = () => (
  <div className="app-container">
    <div className="responsive-container">
      <Header />
      <div className="app-body">
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/signup" component={SignUpForm} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/about" component={About} />
          <ProtectedRoute exact path="/contact" component={Contact} />
          <ProtectedRoute exact path="/blogs/:id" component={BlogItemDetails} />
          <ProtectedRoute component={NotFound} />
        </Switch>
      </div>
    </div>
  </div>
)

export default App