import { AppRegistry } from "react-native";
import { Provider } from "react-native-paper";
import App from "./src/App";
import { name as appName } from "./app.json";

function Main() {
    return (
        <Provider>
            <App />
        </Provider>
    );
}

AppRegistry.registerComponent(appName, () => Main);
