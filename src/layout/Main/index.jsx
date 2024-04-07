import React from 'react'
import Games from '../../components/Games'
import Sidebar from '../../components/Sidebar'
import Sort from '../../components/Sort'
import s from './index.module.css'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import qs from "qs"
import { setFilters } from '../../redux/store/filterSlice'
import { useNavigate } from 'react-router-dom'


function Main() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter)
  const [items, setItems] = React.useState([])
  const isSearch = React.useRef(false)
  const isMounted = React.useRef(false)

  React.useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1))
      dispatch(setFilters({
        ...params
      }))
      isSearch.current = true
    }
  }, [])


  const fetchFiltr = () => {
    axios.get(`https://65eb6f1043ce16418933d917.mockapi.io/api/game_shop/game?sortBy=${filter.sortProperty !== '' ? filter.sortProperty : ""}&order=${filter.order !== '' ? filter.order : ""}${filter.gcomp !== "" ? "&gameCompany=" + filter.gcomp : ""}${filter.gplat.length !== 0 ? "&gamePlatform=" + filter.gplat.join("|") : ""}${filter.search !== "" ? "&name=" + filter.search : ""}&page=1&limit=${filter.limitView}`)
      .then(res => {
        setItems(res.data);
      })
  }
  React.useEffect(() => {
    window.scrollTo(0, 0)
    if (!isSearch.current) {
      fetchFiltr()
    }
    isSearch.current = false
  }, [filter.id, filter.sortProperty, filter.order, filter.gcomp, filter.gplat, filter.limitView, filter.search])

  React.useEffect(() => {
    if (isMounted.current) {

      const queryString = qs.stringify({
        id: filter.id,
        sortBy: filter.sortProperty,
        order: filter.order,
        gameCompany: filter.gcomp,
        gamePlatform: filter.gplat,
      })
      navigate(`?${queryString}`)
    }
    isMounted.current = true
  }, [filter.id, filter.sortBy, filter.order, filter.gcomp, filter.gplat])

  return (
    <div className='d-flex'>
      <Sidebar data={items} />
      <div className={`${s.content_container} custom_scroll d-flex`}>
        <Games data={items} />
        <div>
          <a className={s.cart} href="/cart" >
            <div>{1}</div>
            <div>|</div>
            <div>{2}</div>
          </a>
          <Sort />
        </div>
      </div>
    </div>
  );
}

export default Main;
