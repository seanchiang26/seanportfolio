import { createTheme, MantineProvider } from "@mantine/core";

const theme = createTheme({
  primaryColor: "cyan",
  fontFamily: "Manrope, sans-serif",
});

export function AppMantineProvider({ children }) {
  return <MantineProvider theme={theme}>{children}</MantineProvider>;
}
