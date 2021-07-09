import {Route, BrowserRouter} from 'react-router-dom';
import Home from './Components/Home'
import Splash from './Components/Splash'
import Book from './Components/Book'
const Router = () => {
    return (
        <BrowserRouter>
            <Route exact path="/" component={Splash} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/booknow" component={Book} />
        </BrowserRouter>
    )
}

export default Router;