import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link, useNavigate } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import MessageIcon from '@mui/icons-material/Message';
import SchoolIcon from '@mui/icons-material/School';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import FlutterDashIcon from '@mui/icons-material/FlutterDash';
import { auth } from "../../firebase";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  const navigate = useNavigate()
  function handleLogout(){
    auth.signOut()
    console.log('logout', auth.currentUser)
    navigate('/')
  }
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Pájaros Caidos</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MENÚ</p>
          <li>
            <Link to='/' style={{ textDecoration: "none" }}>
              <FlutterDashIcon className="icon" />
              <span>Gráficas</span>
            </Link>
          </li>
          <p className="title">OPCIONES</p>
          <Link to="/encuestados" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Encuestados</span>
            </li>
          </Link>
          <Link to="/sugerencias" style={{ textDecoration: "none" }}>
            <li>
              <MessageIcon className="icon" />
              <span>Sugerencias</span>
            </li>
          </Link>
          <p className="title">LISTAS DE MAILS</p>
          <li>
            <SchoolIcon className="icon" />
            <Link to='/auxilios' style={{ textDecoration: "none"}}>
              <span>Curso 1º aux.</span>
            </Link>
          </li>
          <li>
            <SchoolIcon className="icon" />
            <Link to='/voluntariado' style={{ textDecoration: "none"}}>
              <span>Curso volunt.</span>
            </Link>
          </li>
          <p className="title">NEGATIVAS</p>
          <li>
            <WarningAmberIcon className="icon" />
            <Link to='/sobrevivio' style={{ textDecoration: "none" }} >
              <span>El ave no sobrevivió</span>
            </Link>
          </li>
          <li>
            <WarningAmberIcon className="icon" />
            <Link to='/infonoclara' style={{textDecoration: "none"}} >
              <span>Información no fue clara</span>
            </Link>
          </li>
          <li>
            <WarningAmberIcon className="icon" />
            <Link to='/consultanoresuelta' style={{ textDecoration: "none" }} >
              <span>Consulta no resuelta</span>
            </Link>
          </li>
          <li>
            <WarningAmberIcon className="icon" />
            <Link to='/atencion' style={{ textDecoration: "none" }} >
              <span>Mala atención</span>
            </Link>
          </li>
          <p className="title">MODOS DE VISUALIZACIÓN</p> 

          <li>
            <ExitToAppIcon className="icon" />
            <span onClick={handleLogout}>Logout</span>
          </li> 
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
