import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Tab } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';

export default function Tabs({ theme_mode }) {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const index = useSelector(state => state.tabs_state);

    return (
        <Tab value={index} indicatorStyle={{ height: 0 }}
            onChange={(e) => {
                dispatch({ type: "set_tabs_state", payload: e });
                e === 0 ? navigation.navigate("Simple Calculator") : navigation.navigate("Voice Calculator")
            }}
        >
            <Tab.Item
                // title="Sim"
                titleStyle={{ fontSize: 12 }}
                icon={{ name: 'calculator', type: 'ionicon', color: index === 0 ? theme_mode.defaultColor : theme_mode.color }}
                active={true}
                variant="primary"
                containerStyle={{
                    backgroundColor: index === 0 ? theme_mode.bg_color : "transparent",
                    borderRadius: 20,
                    height: 40,
                    borderColor: "transparent",
                }}
            />
            <Tab.Item
                // title="favorite"
                titleStyle={{ fontSize: 12 }}
                icon={{ name: 'mic', type: 'ionicon', color: index === 1 ? theme_mode.defaultColor : theme_mode.color }}
                containerStyle={{
                    backgroundColor: index === 1 ? theme_mode.bg_color : "transparent",
                    borderRadius: 20,
                    height: 40,
                    borderColor: "transparent",
                }}
            />
        </Tab>
    );
};