import { useAuth } from "@/src/auth/AuthContext";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Redirect, Tabs, useRouter } from "expo-router";

export default function AppLayout() {
  const { status, logout } = useAuth();
  const router = useRouter();

  if (status === "loading") return null;
  if (status === "unauthenticated") return <Redirect href="/login" />;

  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: () => <FontAwesome name="home" size={24} color="black" />,
        }}
      />
      <Tabs.Screen
        name="newBoard"
        options={{
          title: "New Board",
          tabBarIcon: () => (
            <FontAwesome name="wpforms" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: () => <FontAwesome name="user" size={24} color="black" />,
        }}
      />
      <Tabs.Screen
        name="logout"
        options={{
          title: "Logout",
          tabBarIcon: () => (
            <FontAwesome name="sign-out" size={24} color="black" />
          ),
        }}
        listeners={{
          tabPress: (e) => {
            e.preventDefault();
            logout().then(() => router.replace("/login"));
          },
        }}
      />
    </Tabs>
  );
}
