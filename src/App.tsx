import { AppRoot } from "@vkontakte/vkui";
import { Filter } from "@/features/Filter";
import { GroupsList } from "@/widgets/GroupsList";

function App() {
    return (
        <AppRoot>
            <Filter />
            <GroupsList />
        </AppRoot>
    );
}

export default App;
