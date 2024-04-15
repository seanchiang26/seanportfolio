import { AppMantineProvider } from "./AppMantineProvider";

export function AppWrapper({ children }) {
    return (
        <AppMantineProvider>
            {children}
        </AppMantineProvider>
    );
}