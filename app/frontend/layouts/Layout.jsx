import { AppShell } from "@mantine/core";
import { Header } from "../components/header/Header";
import { FlashMessages } from "../components/flashmessages/FlashMessages";
import { Footer } from "../components/footer/Footer";

const Layout = ({ children }) => {
  return (
    <AppShell header={{ height: 60 }} padding="md">
      <AppShell.Header>
        <Header />
      </AppShell.Header>

      <AppShell.Main>
        <FlashMessages />
        {children}
      </AppShell.Main>
    </AppShell>
  );
};

export default page => <Layout>{page}</Layout>;
