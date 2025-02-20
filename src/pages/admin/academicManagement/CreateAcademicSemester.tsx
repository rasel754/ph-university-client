import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../components/form/PHForm";
import { Button, Col, Flex } from "antd";
import PHSelect from "../../../components/form/PHSelect";
import { monthOptions } from "../../../constants/global";
import { semesterOptions } from "../../../constants/semester";
import { zodResolver } from "@hookform/resolvers/zod";
import { academicSemesterSchema } from "../../../Schema/academicManagement.schema";
import { useAddAcademicSemesterMutation } from "../../../redux/features/admin/academicManagement.api";
import { toast } from "sonner";
import { TResponse } from "../../../types/global";

// const nameOptions = [
//   {
//     value: "01",
//     label: "Autumn",
//   },
//   {
//     value: "02",
//     label: "Summer",
//   },
//   {
//     value: "03",
//     label: "Fall",
//   },
// ];

const currentYear = new Date().getFullYear();

const yearOptions = [0, 1, 2, 3, 4].map((number) => ({
  value: String(currentYear + number),
  label: String(currentYear + number),
}));

const CreateAcademicSemester = () => {
  const [addAcademicSemester] = useAddAcademicSemesterMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {

   const toastId =toast.loading("creatint ....");

    const name = semesterOptions[Number(data?.name - 1)]?.label;

    // console.log("Form data: ", data);
    // console.log("Name: ", name);

    const semesterData = {
      name,
      code: data.name,
      year: data.year,
      startDate: data.startDate,
      endDate: data.endDate,
    };

    try {
 
      const res = await addAcademicSemester(semesterData) as TResponse;

      if(res.error){
        toast.error(res.error.data.message, { id: toastId });
      }else{
        toast.success("Academic Semester Created Successfully", {
          id: toastId,
        });
        //window.location.href = "/admin/academic-management/academic-semesters";
      }
  
    } catch (err) {
      toast.error("somewhere went wrong", { id: toastId });
    }
  };

  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <PHForm
          onSubmit={onSubmit}
          resolver={zodResolver(academicSemesterSchema)}
        >
          <PHSelect
            label="Name"
            name="name"
            options={semesterOptions}
          ></PHSelect>
          <PHSelect label="Year" name="year" options={yearOptions}></PHSelect>
          <PHSelect
            label="Start Month"
            name="startDate"
            options={monthOptions}
          ></PHSelect>
          <PHSelect
            label="End Month"
            name="endDate"
            options={monthOptions}
          ></PHSelect>
          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Flex>
  );
};

export default CreateAcademicSemester;
