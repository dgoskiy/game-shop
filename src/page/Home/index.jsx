import React from 'react'
import Games from '../../components/Games'
import Sidebar from '../../components/Sidebar'
import Sort from '../../components/Sort'
import { Link } from 'react-router-dom'
import s from './index.module.css'
import { useDispatch, useSelector } from 'react-redux'
import qs from "qs"
import { setFilters } from '../../redux/store/slices/filterSlice'
import { useNavigate } from 'react-router-dom'
import { fetchGame, selectGameData } from '../../redux/store/slices/gameSlice'



function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter)
  const { id, order, gcomp, gplat, page, search, sortBy } = useSelector((state) => state.filter)
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
  }, [id, sortBy, order, gcomp, gplat, page, search])

  React.useEffect(() => {
    if (isMounted.current) {

      const queryString = qs.stringify({
        id: id,
        sortBy: sortBy,
        order: order,
        gameCompany: gcomp,
        gamePlatform: gplat,
      })
      navigate(`?${queryString}`)
    }
    isMounted.current = true
  }, [id, sortBy, order, gcomp, gplat])


  return (
    <div className='d-flex'>
      {/* <Sidebar data={items} /> */}
      <div className={`${s.content_container} custom_scroll d-flex`}>
          <Games data={items} />
        <div>
          <Sort />
        </div>
      </div>
    </div>
  );
}

export default Home;
