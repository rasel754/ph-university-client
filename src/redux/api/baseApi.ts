import {
  BaseQueryApi,
  BaseQueryFn,
  createApi,
  DefinitionType,
  FetchArgs,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import { logout, setUser } from "../features/auth/authSlice";
import { toast } from "sonner";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:5000/api/v1",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;

    if (token) {
      headers.set("Authorization", `${token}`);
    }

    return headers;
  },
});

const baseQueryWithRefreshToken: BaseQueryFn<
  FetchArgs,
  BaseQueryApi,
  DefinitionType
> = async (args, api, extraOptions): Promise<any> => {
  // let result = await baseQuery(args, api, extraOptions);
  let result = await baseQuery(args, api, extraOptions);

  if (result.error?.status === 404){
    toast.error(result?.error?.data?.message);
  }
  if (result.error?.status === 403){
    toast.error(result?.error?.data?.message);
  }
    if (result.error?.status === 401) {
      console.log("send refresh token");
      const res = await fetch(
        "http://localhost:5000/api/v1/auth/refresh-token",
        {
          method: "POST",
          credentials: "include",
        }
      );
      const data = await res.json();

      if (data?.data?.accessToken) {
        const user = (api.getState() as RootState).auth.token;

        api.dispatch(
          setUser({
            user,
            token: data?.data?.accessToken,
          })
        );
        result = await baseQuery(args, api, extraOptions);
      } else {
        api.dispatch(logout());
      }
    }
  return result;
};

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQueryWithRefreshToken,
  tagTypes:["semseter" ,"courses" ,"offeredCourse"],
  endpoints: () => ({}),
});
