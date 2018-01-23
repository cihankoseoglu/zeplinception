import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  
} from 'react-router-dom';
import App from './App';
import ScreenDetail from './components/ScreenDetail';


class AppSwitch extends React.Component {
  
    render() {
      return (
        <div>
            <Route exact path='/' component={App}/>
            <Route path='/screens/:id' component={ScreenDetail}/>
        </div>
      )
    }
  }
const AppRouter = () =>(
    <Router>
      <Route component = {AppSwitch} />
    </Router>
  
  )
  
  export default AppRouter;