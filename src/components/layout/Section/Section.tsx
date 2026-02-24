import { colors } from "@/src/theme/colors";
import { spacing } from "@/src/theme/spacing";
import React, { ReactNode } from "react";
import { StyleSheet, Text, View } from "react-native";

type SectionProps = {
  title?: string;
  children: ReactNode;
};

export function Section({ title, children }: SectionProps) {
  return (
    <View style={styles.section}>
      {title && <Text style={styles.title}>{title}</Text>}
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    marginBottom: spacing.lg,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: spacing.sm,
    color: colors.text,
  },
});
