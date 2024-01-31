import { StyleSheet, Text } from "react-native";
import { Colors } from "../../utils/colors";
import React from "react";

type InstructionTextProps = {
  children: React.ReactNode;
  style?: object;
};

export default function InstructionText({
  children,
  style,
}: InstructionTextProps) {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  instructionText: {
    fontFamily: "open-sans",
    color: Colors.accent500,
    fontSize: 24,
  },
});
