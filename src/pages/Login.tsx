/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button, Row } from "antd";
import { FieldValues } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser, TUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import PHForm from "../components/form/PHForm";
import PHinput from "../components/form/PHinput";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  // const { register, handleSubmit } = useForm({
  //   defaultValues: {
  //     userId: "A-0002",
  //     password: "admin123",
  //   },
  // });

const defaultValues =  {
     userId: "2030020001",
      password: "student1234",
   }

  const [login]=useLoginMutation();

  // console.log("data:" , data);
  // console.log("error:" , error);

  const onSubmit =async (data:FieldValues) => {
    console.log(data);

   const toastId= toast.loading('Loging in...');
try {
   const userInfo = {
     id: data.userId,
     password: data.password,
   };


   const res = await login(userInfo).unwrap();

   const user = verifyToken(res.data.accessToken) as TUser;

   dispatch(setUser({ user: user, token: res.data.accessToken }));
    toast.success("Logged in successfully", { id: toastId , duration :2000});

    if(res.data.needsPasswordChange){
      navigate(`/change-password`);
    }else{
      navigate(`/${user.role}/dashboard`);
    }

   
  }
  catch (err) {
    toast.error("something went wrong", { id: toastId, duration: 2000 });
  }
  
  };
  return (
    <Row justify="center" align="middle" style={{ height: "100vh" }}>
      <PHForm onSubmit={onSubmit} defaultValues={defaultValues}>
        <PHinput type="text" name="userId" label="ID:"></PHinput>

        <PHinput type="text" name="password" label="password"></PHinput>

        <Button htmlType="submit">Login</Button>
      </PHForm>
    </Row>
  );
};

export default Login;
