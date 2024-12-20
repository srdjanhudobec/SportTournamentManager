import {
    FormHTMLAttributes,
    Fragment,
    InputHTMLAttributes,
    useMemo,
    useState,
  } from "react";
  import TextInput from "../inputs/Input";
  import Button from "../ui/Button";
  import styled from "styled-components";
  
  interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
    schema: Array<{
      rest: InputHTMLAttributes<HTMLInputElement | HTMLSelectElement>;
      label: string;
      selectOptions?: { key: string; value: string }[];
    }>;
    onFormSubmit: (value: any) => {};
    onCancel: () => void;
  }

  const StyledActionsDiv = styled.div`
    display:flex;
    gap:50%;
  `;
  
  export const StyledForm = styled.form`
    background-color: #040404;
    color: #f2f1f2;
  `;
  
  const Form = ({ schema, onFormSubmit, onCancel, ...props }: FormProps) => {
    const { formFieldsValues, errorFields } = useMemo(() => {
      const formFieldsValues = schema.reduce((acc, { rest }) => {
        let { name, value } = rest;
        if (!name) {
          return { ...acc, "": "" };
        }
        if (name === "genres") {
          return { ...acc, [name]: [] };
        }
        if (value) {
          return { ...acc, [name]: value };
        }
        return { ...acc, [name]: "" };
      }, {});
  
      const errorFields = schema.reduce((acc, { rest }) => {
        let { name } = rest;
        if (!name) {
          return { ...acc, "": "" };
        }
        return { ...acc, [name]: "" };
      }, {});
  
      return { formFieldsValues, errorFields };
    }, [schema]);
    const [formFields, setFormFields] = useState(formFieldsValues);
  
    const handleTextInputChange = (
      event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      const { name, value } = event.target;
      setFormFields((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
  
  
   
  
    const handleSubmit = (event: React.FormEvent) => {
      event.preventDefault();
      onFormSubmit(formFields);
      setFormFields(formFieldsValues);
      
    };
  
    const handleCancel = () => {
      setFormFields(formFieldsValues);
      onCancel();
    };
  
    const formInputs: Record<
      string,
      (
        props: InputHTMLAttributes<
          HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >,
        label: string,
        options?: Array<any>
      ) => JSX.Element
    > = {
      text: (props: InputHTMLAttributes<HTMLInputElement>, label) => (
        <TextInput
          {...props}
          key={props.name}
          label={label}
          //@ts-ignore
          value={formFields[props.name]}
          
          onChange={handleTextInputChange}
        />
      ),
      password: (props: InputHTMLAttributes<HTMLInputElement>, label) => (
        <TextInput
          {...props}
          key={props.name}
          label={label}
          //@ts-ignore
          value={formFields[props.name]
        
          }
          
          onChange={handleTextInputChange}
        />
      )
    };
  
    return (
      <StyledForm {...props} onSubmit={handleSubmit}>
        {schema.map(({ rest, selectOptions, label }, idx) => {
          if (!rest.type) {
            return <Fragment key={idx}></Fragment>;
          }
          const generateInput = formInputs[rest.type];
          if (rest.type === "select" || rest.type === "multiselect") {
            return generateInput(rest, label, selectOptions);
          }          
          return generateInput(rest, label);
        })}
        <StyledActionsDiv>
          <Button
            type="button"
            onClick={handleCancel}
          >
            Cancel
          </Button>
          <Button type="submit">
                Save
          </Button>
        </StyledActionsDiv>
      </StyledForm>
    );
  };
  export default Form;
  