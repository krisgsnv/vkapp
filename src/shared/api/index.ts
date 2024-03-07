import { FetchBaseQueryError, createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { IGetGroupsResponse, IGroup } from "@/entities/Group";

const baseUrl = "http://localhost:3000/";

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
