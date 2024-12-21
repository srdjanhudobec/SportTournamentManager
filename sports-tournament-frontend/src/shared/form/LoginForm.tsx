import { Fragment, InputHTMLAttributes, useState } from "react";
import styled from "styled-components";
import Form from "./Form";
import { UserLogin } from "../../interfaces/User";
import { login as loginAction } from "../../data/UserActions";
import { useAuth } from "../../contexts/AuthContext"; // Import useAuth from context

type LoginFormProps = {
  schema: Array<{
    rest: InputHTMLAttributes<HTMLInputElement | HTMLSelectElement>;
    label: string;
  }>;
  handleCancel: () => void;
  handleSubmitForm: (user: UserLogin) => void;
};

export const StyledForm = styled.form`
  background-color: #040404;
  color: #f2f1f2;
`;

const LoginForm = ({
  schema,
  handleCancel,
  handleSubmitForm,
}: LoginFormProps) => {
  const [error, setError] = useState<string>("");
  const { login } = useAuth(); 

  const handleSubmit = async (value: any) => {
    const postData: UserLogin = {
      ...value,
    };

    try {
      const response = await loginAction(postData); 
      localStorage.setItem("token", response); 
      login(postData, response);
      handleSubmitForm(postData); 
      handleCancel();
    } catch (err) {
      setError("Login failed. Please try again."); 
      console.error(err);
    }
  };

  return (
    <Fragment key={"Login form"}>
      {error.length > 0 ? <p>{error}</p> : <Form schema={schema} onFormSubmit={handleSubmit} onCancel={handleCancel} />}
    </Fragment>
  );
};

export default LoginForm;
