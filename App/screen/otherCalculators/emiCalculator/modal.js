import React, { useEffect, useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import { Icon } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../../components/header";

const App = () => {
    const dispatch = useDispatch()
    const modalVisible = useSelector(state => state.modal_state);
    const [modalShow, setModalShow] = React.useState(false);

    React.useEffect(() => {
        setModalShow(modalVisible.show);
        console.log("mdoal", modalVisible.show);
    }, [modalVisible])
    let number = 200000
    console.log("modalVisible.dataToShow.totalEMI", (number).toLocaleString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalShow}
                onRequestClose={() => {
                    console.log("Modal has been closed.");
                    dispatch({ type: "reset_modal_state" })
                }}
            >
                <View style={styles.centeredView}>
                    {/* <ModalHeader/> */}
                    <View style={styles.modalView}>
                        <Pressable style={styles.closeButton}
                            onPress={() => {
                                dispatch({ type: "reset_modal_state" })
                                console.log("Modal.");
                            }}>
                            <Icon name='close' type="antDesign" color='#000' size={40} />
                        </Pressable>
                        <View style={styles.textRows}>
                            <Text style={styles.modalHeadings}>Loan EMI = </Text>
                            <Text style={styles.modalText}>
                                {
                                    modalVisible.dataToShow.totalEMI !== undefined ?
                                        (modalVisible.dataToShow.totalEMI).toLocaleString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                                        : null
                                }
                            </Text>
                        </View>
                        <View style={styles.textRows}>
                            <Text style={styles.modalHeadings}>Total Interest Payable = </Text>
                            <Text style={styles.modalText}>
                                {
                                    modalVisible.dataToShow.totalEMI !== undefined ?
                                        (modalVisible.dataToShow.totalInterestPayable).toLocaleString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                                        : null
                                }
                            </Text>
                        </View>
                        <View style={styles.textRows}>
                            <Text style={styles.modalHeadings}>Total Payable = </Text>
                            <Text style={styles.modalText}>
                                {
                                    modalVisible.dataToShow.totalEMI !== undefined ?
                                        (modalVisible.dataToShow.totalPayable).toLocaleString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                                        : null
                                }
                            </Text>
                        </View>
                    </View>
                </View>
            </Modal >
        </View >
    );
};

const styles = StyleSheet.create({
    centeredView: {
        // flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        height: "80%",
        width: "80%"
    },
    closeButton: {
        alignSelf: "flex-end",
    },
    textRows: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        width: "100%"
    },
    modalHeadings: {
        marginBottom: 15,
        fontSize: 18,
        fontWeight: "700",
        color: "#0c0c0c"
    },
    modalText: {
        marginBottom: 15,
        fontSize: 18,
        color: "#0c0c0c"
    }
});

export default App;