import React from "react";
import { TouchableOpacity, StyleSheet, Text, Dimensions } from "react-native";
import { Icon } from "react-native-elements";

const screen = Dimensions.get("window");
const buttonWidth = screen.width / 4;

export default ({ onPress, text, size, theme, theme_mode }) => {
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
      height: Math.floor(buttonWidth - 30),
      width: Math.floor(buttonWidth - 30),
      alignItems: "center",
      justifyContent: "center",
      margin: 5,
      marginHorizontal: (buttonWidth/10)+6
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
      marginBottom:5
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
