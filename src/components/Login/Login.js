import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import axios from "axios";
import './login.css';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <div className="mb-3">
        <label htmlFor={props.id || props.name}>{label}</label>
      </div>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const Login = () => {
  if (localStorage.getItem("token")) {
    window.location.assign("/");
  }
  return (
    <Container fluid>
      <Row>
        <Col sm={6} lg={5} className="bgForm">
          <span className="titleSuperhero">Superhero</span>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={Yup.object({
              password: Yup.string().required("Required"),
              email: Yup.string()
                .email("Invalid email address")
                .required("Required"),
            })}
            onSubmit={(values) => {
              axios
                .post("http://challenge-react.alkemy.org", values)
                .then((res) => {
                  console.log(res.data.token);
                  localStorage.setItem("token", res.data.token);
                  window.location.assign("/login");
                })
                .catch((err) => {
                  alert('Invalid email or password. Try again!')
                  console.log(err);
                });
            }}
          >
            <Form>
              <div className="mb-3 formFields">
                <MyTextInput className="border-0 rounded p-1"
                  label="Email Address"
                  name="email"
                  type="email"
                  placeholder="challenge@alkemy.org"
                />
              </div>
              <div className="mb-3 formFields">
                <MyTextInput className="border-0 rounded p-1"
                  label="Password"
                  name="password"
                  type="password"
                  placeholder="react"
                />
              </div>
              <Button variant="primary" className="m-5" type="submit">Log in</Button>
            </Form>
          </Formik>
          <div className="d-flex justify-content-center">
            <a href="https://www.linkedin.com/in/mariam-viera-amado/" target={"_blank"} rel="noopener noreferrer" className="text-decoration-none">Developed by Mariam Viera Amado</a>
          </div>
        </Col>
        <Col sm={6} lg={7} className="bg"/>
      </Row>
    </Container>  
  );
};
export default Login;