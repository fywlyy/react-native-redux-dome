import { NavigationActions } from 'react-navigation';
import { AppNavigator } from '../navigators/AppNavigator';
import { TabNav } from '../widget/TabNav';

// Start with two routes: The Main screen, with the Login screen on top.
// const firstAction = AppNavigator.router.getActionForPathAndParams('Home');
//const secondAction = AppNavigator.router.getActionForPathAndParams('Counter');
// const initialNavState = AppNavigator.router.getStateForAction(firstAction);

function nav(state, action) {
    let nextState = AppNavigator.router.getStateForAction(action, state);
    // Simply return the original `state` if `nextState` is null or undefined.
    return nextState || state;
}

export default nav;
