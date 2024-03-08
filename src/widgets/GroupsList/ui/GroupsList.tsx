import { Group } from "@/entities/Group";
import { selectFilteredGroups } from "@/entities/Group/api";
import { useAppSelector } from "@/shared/hooks/redux";
import { filterSelector } from "@/features/Filter";
import { isEmpty } from "@/shared/lib/array";

export const GroupsList = () => {
    const filter = useAppSelector(filterSelector);
    const groups = useAppSelector((state) => selectFilteredGroups(state, filter));

    return isEmpty(groups) ? (
        <p>Нет элементов, удовлетворяющих выбранным критериям</p>
    ) : (
        groups.map((group) => {
            return <Group key={group.id} {...group} />;
        })
    );
};
