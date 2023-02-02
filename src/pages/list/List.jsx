import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datatable from "../../components/datatable/Datatable"
import List from "../../components/table/Table"
import { auth } from "../../firebase"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import Loading from "../../components/Loading/Loading"

const Lista = () => {
  const navigate = useNavigate()

  function validate(){
    if(!auth.currentUser)
      navigate('/')
  }

  useEffect(() => {
    setTimeout(() => {
      validate()
    }, 5000);
  }, []);

  if(!auth.currentUser)
    return <Loading/>
    
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        {/* <Datatable/> */}
        <List />
      </div>
    </div>
  )
}

export default Lista