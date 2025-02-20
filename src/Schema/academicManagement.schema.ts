import { z } from "zod";

export const academicSemesterSchema = z.object({
  name: z.string({ required_error: " name field is required" }),
  year: z.string({ required_error: " year field is required" }),
  startDate: z.string({ required_error: " start Date field is required" }),
  endDate: z.string({ required_error: " end Date field is required" }),
});
