import {BrowserRouter,Switch, Route}  from 'react-router-dom';
import { AuthContextProvider } from './components/AuthContextProvider';
import Home from './pages/Home';
import HomeFilmes from './pages/HomeFilmes';
import './styles/global.css';

function App() {
  return(
  <BrowserRouter>
  <AuthContextProvider>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/HomeFilmes" component={HomeFilmes}/>
    </Switch>
    </AuthContextProvider>
  </BrowserRouter>
  );
}

export default App;
