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

const Home = () => {
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
          <TablaInformacion/>
        </div>
          <div className="charts">
            <TablaAuxilios/>
            <TablaVolunt/>
          </div>
        <div className="listContainer">
          <div className="listTitle">Lista de encuestados</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;
