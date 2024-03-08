import { FetchBaseQueryError, createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { IGetGroupsResponse, IGroup } from "@/entities/Group";
import { createSelector } from "@reduxjs/toolkit";
import { getColorFilter, getFriendsFilter, getTypeFilter } from "@/features/Filter";
import { BASE_URL } from "@/shared/api";

const baseUrl = BASE_URL;

export const groupsApi = createApi({
    reducerPath: "groupsApi",
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getAllGroups: builder.query<IGroup[], void>({
            queryFn: async () => {
                try {
                    const response = await fetch(baseUrl + "groups");
                    const groups = (await response.json()) as IGetGroupsResponse;
                    if (groups.result === 0 || groups.data === undefined) {
                        throw new Error("Возникла ошибка");
                    }
                    return { data: groups.data };
                } catch (e) {
                    const error = e as FetchBaseQueryError;
                    return { error };
                }
            }
        })
    })
});

export const { useGetAllGroupsQuery } = groupsApi;

export const selectGroups = groupsApi.endpoints.getAllGroups.select();

export const selectColors = createSelector(selectGroups, ({ data }) => {
    if (data)
        return data.reduce((colors, { avatar_color }) => {
            if (avatar_color && !colors.includes(avatar_color)) {
                colors.push(avatar_color);
            }
            return colors;
        }, [] as string[]);
    else return [];
});

export const selectFilteredGroups = createSelector(
    [selectGroups, (_state, filter) => filter],
    ({ data }, { type, color, friends }) => {
        if (data)
            return data.filter((group) => {
                const typeFilter = getTypeFilter(type, group);
                const colorFilter = getColorFilter(color, group);
                const friendsFilter = getFriendsFilter(friends, group);

                return typeFilter && colorFilter && friendsFilter;
            });
        else return [];
    }
);
