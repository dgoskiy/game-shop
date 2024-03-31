import React from 'react'
import Games from './components/Games'
import Sidebar from './components/Sidebar'
import Sort from './components/Sort'
import s from './css/App.module.css'
import { useSelector } from 'react-redux'
import axios from 'axios'

function App() {
  const filter = useSelector((state) => state.filter)
  const [items, setItems] = React.useState([]);
  const [platform, setPlatform] = React.useState("")

  React.useEffect(() => {
    axios.get(`https://65eb6f1043ce16418933d917.mockapi.io/api/game_shop/game?sortBy=${filter.sortProperty !== '' ? filter.sortProperty : ""}&order=${filter.order !== '' ? filter.order : ""}${filter.gcomp !== "" ? "&gameCompany=" + filter.gcomp : ""}${filter.gplat.length !== 0 ? "&gamePlatform=" + filter.gplat.join("|") : ""}&page=1&limit=${20}`)
    // axios.get(`https://65eb6f1043ce16418933d917.mockapi.io/api/game_shop/game?sortBy=${filter.sortProperty !== '' ? filter.sortProperty : ""}&order=${filter.order !== '' ? filter.order : ""}${filter.gcomp !== "" ? "&gameCompany=" + filter.gcomp : ""}`)
    // axios.get(`https://65eb6f1043ce16418933d917.mockapi.io/api/game_shop/game?sortBy=${filter.sortProperty !== '' ? filter.sortProperty : ""}&order=${filter.order !== '' ? filter.order : ""}${filter.gcomp !== "" ? "&gameCompany=" + filter.gcomp : ""}${filter.gcomp !== "" ? "&gamePlatform=" + filter.gplat : ""}`)
    // axios.get(`https://65eb6f1043ce16418933d917.mockapi.io/api/game_shop/game?`)
      .then(res => {
        setItems(res.data);

      })
  }, [filter])
  return (
    <div className='d-flex'>
      <Sidebar data={items} setPlatform={setPlatform} />
      <div className={`${s.content_container} custom_scroll d-flex`}>
        <Games data={items} />
        <Sort />
      </div>
    </div>
  );
}

export default App;
