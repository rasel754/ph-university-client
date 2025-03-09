import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../components/form/PHForm";
import PHinput from "../../../components/form/PHinput";
import { Button, Col, Divider, Row } from "antd";
import PHSelect from "../../../components/form/PHSelect";
import { bloodGroupOptions, genderOptions } from "../../../constants/global";
import PHDatePicker from "../../../components/form/PHDatePicker";
import {
  useGetAcademicDepartmentsQuery,
  useGetAllSemestersQuery,
} from "../../../redux/features/admin/academicManagement.api";
import { useAddStudentMutation } from "../../../redux/features/admin/userManagement.api";

const studentDummyData = {
  password: "student123",
  student: {
    id: "S012",
    name: {
      firstName: "Aiden",
      middleName: "Michael",
      lastName: "Turner",
    },
    gender: "male",
    dateOfBirth: "2001-07-25",
    bloodGroup: "O-",

    email: "aiden.turner@example.com",
    contactNo: "3045",
    emergencyContactNo: "8765432109",
    presentAddress: "222 Maple Street, Springfield",
    permanentAddress: "89 Pine Avenue, Greenville",

    guardian: {
      fatherName: "Nathan Turner",
      fatherOccupation: "Doctor",
      fatherContactNo: "9234567812",
      motherName: "Emma Turner",
      motherOccupation: "Professor",
      motherContactNo: "9234567813",
    },
    localGuardian: {
      name: "Benjamin Carter",
      occupation: "Lawyer",
      contactNo: "4455667788",
      address: "12 Oak Street, Springfield",
    },

    admissionSemester: "678e17fef12aeb15939fa1b6",
    academicDepartment: "678e5b6a76537c3a7e6e0d63",
    profileImg: "https://example.com/profiles/aiden_turner.jpg",
  },
};

//! This is only for development
//! Should be removed
const studentDefaultValues = {
  name: {
    firstName: "I am ",
    middleName: "Student",
    lastName: "Number 1",
  },
  gender: "male",

  bloogGroup: "A+",

  email: "aiden.turner1@example.com",
  contactNo: "1235678",
  emergencyContactNo: "987-654-3210",
  presentAddress: "123 Main St, Cityville",
  permanentAddress: "456 Oak St, Townsville",

  guardian: {
    fatherName: "James Doe",
    fatherOccupation: "Engineer",
    fatherContactNo: "111-222-3333",
    motherName: "Mary Doe",
    motherOccupation: "Teacher",
    motherContactNo: "444-555-6666",
  },

  localGuardian: {
    name: "Alice Johnson",
    occupation: "Doctor",
    contactNo: "777-888-9999",
    address: "789 Pine St, Villageton",
  },

  admissionSemester: "65bb60ebf71fdd1add63b1c0",
  academicDepartment: "65b4acae3dc8d4f3ad83e416",
};

