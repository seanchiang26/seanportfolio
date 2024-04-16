import { AppShell } from "@mantine/core";
import { Header } from "../components/header/Header";
import { Footer } from "../components/footer/Footer";

const Layout = ({ children }) => {
  return (
    <AppShell header={{ height: 60 }} footer={{ height: 60 }} padding="md">
      <AppShell.Header>
        <Header />
      </AppShell.Header>

      <AppShell.Footer>
        <Footer />
      </AppShell.Footer>

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
};

export default page => <Layout>{page}</Layout>;
