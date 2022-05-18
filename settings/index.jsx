function BitrafOpenerSettings(props) {
  return (
    <Page>
      <Section
        title={<Text bold align="center">Bitraf door opener settings</Text>}>
        <Text>
          Credentials to open Bitraf entry door. The settings is now stored any other place then on your mobile phone.
        </Text>
        <TextInput
          label="Username"
          settingsKey="username"
          placeholder=""
        />
        <TextInput
            label="Password"
            settingsKey="password"
            placeholder=""
        />
      </Section>
    </Page>
  );
}

registerSettingsPage(BitrafOpenerSettings);