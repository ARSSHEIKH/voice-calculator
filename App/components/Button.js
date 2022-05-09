import React from "react";
import { TouchableOpacity, StyleSheet, Text, Dimensions } from "react-native";
import { Icon } from "react-native-elements";

const screen = Dimensions.get("window");
const buttonWidth = screen.width / 4;

export default ({ onPress, text, theme, theme_mode }) => {
  const styles = StyleSheet.create({
    text: {
      color: "#aaa5a5",
      fontSize: 28,
      fontFamily: "notoserif"
    },
    textSecondary: {
      color: theme_mode.secondary.color
    },
    button: {
      // flex: 1,
      height: Math.floor(buttonWidth - 25),
      width: Math.floor(buttonWidth - 25),
      alignItems: "center",
      justifyContent: "center",
      margin: 4,
      marginHorizontal: (buttonWidth / 10) + 4
    },
    buttonSecondary: {
      backgroundColor: theme_mode.secondary.backgroundColor,
      borderRadius: 100
    },
    buttonAccent: {
      backgroundColor: theme_mode.accent.backgroundColor,
      borderRadius: 100
    },
    textAccent: {
      color: theme_mode.accent.color,
      fontWeight: "700",
      fontSize: 36,
      marginBottom: 5
    },
    buttonDouble: {
      width: Math.floor(buttonWidth + 70),
    }
  });

  const buttonStyles = [styles.button];
  const textStyles = [styles.text];

  if (theme === "secondary") {
    buttonStyles.push(styles.buttonSecondary);
    textStyles.push(styles.textSecondary);
  } else if (theme === "accent") {
    buttonStyles.push(styles.buttonAccent);
    textStyles.push(styles.textAccent)
  }
  else if (theme === "double") {
    buttonStyles.push(styles.buttonDouble);
    textStyles.push(styles.textAccent)

  }

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyles}>
      {text === "backspace" ?
        <Icon name="backspace" color={theme_mode.secondary.color} />
        :
        <Text style={textStyles}>{text}</Text>
      }
    </TouchableOpacity>
  );
};
