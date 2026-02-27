import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";

export default function AuthLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="login"
        options={{
          title: "Home",
          tabBarIcon: () => (
            <FontAwesome name="sign-in" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="register"
        options={{
          title: "Home",
          tabBarIcon: () => <FontAwesome name="home" size={24} color="black" />,
        }}
      />
    </Tabs>
  );
}
