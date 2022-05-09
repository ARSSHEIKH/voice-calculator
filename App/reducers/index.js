import { combineReducers } from 'redux';
import tabs_state from './tabs';
import drawerToggle_state from './drawer/drawerToggle';
import theme_state from './theme';
import adClosed from './admob/adClosed'
import modal_state from "./modal"
export default combineReducers({
    tabs_state,
    drawerToggle_state,
    theme_state,
    adClosed,
    modal_state
})