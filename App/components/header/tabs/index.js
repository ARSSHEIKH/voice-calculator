import React from 'react';
import { Tab, Text, TabView } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';

export default function Tabs() {
    const dispacth = useDispatch()
    const index = useSelector(state=>state.tabs_state);

    return (
        <>
            <Tab
                value={index}
                onChange={(e) => dispacth({type: "set_tabs_state", payload: e})}
                indicatorStyle={{
                  height: 0,
                }}
            >
                <Tab.Item
                    // title="Sim"
                    titleStyle={{ fontSize: 12 }}
                    icon={{ name: 'calculator', type: 'ionicon', color: index === 0 ? "#fff" : "#008c85" }}
                    active={true}
                    variant="primary"
                    containerStyle={{
                        backgroundColor: index === 0 ? "#008c85" : "#fff",
                        borderRadius: 20,
                        height: 40,
                        borderColor:"transparent",
                    }}
                />
                <Tab.Item
                    // title="favorite"
                    titleStyle={{ fontSize: 12 }}
                    icon={{ name: 'mic', type: 'ionicon', color: index === 1 ? "#fff" : "#008c85" }}
                    containerStyle={{
                        backgroundColor: index === 1 ? "#008c85" : "#fff",
                        borderRadius: 20,
                        height: 40,
                    }}
                />
            </Tab>
        </>
    );
};