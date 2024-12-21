
import { Fragment, InputHTMLAttributes, useState } from "react";
import styled from "styled-components";
import Form from "./Form";
import { User } from "../../interfaces/User";
import { register } from "../../data/UserActions";

type RegisterFormProps = {
  schema: Array<{
    rest: InputHTMLAttributes<HTMLInputElement | HTMLSelectElement>;
    label: string;
  }>;
  handleCancel: () => void;
  handleSubmitForm: (user: User) => void;
};

export const StyledForm = styled.form`
  background-color: #040404;
  color: #f2f1f2;
`;

const RegisterForm = ({
  schema,
  handleCancel,
  handleSubmitForm,
}: RegisterFormProps) => {
  const [error, setError]=useState("");
  const handleSubmit = async (value: any) => {
    const postData: User = {
      ...value
    };
    const response = await register(postData);
    if('string' === typeof response){
      setError(response);
      return;
    }
    handleSubmitForm(postData);
    handleCancel();
    return response;
  };

  return (
    <Fragment key={'Register form'}>
      {error.length>0?<p>{error}</p>:<Form schema={schema} onFormSubmit={handleSubmit} onCancel={handleCancel} />}
    </Fragment>
  );
};

export default RegisterForm;
