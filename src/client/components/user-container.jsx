import { UserName } from '@shared/model/user';
import * as React from 'react';
import { j } from '../jinaga-config';
import { run } from '../util/processor';

async function login() {
  try {
    const { userFact: user, profile } = await j.login();
    const userDisplayName = profile.displayName;

    // Query for the user's current name.
    const names = await j.query(user, j.for(UserName.forUser));
    if (names.length !== 1 || names[0].value != userDisplayName) {
      // Set their name if it is not set, in conflict, or different.
      await j.fact(new UserName(user, userDisplayName, names));
    }

    return { user, userDisplayName };
  }
  catch (err) {
    return { user: null, userDisplayName: null };
  }
}

const UserContext = React.createContext(null);

export const UserContainer = ({ children }) => {
  const [ user, setUser ] = React.useState(null);
  React.useEffect(() => {
    run(async () => {
      const user = await login();
      setUser(user);
    });
  }, []);

  return (
    <UserContext.Provider value={user}>
      { children }
    </UserContext.Provider>
  );
}

export function withUser(WrappedComponent, LoginComponent, DefaultComponent) {
  LoginComponent   = LoginComponent   || (() => <></>);
  DefaultComponent = DefaultComponent || (() => <></>);
  return (props) => (
    <UserContext.Consumer>
      { value => value
        ? value.user
          ? <WrappedComponent {...value} {...props} />
          : <LoginComponent {...props} />
        : <DefaultComponent {...props} />
      }
    </UserContext.Consumer>
  );
}
