import {Route, BrowserRouter} from 'react-router-dom';
import Home from './Components/Home'
import Splash from './Components/Splash'
const Router = () => {
    return (
        <BrowserRouter>
            <Route exact path="/" component={Splash} />
            <Route exact path="/home" component={Home} />
        </BrowserRouter>
    )
}

export default Router;