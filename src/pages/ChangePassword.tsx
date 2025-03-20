import { Button, Row } from "antd";
import PHForm from "../components/form/PHForm";
import PHinput from "../components/form/PHinput";
import { useChangePasswordMutation } from "../redux/features/admin/userManagement.api";
import { useAppDispatch } from "../redux/hooks";
import { logout } from "../redux/features/auth/authSlice";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { TResponse } from "../types";
import {  FieldValues, SubmitHandler } from "react-hook-form";

const ChangePassword =() => {

    const [changePassword] = useChangePasswordMutation();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const onSubmit :SubmitHandler<FieldValues> =async(data) => {
        console.log(data)

        const res = (await changePassword(data )) as TResponse<any>;
        console.log(res);

        if(res?.data?.success){
            dispatch(logout());
            navigate('/login');
        }
    }

    return (
        <Row justify="center" align="middle" style={{ height: "100vh" }}>
        <PHForm onSubmit={onSubmit} >

          <PHinput type="text" name="oldPassword" label="Old Password:"></PHinput>
  
          <PHinput type="text" name="newPassword" label="New Password"></PHinput>
  
          <Button htmlType="submit">Login</Button>
        </PHForm>
      </Row>
    )
};

export default ChangePassword;