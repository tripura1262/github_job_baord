import logo from './logo.svg';
import './App.css';
import useStore from './store'
import { ReactQueryCacheProvider, QueryCache } from 'react-query'
import { BrowserRouter as Router } from 'react-router-dom'
import { AnimatedRoutes, RouteTransition } from './Components/RouteTransition'
// Pages
import Job from './Pages/Job'
import Home from './Pages/Home'

// Shared Components
import Header from './Components/Header'
// CSS 
import './Styles/base.css'
import './Styles/reset.css'
import './Styles/typography.css'
import './Styles/Components/header.css'
import './Styles/Components/buttons.css'

const queryCache = new QueryCache()

function App() {
  const isLight = useStore((state) => state.isLight)
  return (
    <Router>
      <ReactQueryCacheProvider queryCache={queryCache}>
        <div className={`App ${isLight ? 'light' : 'dark'}`}>
          <Header />
          <AnimatedRoutes exitBeforeEnter initial={false}>
            <RouteTransition exact path="/" slideUp={20}>
              <Home />
            </RouteTransition>
            <RouteTransition exact path="/job/:id" slideUp={20}>
              <Job />
            </RouteTransition>
          </AnimatedRoutes>
        </div>
      </ReactQueryCacheProvider>
    </Router>
  )
}

export default App
