import "./users.css";
import {
  MDBBadge,
  MDBBtn,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
} from "mdb-react-ui-kit";
import Sidebar from "../sidebar/Sidebar";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { config } from "../../config";



export default function Users() {
  const [users, setUser] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get(`${config.api}/users`);
    setUser(response.data);
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`${config.api}/users/${id}`);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="users">
        <Sidebar />

        <MDBTable className="container" align="middle">
          <MDBTableHead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Role</th>
              <th scope="col">Edit</th>
              <th scope="col">Actions</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td>
                  <div className="d-flex align-items-center">
                    <img
                      src="https://img.icons8.com/fluency/256/user-male-circle.png"
                      alt=""
                      style={{ width: "45px", height: "45px" }}
                      className="rounded-circle"
                    />
                    <div className="ms-3">
                      <p className="fw-bold mb-1">{user.name}</p>
                    </div>
                  </div>
                </td>
                <td>
                  <p className="fw-bold mb-0">{user.email}</p>
                </td>
                <td>
                  <MDBBadge color="success" pill>
                    <p className="fw-normal mb-0">{user.role}</p>
                  </MDBBadge>
                </td>
                <td>
                  <Link to ={`/user/edit/${user._id}`}>
                    <MDBBtn outline color="info" rounded size="sm">
                      Edit
                    </MDBBtn>
                  </Link>
                </td>
                <td>
                  <MDBBtn onClick={() => deleteUser(user._id)} outline color="danger" rounded size="sm">
                    Delete
                  </MDBBtn>
                </td>
              </tr>
            ))}
          </MDBTableBody>
        </MDBTable>
      </div>
    </>
  );
}
