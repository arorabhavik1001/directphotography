import {Route, BrowserRouter} from 'react-router-dom';
import Home from './Components/Home'
import Splash from './Components/Splash'
import Book from './Components/Book'
import ComingSoon from './Components/ComingSoon'
import About from './Components/About'
import Learn from './Components/Learn'
const Router = () => {
    return (
        <BrowserRouter>
            <Route exact path="/" component={Splash} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/booknow" component={Book} />
            <Route exact path="/stories" component={ComingSoon} />
            <Route exact path="/presets" component={ComingSoon} />
            <Route exact path="/about" component={About} />
            <Route exact path="/learn" component={Learn} />
            
        </BrowserRouter>
    )
}

export default Router;