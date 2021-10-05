import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/login';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/login" exact={true} component={Login} />
                <Route path="/" component={Error} />
            </Switch>
        </BrowserRouter>
    )
}