import { useState } from "react";
import { SimpleCell } from "@vkontakte/vkui";
import { getFriendsCount, getGroupType, getMembersCount, type IGroup } from "./..";
import { Avatar } from "@/shared/ui";

import style from "./style.module.css";

export const Group = (props: IGroup) => {
    const { name, closed, avatar_color, members_count, friends } = props;
    const [isFriendsShown, setFriendsShown] = useState(false);

    const membersCount = getMembersCount(members_count);
    const friendsCount = getFriendsCount(friends);

    const handleFriendsClick = () => {
        setFriendsShown((prev) => !prev);
    };

    return (
        <SimpleCell
            subhead={getGroupType(closed)}
            subtitle={
                <ul>
                    {membersCount && <li>{membersCount}</li>}
                    {friendsCount && (
                        <li className={style.friends} onClick={handleFriendsClick}>
                            {friendsCount}
                        </li>
                    )}
                    {isFriendsShown && (
                        <li>
                            <ol>
                                {friends?.map((user, i) => (
                                    <li key={i}>
                                        {user.first_name} {user.last_name}
                                    </li>
                                ))}
                            </ol>
                        </li>
                    )}
                </ul>
            }
            before={<Avatar color={avatar_color} />}
        >
            {name}
        </SimpleCell>
    );
};
