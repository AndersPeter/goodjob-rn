import React, { ReactNode } from "react";
import { View } from "react-native";

type StackProps = {
  children: ReactNode;
  space?: number;
};

export function Stack({ children, space = 16 }: StackProps) {
  const items = React.Children.toArray(children);

  return (
    <View>
      {items.map((child, index) => (
        <View
          key={index}
          style={{ marginBottom: index < items.length - 1 ? space : 0 }}
        >
          {child}
        </View>
      ))}
    </View>
  );
}
