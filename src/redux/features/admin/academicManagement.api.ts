import { baseApi } from "../../api/baseApi";

const academicSemesterApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSemesters: builder.query({
      query: () => ({
        url: "/academicSemester",
        method: "GET",
      }),
      transformResponse:(response) =>{
        data:response.data;
        meta:response.meta
      }
    }),
    addAcademicSemester: builder.mutation({
      query: (data) => ({
        url:"/academicSemester/create-academicSemester",
        method:"POST",
        body: data,
      }),
    }),
  }),
});


export const {useGetAllSemestersQuery ,useAddAcademicSemesterMutation} =academicSemesterApi;