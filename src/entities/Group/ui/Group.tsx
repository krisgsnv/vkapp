import { SimpleCell } from "@vkontakte/vkui";
import { type IGroup } from "./..";
import { Avatar } from "@/shared/ui";
import { getNoun } from "@/shared/lib/string";

const getGroupType = (isClosed: IGroup["closed"]) => {
    return `${isClosed === true ? "Закрытая" : "Открытая"} группа`;
};

const getMembersCount = (count: IGroup["members_count"]) => {
    return `${count} ${getNoun(count, "подписчик", "подписчика", "подписчиков")}`;
};

const getAvatar = (color: IGroup["avatar_color"]) => {
    return color ? <Avatar color={color} /> : color;
};

const getFriendsCount = (friends: IGroup["friends"]) => {
    if (friends !== undefined) {
        const count = friends.length;
        return `${count} ${getNoun(count, "друг", "друга", "друзей")}`;
    }
    return friends;
};

const getSubTitle = (members: IGroup["members_count"], friends: IGroup["friends"]) => {
    const membersText = getMembersCount(members);
    const friendsText = getFriendsCount(friends);
    if (friends !== undefined) {
        return membersText.concat(` | ${friendsText}`);
    }
    return membersText;
};

export const Group = (props: IGroup) => {
    const { name, closed, avatar_color, members_count, friends } = props;
    return (
        <SimpleCell
            subhead={getGroupType(closed)}
            subtitle={getSubTitle(members_count, friends)}
            before={getAvatar(avatar_color)}
        >
            {name}
        </SimpleCell>
    );
};
