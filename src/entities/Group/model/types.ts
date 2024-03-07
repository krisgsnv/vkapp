import { type IUser } from "@/entities/User";

export interface IGroup {
    id: number;
    name: string;
    closed: boolean;
    avatar_color?: string;
    members_count: number;
    friends?: IUser[];
}

export interface IGetGroupsResponse {
    result: 1 | 0;
    data?: IGroup[];
}
