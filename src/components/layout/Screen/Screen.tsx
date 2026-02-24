import { colors } from "@/src/theme/colors";
import React, { ReactNode } from "react";
import {
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type ScreenProps = {
  children: ReactNode;
  scroll?: boolean;
  keyboardAvoiding?: boolean;
};

export function Screen({
  children,
  scroll = false,
  keyboardAvoiding = false,
}: ScreenProps) {
  const Wrapper = scroll ? ScrollView : View;

  const content = (
    <SafeAreaView style={styles.safeArea}>
      <Wrapper
        style={!scroll && styles.flex}
        contentContainerStyle={scroll && styles.scrollContent}
      >
        {children}
      </Wrapper>
    </SafeAreaView>
  );

  if (!keyboardAvoiding) return content;

  return (
    <KeyboardAvoidingView
      style={styles.flex}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      {content}
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  flex: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
});
