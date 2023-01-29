import "./tablaAuxilios.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import { useDispatch, useSelector } from "react-redux";
import 'chart.js/auto';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Bar, Pie } from "react-chartjs-2";
import { useEffect } from "react";
import { getDataDb } from "../../redux/actions";
import { useState } from "react";


const TablaAuxilios = () => {
  let dataDb = useSelector(state => state.data)
  const dispatch = useDispatch()
  const [datos, setDatos] = useState('')

  let array = [0, 0, 0]

function a(dataDb, setDatos) {
  dataDb.map(r => {
    console.log('asdfasdfasdf')
  if(r.auxilios === 'si')
    array[0]=array[0]+1
  if(r.auxilios === 'no')
    array[1]=array[1]+1
  if(r.auxilios === 'Tal vez')
    array[2]=array[2]+1  
  })
  
  setDatos( {
    labels: [`Si: ${array[0]}`, `No: ${array[1]}`, `Tal vez: ${array[2]}`],
    datasets: [
      {
        label: '# de votos',
        backgroundColor: [
          'rgba(0, 255, 0, 0.5)',
          'rgba(0, 0, 255, 0.5)',
          'rgba(255, 0, 0, 0.5)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)'
        ],
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,0,255,2)',
        hoverBorderColor: '#FF0000',
        data: array
      },
    ],
  })
}

useEffect(() => {a(dataDb, setDatos)}, [])
   

 

    const opciones= {
      maintainAspectRatio: false,
      responsive: true
    }
 // if(datos)
  return(
    <div className="featured">
      Curso de primeros auxilios en aves.
      {dataDb && datos && <Pie data={datos}  />  }
    </div>
  )
 //return(<div>nada</div>)

};

export default TablaAuxilios;
