import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import DetailPage from './pages/detailPage';
import ListPage from './pages/listPage';

TodoFeature.propTypes = {
    
};
function TodoFeature(props) {
    const math = useRouteMatch();
        return (
        <div>
            <Switch>
                <Route path={math.path}  component={ListPage} exact/>
                <Route path={`${math.path}/:todoId`} component={DetailPage}/>
            </Switch>
        </div>
    );
}
export default TodoFeature;