import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { AdaptivityProvider, ConfigProvider } from "@vkontakte/vkui";
import { store } from "@/app/providers/store";
import App from "./App.tsx";

import "@vkontakte/vkui/dist/vkui.css";

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
    <Provider store={store}>
        <ConfigProvider appearance="light">
            <AdaptivityProvider>
                <App />
            </AdaptivityProvider>
        </ConfigProvider>
    </Provider>
);
