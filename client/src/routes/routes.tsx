import { Route, RouteComponentProps, Switch } from 'react-router-dom';
import routes from '../config/routes';

export interface RoutesProps {

}
const Routes: React.FC<{}> = () => {
  return (
    <Switch>
      {
        routes.map((route, index) => {
          return (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              render={(props: RouteComponentProps<any>) => (
                <route.component
                  {...props}
                  {...route.props}
                />
              )}
            />
          )
        })
      }
    </Switch>
  );
}

export default Routes;