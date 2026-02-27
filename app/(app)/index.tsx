import { Container } from "@/src/components/layout/Container/Container";
import { Screen } from "@/src/components/layout/Screen/Screen";
import { Section } from "@/src/components/layout/Section/Section";
import { Stack } from "@/src/components/layout/Stack/Stack";

import { useAuth } from "@/src/auth/AuthContext";
import { Button, Text, View } from "react-native";

export default function HomeScreen() {
  const { logout } = useAuth();
  return (
    <Screen scroll>
      <Container>
        <Section title="HomeScreen">
          <Stack>
            <View>
              <Text>Home (Protected)</Text>
              <Button title="Logout" onPress={logout} />
            </View>
          </Stack>
        </Section>

        <Section title="Recommended">
          <Stack>
            <Text>Jobboard</Text>
          </Stack>
        </Section>
      </Container>
    </Screen>
  );
}
