import { IGroup } from "@/entities/Group";
import { isEmpty } from "@/shared/lib/array";

export const getTypeFilter = (type: string, group: IGroup) => {
    switch (type) {
        case "all":
            return true;
        case "closed":
            return group.closed;
        case "open":
            return !group.closed;
    }
};

export const getColorFilter = (color: string, group: IGroup) => {
    return color === "all" || group.avatar_color === color;
};

export const getFriendsFilter = (friends: string, group: IGroup) => {
    switch (friends) {
        case "all":
            return true;
        case "no":
            return !group.friends || isEmpty(group.friends);
        case "yes":
            return group.friends?.length;
    }
};