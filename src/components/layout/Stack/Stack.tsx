import { spacing, SpacingKey } from "@/src/theme/spacing";
import { View, ViewProps } from "react-native";

type StackProps = ViewProps & {
  spacing?: SpacingKey;
};

export function Stack({
  children,
  spacing: spacingKey = "md",
  style,
  ...rest
}: StackProps) {
  return (
    <View
      style={[
        {
          gap: spacing[spacingKey],
        },
        style,
      ]}
      {...rest}
    >
      {children}
    </View>
  );
}
