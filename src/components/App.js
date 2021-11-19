import Header from './Header'
import BodyWelcome from './BodyWelcomeHome'
import PokeFetchContainer from './PokeContainer'

function App() {
  return (
    <div className="container">    
      <Header/>  
      <BodyWelcome/>
      <PokeFetchContainer/>
    </div>
  )
}

export default App;
