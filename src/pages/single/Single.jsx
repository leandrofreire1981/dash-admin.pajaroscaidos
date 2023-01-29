import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import TablaSingle from "../../components/tablaSingle/TablaSingle";
import { useEffect } from "react";

const labels = [
  "Ave rescatada",
  "Como fue la experiencia",
  "Sobrevivió el ave",
  "Información clara",
  "Resolvió la consulta",
  "Curso de 1º aux.",
  "Curso de volunt."
]

const labels2 = ["Sugerencias"]

const Single = () => {
  const params =useParams()
  
  const { data } = useSelector(state => state)
  let user = data.find(r => r.id===params.userId)
  let sugerencia = {rescate: user.sugerencias}
  console.log('single: ', user)

  useEffect(() => {

  }, [])
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
           {/*  <div className="editButton">Edit</div> */}
            <h1 className="title">Información individual</h1>
            <div className="item">
{/*               <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt=""
                className="itemImg"
              /> */}
              <div className="details">
                <h1 className="itemTitle">{user?.full_name}</h1>
                <div className="detailItem">
                  <span className="itemKey">E-mail:</span>
                  <span className="itemValue">{user.email}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Teléfono:</span>
                  <span className="itemValue">{user.celular}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Red social:</span>
                  <span className="itemValue">
                    <a href={user.user}>{user.user}</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
{/*           <div className="right">
            <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
          </div> */}
        </div>
        <div className="bottom">
        <h1 className="title">Respuestas del usuario</h1>
         {/*  <List/> */}
         <TablaSingle data={user} labels={labels} /> 
         <br></br>
         <TablaSingle data={sugerencia} labels={labels2} />
         
        </div>
      </div>
    </div>
  );
};

export default Single;
