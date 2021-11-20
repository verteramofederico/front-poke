import Header from './Header'
import BodyWelcome from './BodyWelcomeHome'
import PokeFetchContainer from './PokeContainer'
import AllPokeList from './AllPokeList'
import OnePokeComponent from './OnePokeComponent'
import Error404 from './Error404'
import { Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div className="container">    
      <Header/>  
      <BodyWelcome/>
      <Switch>
      <Route path="/" exact={true} component={PokeFetchContainer}/>
      <Route path="/all" exact={true} component={AllPokeList}/>
      <Route path="/one/:id" exact={true} component={OnePokeComponent}/>
      <Route component={Error404} />
      </Switch>

    </div>
  )
}

export default App;
