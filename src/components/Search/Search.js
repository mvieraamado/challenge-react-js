import { HeroContext } from "../../context/HeroContext/HeroContext";
import axios from "axios";
import { Formik, Form, useField } from "formik";
import { Button } from "react-bootstrap";
import * as Yup from "yup";
import { useContext } from "react";

const MyTextInput = ({ label, ...props }) => {
  const [field] = useField(props);

  return (
    <>
    <label className="form__label" htmlFor={props.id || props.name}>
      {label}
    </label>
    <input {...field} {...props} />
    </>
  );
};

export const Search = ({ searchResponse, Seterror, dataResponse }) => {
  const { setIsLoading } = useContext(HeroContext);
  
    return (
      <Formik
        initialValues={{
          hero: "",
        }}
        validationSchema={Yup.object({
          hero: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("Required"),
        })}
        onSubmit={ (values)=>{ 
          axios.get(`https://superheroapi.com/api.php/2145473855595129/search/${values.hero}`)
          .then( (response)=> {
            searchResponse (response.data)
            setIsLoading(true)
            console.log(response);
          })
          .catch( (error) => {
            if(dataResponse === undefined ||!dataResponse){
              Seterror(true)
              alert(error);
            }else{
              Seterror(false)
            }setIsLoading(false)
          })
        }}
      >
        <Form className="p-2 text-center">
          <MyTextInput
            className="col-7 border-1 rounded p-lg-2"
            name="hero"
            type="text"
            placeholder="Example: batman"
          />
          <Button variant="primary" className="m-2 p-1 p-lg-2 mt-lg-1" type="submit">Search</Button>
        </Form>
      </Formik>
    );
  };
  