import "./adduser.css";
import { MDBInput, MDBCol, MDBRow, MDBBtn } from "mdb-react-ui-kit";
import Sidebar from "../sidebar/Sidebar";
import axios from "axios";
import { useFormik } from 'formik';
import { useNavigate } from "react-router-dom";
import { config } from "../../config";


// <----------formik validate---------->
const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = "Required";
  } else if (values.name.length <= 3) {
    errors.name = "Must be 4 characters or greater";
  }
  if (!values.role) {
    errors.role = "Required";
  } else if (values.role.length <=4 ) {
    errors.role = "Enter Role";
  }

  if (!values.email) {
    errors.email = "";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid Email address";
  }
  return errors;
};
export default function Adduser() {
  const navigate = useNavigate();
   //<----------- Formik values------------>
  let formik = useFormik({
     initialValues: {
      name:"",
      email: "",
      role: "",
     },
     validate,
      // <-------------Axios-------------->
     onSubmit: async values => {
      try {
         await axios.post(`${config.api}/users`, values);
        //  alert(add.data.message);
        navigate("/users");
      } catch (error) {
        console.log(error);
      }
     },
   });
  
  return (
    <>
      <div className="adduser">
        <Sidebar />
        <div className="aduser">
          <h1 className="p-3">Create User</h1>
          <form onSubmit={formik.handleSubmit}>
            <MDBRow className="mb-4">
              <MDBCol>
                <MDBInput
                  id="form3Example1"
                  label="Name"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                />{formik.errors.name ? <div style={{ color: "red" }}>{formik.errors.name}</div> : null}
              </MDBCol>
            </MDBRow>
            <MDBInput
              className="mb-4"
              type="email"
              id="form3Example3"
              label="Email address"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />{formik.errors.email ? <div style={{ color: "red" }}>{formik.errors.email}</div> : null}
            <MDBInput
              className="mb-4"
              type="text"
              id="form3Example4"
              label="Role"
              name="role"
              value={formik.values.role}
              onChange={formik.handleChange}
            />{formik.errors.role ? <div style={{ color: "red" }}>{formik.errors.role}</div> : null}
            <MDBBtn type="submit" className="mb-4" block>
              + Add user
            </MDBBtn>
          </form>
        </div>
      </div>
    </>
  );
}
