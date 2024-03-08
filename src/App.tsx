import { Filter, filterSelector } from "@/features/Filter";
import { GroupsList } from "@/widgets/GroupsList";
import { selectFilteredGroups, useGetAllGroupsQuery } from "@/entities/Group";
import { useAppSelector } from "@/shared/hooks/redux";

import "@/shared/assets/style.css";

const App = () => {
    const filter = useAppSelector(filterSelector);
    const groups = useAppSelector((state) => selectFilteredGroups(state, filter));
    const { error, isLoading } = useGetAllGroupsQuery();

    if (isLoading) return <p>Загрузка...</p>;
    else if (error) return <p>Ошибка</p>;
    else if (groups)
        return (
            <>
                <Filter />
                <GroupsList />
            </>
        );
};

export default App;
