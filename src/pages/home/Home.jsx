import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
import TablaInformacion from "../../components/tablaInfo/TablaInformacion";
import TablaAtencion from "../../components/tablaAtencion/TablaAtencion";
import TablaOrientacion from "../../components/tablaOrientacion/TablaOrientacion";
import TablaAuxilios from "../../components/tablaAuxilios/TablaAuxilios";
import TablaVolunt from "../../components/tablaVolunt/TablaVolunt";
import TablaSobrevivio from "../../components/tablaSobrevivio/TablaSobrevivio";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { CLEAR_DATA, getDataDb } from "../../redux/actions";

const Home = () => {
  const dispatch = useDispatch()
  useEffect(() => {
/*     dispatch(getDataDb())
    return () => dispatch({
      type: CLEAR_DATA
    }) */
  },[]) 

  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
{/*         <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div> */}
        <div className="charts">
          <TablaAtencion/>
          <TablaOrientacion/>
          <TablaSobrevivio />
        </div>
        <div className="charts">
          <TablaInformacion/>
          <TablaAuxilios/>
          <TablaVolunt/>
        </div>
        <div className="listContainer">
{/*           <div className="listTitle">Lista de encuestados</div>
          <Table /> */} 
        </div>
      </div>
    </div>
  );
};

export default Home;
