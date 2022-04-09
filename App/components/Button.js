import React from "react";
import { TouchableOpacity, StyleSheet, Text, Dimensions } from "react-native";
import { Icon } from "react-native-elements";

const screen = Dimensions.get("window");
const buttonWidth = screen.width / 4;

const styles = StyleSheet.create({
  text: {
    color: "#aaa5a5",
    fontSize: 28, 
    fontFamily: "notoserif"
  },
  textSecondary: {
    color: "#8c8c8c"
  },
  button: {
    flex: 1,
    height: Math.floor(buttonWidth - 30),
    alignItems: "center",
    justifyContent: "center",
    margin: 5
  },
  buttonDouble: {
    width: screen.width / 2 - 10,
    flex: 0,
    alignItems: "flex-start",
    paddingLeft: 40
  },
  buttonSecondary: {
    // backgroundColor: "#a6a6a6"
  },
  buttonAccent: {
    color: "#87b5ab"
  },
  textAccent: {
    color: "#87b5ab",
    fontWeight: "700",
    fontSize: 36
  }
});

export default ({ onPress, text, size, theme }) => {
  const buttonStyles = [styles.button];
  const textStyles = [styles.text];

  if (size === "double") {
    buttonStyles.push(styles.buttonDouble);
  }

  if (theme === "secondary") {
    buttonStyles.push(styles.buttonSecondary);
    textStyles.push(styles.textSecondary);
  } else if (theme === "accent") {
    buttonStyles.push(styles.buttonAccent);
    textStyles.push(styles.textAccent)
  }

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyles}>
      {text === "backspace" ?
        <Icon name="backspace" color="#8c8c8c" />
        :
        <Text style={textStyles}>{text}</Text>
      }
    </TouchableOpacity>
  );
};
