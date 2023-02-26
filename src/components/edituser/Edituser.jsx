import "./edituser.css";
import { config } from "../../config";
import { MDBInput, MDBCol, MDBRow, MDBBtn } from "mdb-react-ui-kit";
import Sidebar from "../sidebar/Sidebar";
import axios from "axios";
import { useFormik } from 'formik';
import { useNavigate, useParams,} from "react-router-dom";
import { useEffect } from "react";

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
  const { id } = useParams();
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
     onSubmit: async (values) => {
      try {
         await axios.patch(`${config.api}/users/${id}`, values);
        navigate("/users");
      } catch (error) {
        console.log(error);
      }
     },
   });
   
const getUserById = async () => {
  const response = await axios.get(`${config.api}/users/${id}`);
  formik.setValues(response.data)}

  useEffect(() => {
    getUserById();
  }, []);


  return (
    <>
      <div className="edituser">
        <Sidebar />
        <div className="eduser">
          <h2 className="p-3">Edit User</h2>
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
            <MDBBtn type="submit" className="mb-4" block disabled={!formik.isValid}>
              + Update user
            </MDBBtn>
          </form>
        </div>
      </div>
    </>
  );
}
