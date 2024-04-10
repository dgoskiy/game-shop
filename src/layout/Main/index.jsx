import React from 'react'
import Games from '../../components/Games'
import Sidebar from '../../components/Sidebar'
import Sort from '../../components/Sort'
import { Link } from 'react-router-dom'
import s from './index.module.css'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import qs from "qs"
import { setFilters } from '../../redux/store/filterSlice'
import { useNavigate } from 'react-router-dom'
import { fetchGame, selectGameData } from '../../redux/store/gameSlice'



function Main() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter)
  const cart = useSelector((state) => state.cart)
  const { items, status } = useSelector(selectGameData);
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


  const getGame = () => {
    dispatch(fetchGame(filter))
  }
  React.useEffect(() => {
    if (!isSearch.current) {
      getGame()
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
        <div>{}</div>
        <div>
          <Link to="/cart" className={s.cart}>
            <div>{cart.items.reduce((ac, obj) => ac + obj.count, 0)}</div>
            <div>|</div>
            <div>{cart.items.reduce((ac, obj) => ac + obj.cost * obj.count, 0)}</div>
          </Link>
          <Sort />
        </div>
      </div>
    </div>
  );
}

export default Main;
