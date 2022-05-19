import React from "react";
import { Modal, StyleSheet, Text, Pressable, View } from "react-native";
import { Button, Icon } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";

const App = ({ from }) => {
    const dispatch = useDispatch()
    const modalVisible = useSelector(state => state.modal_state);
    const [modalShow, setModalShow] = React.useState(false);
    React.useEffect(() => setModalShow(modalVisible.show), [modalVisible]);

    console.log("modalVisible.from", modalVisible.from);

    return (
        <View style={styles.centeredView}>
            <Modal animationType="slide" transparent={true} visible={modalShow} onRequestClose={() => dispatch({ type: "reset_modal_state" })}>
                <View style={styles.centeredView}>
                    {/* <ModalHeader/> */}
                    <View style={styles.modalView}>
                        <Pressable style={styles.closeButton} onPress={() => dispatch({ type: "reset_modal_state" })}>
                            <Icon name='close' type="antDesign" color='#f44336' size={30} />
                        </Pressable>
                        {
                            modalVisible.from === "emi" ?
                                <View style={styles.modalContent}>
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
                                                modalVisible.dataToShow.totalInterestPayable !== undefined ?
                                                    (modalVisible.dataToShow.totalInterestPayable).toLocaleString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                                                    : null
                                            }
                                        </Text>
                                    </View>
                                    <View style={styles.textRows}>
                                        <Text style={styles.modalHeadings}>Total Payable = </Text>
                                        <Text style={styles.modalText}>
                                            {
                                                modalVisible.dataToShow.totalPayable !== undefined ?
                                                    (modalVisible.dataToShow.totalPayable).toLocaleString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                                                    : null
                                            }
                                        </Text>
                                    </View>
                                </View>
                                :
                                modalVisible.from === "vatCalculator" ?
                                    <View style={styles.modalContent}>
                                        <View style={styles.textRows}>
                                            <Text style={styles.modalHeadings}>Net Amount = </Text>
                                            <Text style={styles.modalText}>
                                                {
                                                    (modalVisible.dataToShow.netAmount !== undefined && modalVisible.dataToShow.netAmount !== null) ?
                                                        (modalVisible.dataToShow.netAmount).toLocaleString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                                                        : null
                                                }
                                            </Text>
                                        </View>
                                        <View style={styles.textRows}>
                                            <Text style={styles.modalHeadings}>VAT Price = </Text>
                                            <Text style={styles.modalText}>
                                                {
                                                    (modalVisible.dataToShow.vatPrice !== undefined && modalVisible.dataToShow.vatPrice !== null) ?

                                                        (modalVisible.dataToShow.vatPrice).toLocaleString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                                                        : null
                                                }
                                            </Text>
                                        </View>
                                        <View style={styles.textRows}>
                                            <Text style={styles.modalHeadings}>Gross Payment = </Text>
                                            <Text style={styles.modalText}>
                                                {
                                                    (modalVisible.dataToShow.grossAmount !== undefined && modalVisible.dataToShow.grossAmount !== null) ?

                                                        (modalVisible.dataToShow.grossAmount).toLocaleString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                                                        : null
                                                }
                                            </Text>
                                        </View>
                                    </View>
                                    :
                                    modalVisible.from === "sipCalculator" ?
                                        <View style={styles.modalContent}>
                                            <View style={styles.textRows}>
                                                <Text style={styles.modalHeadings}>Wealth Gained = </Text>
                                                <Text style={styles.modalText}>
                                                    {
                                                        (modalVisible.dataToShow.wealthGained !== undefined && modalVisible.dataToShow.wealthGained !== null) ?
                                                            (modalVisible.dataToShow.wealthGained).toLocaleString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                                                            : null
                                                    }
                                                </Text>
                                            </View>
                                            <View style={styles.textRows}>
                                                <Text style={styles.modalHeadings}>Invested Amount = </Text>
                                                <Text style={styles.modalText}>
                                                    {
                                                        (modalVisible.dataToShow.investedAmount !== undefined && modalVisible.dataToShow.investedAmount !== null) ?

                                                            (modalVisible.dataToShow.investedAmount).toLocaleString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                                                            : null
                                                    }
                                                </Text>
                                            </View>
                                            <View style={styles.textRows}>
                                                <Text style={styles.modalHeadings}>Total Wealth = </Text>
                                                <Text style={styles.modalText}>
                                                    {
                                                        (modalVisible.dataToShow.totalWealth !== undefined && modalVisible.dataToShow.totalWealth !== null) ?

                                                            (modalVisible.dataToShow.totalWealth).toLocaleString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                                                            : null
                                                    }
                                                </Text>
                                            </View>
                                        </View>
                                        :
                                        <View style={styles.modalContent}>
                                            <View style={styles.textRows}>
                                                <Text style={styles.modalHeadings}>Net Amount = </Text>
                                                <Text style={styles.modalText}>
                                                    {
                                                        modalVisible.dataToShow.netAmount !== undefined ?
                                                            (modalVisible.dataToShow.netAmount).toLocaleString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                                                            : null
                                                    }
                                                </Text>
                                            </View>
                                            <View style={styles.textRows}>
                                                <Text style={styles.modalHeadings}>Monthly Interest = </Text>
                                                <Text style={styles.modalText}>
                                                    {
                                                        modalVisible.dataToShow.monthlyInterest !== undefined ?
                                                            (modalVisible.dataToShow.monthlyInterest).toLocaleString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                                                            : null
                                                    }
                                                </Text>
                                            </View>
                                            <View style={styles.textRows}>
                                                <Text style={styles.modalHeadings}>Total Payment = </Text>
                                                <Text style={styles.modalText}>
                                                    {
                                                        modalVisible.dataToShow.totalPayment !== undefined ?
                                                            (modalVisible.dataToShow.totalPayment).toLocaleString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                                                            : null
                                                    }
                                                </Text>
                                            </View>
                                        </View>
                        }
                    </View>
                    <View style={{ ...styles.buttonView, display: "flex", justifyContent: "flex-end", alignItems: "flex-end", backgroundColor: "white", }}>
                        <Button title="OK" type="outline" color="#005f9d" buttonStyle={{ borderRadius: 10, maxWidth: 100 }} />
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
        marginBottom: 0,
        backgroundColor: "white",
        borderTopEndRadius: 20,
        borderTopLeftRadius: 20,
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
        height: "auto",
        width: "80%"
    },
    modalContent: {
        marginVertical: 10
    },
    buttonView: {
        marginBottom: 20,
        backgroundColor: "white",
        borderBottomEndRadius: 20,
        borderBottomLeftRadius: 20,
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
        height: "auto",
        width: "80%"
    },

    closeButton: {
        alignSelf: "flex-end",
        backgroundColor: "#f0f0f0",
        borderRadius: 20,
    },
    textRows: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start", flexWrap: 'wrap',
        width: "100%"
    },
    modalHeadings: {
        marginBottom: 15,
        fontSize: 18,
        fontWeight: "700",
        color: "#005f9d"
    },
    modalText: {
        marginBottom: 15,
        fontSize: 18,
        color: "#0c0c0c"
    }
});

export default App;