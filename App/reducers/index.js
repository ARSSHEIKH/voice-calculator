import { combineReducers } from 'redux';
import tabs_state from './tabs';
import drawerToggle_state from './drawer/drawerToggle';

export default combineReducers({
    tabs_state,
    drawerToggle_state
})