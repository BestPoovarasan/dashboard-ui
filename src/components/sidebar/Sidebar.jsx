import "./sidebar.css";
import { MDBBtn } from "mdb-react-ui-kit";
import { NavLink,} from "react-router-dom";


const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <NavLink to="/"><MDBBtn outline className="sidebtn mx-2 d-flex align-items-center" color="secondary">
        <span className="material-symbols-outlined ">grid_view</span>Dashboard
        </MDBBtn>
        </NavLink>
        <NavLink to="/users"><MDBBtn outline className="sidebtn mx-2 d-flex align-items-center" color="secondary">
         <span class="material-symbols-outlined">group</span>Users
        </MDBBtn>
        </NavLink>
        <NavLink to="/adduser"><MDBBtn outline className="sidebtn mx-2 d-flex align-items-center" color="secondary">
        <span class="material-symbols-outlined">person_add</span>Create
        </MDBBtn>
        </NavLink>
        <NavLink to="/users"><MDBBtn outline className="sidebtn mx-2 d-flex align-items-center" color="secondary">
        <span class="material-symbols-outlined">bar_chart</span>Status
        </MDBBtn>
        </NavLink>
        <NavLink><MDBBtn outline className="sidebtn mx-2 d-flex align-items-center" color="secondary">
        <span class="material-symbols-outlined">mark_email_unread</span>Notifications
        </MDBBtn>
        </NavLink>
        <NavLink><MDBBtn outline className="sidebtn mx-2 d-flex align-items-center" color="secondary">
        <span class="material-symbols-outlined">settings_system_daydream</span>System
        </MDBBtn>
        </NavLink>
        <NavLink><MDBBtn outline className="sidebtn mx-2 d-flex align-items-center" color="secondary">
        <span class="material-symbols-outlined">psychology</span>Logs
        </MDBBtn>
        </NavLink>
        <NavLink><MDBBtn outline className="sidebtn mx-2 d-flex align-items-center" color="secondary">
        <span class="material-symbols-outlined">settings_suggest</span>Settings
        </MDBBtn>
        </NavLink>
      </div>
    </>
  );
};

export default Sidebar;
