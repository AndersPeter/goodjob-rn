import { spacing } from "@/src/theme/spacing";
import React, { ReactNode } from "react";
import { StyleSheet, View } from "react-native";

type ContainerProps = {
  children: ReactNode;
};

export function Container({ children }: ContainerProps) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.md,
  },
});
