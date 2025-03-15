import { TQueryParam, TResponseRedux, TSemester } from "../../../types";
import { baseApi } from "../../api/baseApi";

const courseManagementApi = baseApi.injectEndpoints({
      endpoints: (builder) => ({
        getAllRegisteredSemesters: builder.query({
          query: (args) => {
            const params = new URLSearchParams();
    
            if (args) {
              args.forEach((item: TQueryParam) => {
                params.append(item.name, item.value as string);
              });
            }
    
            return {
              url: "/semester-registrations",
              method: "GET",
              params: params,
            };
          },
          providesTags:['semseter'],
          transformResponse: (response: TResponseRedux<TSemester[]>) => {
            // console.log("response: ", response);
            return {
              data: response.data,
              meta: response.meta,
            };
          },
        }),
    
        addRegistredSemester: builder.mutation({
          query: (data) => ({
            url: "/semester-registrations/create-semester-registration",
            method: "POST",
            body: data,
          }),
          invalidatesTags:['semseter']
        }),

        updateRegistredSemester: builder.mutation({
          query: (args) => ({
            url: `/semester-registrations/${args.id}`,
            method: "PATCH",
            body: args.data,
          }),
          invalidatesTags:['semseter']
        }),
    
     
      }),
})



export const {  useAddRegistredSemesterMutation , useGetAllRegisteredSemestersQuery , useUpdateRegistredSemesterMutation} = courseManagementApi;