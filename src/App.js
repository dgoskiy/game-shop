import React from 'react'
import Games from './components/Games'
import Sidebar from './components/Sidebar'
import Sort from './components/Sort'
import s from './css/App.module.css'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import qs from "qs"
import { setFilters } from './redux/store/filterSlice'
import { useNavigate } from 'react-router-dom'


function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter)
  const filt = useSelector((state) => state.filter.filt)
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    if (window.location.search) {
      const params = ((qs.parse(window.location.search.substring(1))))
      const ar = JSON.stringify(params)
      dispatch(
        setFilters(params)
      )

    }
  }, [])


  React.useEffect(() => {
    axios.get(`https://65eb6f1043ce16418933d917.mockapi.io/api/game_shop/game?sortBy=${filter.sortProperty !== '' ? filter.sortProperty : ""}&order=${filter.order !== '' ? filter.order : ""}${filter.gcomp !== "" ? "&gameCompany=" + filter.gcomp : ""}${filter.gplat.length !== 0 ? "&gamePlatform=" + filter.gplat.join("|") : ""}${filter.search !== "" ? "&name=" + filter.search : ""}&page=1&limit=${filter.limitView}`)
      .then(res => {
        setItems(res.data);
      })
  }, [filter])

  React.useEffect(() => {
    const queryString = qs.stringify({
      sortBy: filter.sortProperty,
      order: filter.order,
      gameCompany: filter.gcomp,
      gamePlatform: filter.gplat,
      page: 1,
      limit: filter.limitView
    })
    navigate(`?${queryString}`)
  }, [filt])

  return (
    <div className='d-flex'>
      <Sidebar data={items} />
      <div className={`${s.content_container} custom_scroll d-flex`}>
        <Games data={items} />
        <Sort />
      </div>
    </div>
  );
}

export default App;