const CreateStudent = () => {
  const [addStudent, { data, error }] = useAddStudentMutation();

  console.log({ data, error });

  const { data: sData, isLoading: sIsLoading } =
    useGetAllSemestersQuery(undefined);

  const { data: dData, isLoading: dIsLoading } =
    useGetAcademicDepartmentsQuery(undefined);

  const semesterOptions = sData?.data?.map((item) => ({
    value: item._id,
    label: `${item.name}-${item.year}`,
  }));

  const departmentOptions = dData?.data?.map((item) => ({
    value: item._id,
    label: item.name,
  }));

  const onSubmit: SubmitHandler<FieldValues> = (data) => {

    const studentData = {
      password: "student12223",
      student: data,
    };
    const formdata = new FormData();

    formdata.append("data", JSON.stringify(studentData));

    addStudent(formdata);

    // //!this for development purposes only
    //*just for testing purposes
    console.log(Object.fromEntries(formdata));
  };

  
  // const onSubmit: SubmitHandler<FieldValues> = async (data) => {
  //   const studentData = {
  //     password: "student12223",
  //     student: data,
  //   };
  
  //   console.log("Submitting Data:", studentData);
  
  //   await addStudent(studentData);
  // };
  
  return (
    <div>
      <Row>
        <Col span={24}>
          <PHForm onSubmit={onSubmit} defaultValues={studentDefaultValues}>
            <Divider>Personal Information</Divider>
            <Row gutter={8}>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <PHinput
                  type="text"
                  name="name.firstName"
                  label="First Name"
                ></PHinput>
              </Col>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <PHinput
                  type="text"
                  name="name.middleName"
                  label="Middle Name"
                ></PHinput>
              </Col>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <PHinput
                  type="text"
                  name="name.lastName"
                  label="Last Name"
                ></PHinput>
              </Col>

              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <PHSelect
                  options={genderOptions}
                  name="gender"
                  label="Gender"
                ></PHSelect>
              </Col>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <PHDatePicker
                  name="dateOfBirth"
                  label="Date Of Birth"
                ></PHDatePicker>
              </Col>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <PHSelect
                  options={bloodGroupOptions}
                  name="bloodGroup"
                  label="Blood Group"
                ></PHSelect>
              </Col>

              <Divider>Contact Information</Divider>

              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <PHinput type="text" name="email" label="Email"></PHinput>
              </Col>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <PHinput
                  type="text"
                  name="contactNo"
                  label="Contact No"
                ></PHinput>
              </Col>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <PHinput
                  type="text"
                  name="emergencyContactNo"
                  label="Emergency Contact No"
                ></PHinput>
              </Col>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <PHinput
                  type="text"
                  name="presentAddress"
                  label="Present Address"
                ></PHinput>
              </Col>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <PHinput
                  type="text"
                  name="permanentAddress"
                  label="Permanent Address"
                ></PHinput>
              </Col>

              <Divider>Guardian Information</Divider>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <PHinput
                  type="text"
                  name="guardian.fatherName"
                  label="Father's Name"
                ></PHinput>
              </Col>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <PHinput
                  type="text"
                  name="guardian.fatherOccupation"
                  label="Father's Occupation"
                ></PHinput>
              </Col>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <PHinput
                  type="text"
                  name="guardian.fatherContactNo"
                  label="Father's Contact No"
                ></PHinput>
              </Col>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <PHinput
                  type="text"
                  name="guardian.motherName"
                  label="Mother's Name"
                ></PHinput>
              </Col>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <PHinput
                  type="text"
                  name="guardian.motherOccupation"
                  label="Mother's Occupation"
                ></PHinput>
              </Col>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <PHinput
                  type="text"
                  name="guardian.motherContactNo"
                  label="Mother's Contact No"
                ></PHinput>
              </Col>

              <Divider>Local Guardian Information</Divider>

              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <PHinput
                  type="text"
                  name="localGuardian.name"
                  label="Name"
                ></PHinput>
              </Col>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <PHinput
                  type="text"
                  name="localGuardian.occupation"
                  label="Occupation"
                ></PHinput>
              </Col>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <PHinput
                  type="text"
                  name="localGuardian.contactNo"
                  label="Contact No"
                ></PHinput>
              </Col>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <PHinput
                  type="text"
                  name="localGuardian.address"
                  label="Address"
                ></PHinput>
              </Col>
            </Row>
            <Divider>Academic Information</Divider>

            <Row gutter={8}>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <PHSelect
                  options={semesterOptions}
                  disabled={sIsLoading}
                  name="admissionSemester"
                  label="Admission Semester"
                ></PHSelect>
              </Col>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <PHSelect
                  options={departmentOptions}
                  disabled={dIsLoading}
                  name="academicDepartment"
                  label="Academic Department"
                ></PHSelect>
              </Col>
            </Row>

            <Button htmlType="submit">Submit</Button>
          </PHForm>
        </Col>
      </Row>
    </div>
  );
};

export default CreateStudent;
