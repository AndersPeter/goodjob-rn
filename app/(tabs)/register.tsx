import { Container } from "@/src/components/layout/Container/Container";
import { Screen } from "@/src/components/layout/Screen/Screen";
import { Section } from "@/src/components/layout/Section/Section";
import { Stack } from "@/src/components/layout/Stack/Stack";
import { Text } from "@react-navigation/elements";

export default function JobsScreen() {
  return (
    <Screen scroll>
      <Container>
        <Section title="Good job app">
          <Stack>
            <Text>Register</Text>
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
