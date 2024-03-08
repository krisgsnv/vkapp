import { getNoun } from "@/shared/lib/string";
import { type IGroup } from "../model/types";

export const getGroupType = (isClosed: IGroup["closed"]) => {
    return isClosed === undefined ? isClosed : `${isClosed === true ? "Закрытая" : "Открытая"} группа`;
};

export const getMembersCount = (count: IGroup["members_count"]) => {
    return count === undefined ? count :`${count} ${getNoun(count, "подписчик", "подписчика", "подписчиков")}`;
};

export const getFriendsCount = (friends: IGroup["friends"]) => {
    if (friends !== undefined) {
        const count = friends.length;
        return `${count} ${getNoun(count, "друг", "друга", "друзей")}`;
    }
    return friends;
};
