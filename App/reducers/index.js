import { combineReducers } from 'redux';
import tabs_state from './tabs';
import drawerToggle_state from './drawer/drawerToggle';
import theme_state from './theme';

export default combineReducers({
    tabs_state,
    drawerToggle_state,
    theme_state
})