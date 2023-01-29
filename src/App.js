import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext, useEffect } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { useDispatch, useSelector } from "react-redux";
import { getDataDb } from "./redux/actions";
import Loading from "./components/Loading/Loading";
import Sugerencias from "./components/sugerencias/Sugerencias";
import Auxilios from "./components/listasDeMails/Auxilios";
import Volunt from "./components/listasDeMails/Volunt";
//import List from "./components/table/Table";

function App() {
  const { darkMode } = useContext(DarkModeContext);



  const dispatch = useDispatch()
  const { data } = useSelector(state => state)

  useEffect(() => {
    dispatch(getDataDb())
  },[])
  if(data)
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="encuestados">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route>
            <Route path="sugerencias">
              <Route index element={<Sugerencias />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Product" />}
              />
            </Route>
            <Route path="auxilios">
              <Route index element={<Auxilios />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Product" />}
              />
            </Route>
            <Route path="voluntariado">
              <Route index element={<Volunt />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Product" />}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
  else
    return <div><Loading/></div>
}

export default App;
