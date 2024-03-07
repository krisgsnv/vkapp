import { Group as UIGroup } from "@vkontakte/vkui";
import { Group } from "@/entities/Group";
import { useGetAllGroupsQuery } from "@/shared/api";

export const GroupsList = () => {
    const { data: groups, error, isLoading } = useGetAllGroupsQuery();

    if (isLoading) return <p>Загрузка</p>;
    else if (error) return <p>Ошибка</p>;
    else if (groups)
        return (
            <UIGroup>
                {groups.map((group) => {
                    return <Group key={group.id} {...group} />;
                })}
            </UIGroup>
        );
};
