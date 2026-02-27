import Providers from "@/src/app/providers/Providers";
import { Slot } from "expo-router";

export default function RootLayout() {
  // Providers wraps everything so useAuth() works in nested layouts
  return (
    <Providers>
      <Slot />
    </Providers>
  );
}
