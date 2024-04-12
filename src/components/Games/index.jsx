import React from 'react'
import s from './index.module.css';
import ToggleSwitch from './ToggleSwitch';
import { useDispatch, useSelector } from 'react-redux'
import { setLimitView, setSearch } from '../../redux/store/slices/filterSlice'
import { selectGameData } from '../../redux/store/slices/gameSlice'
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
const Games = (props) => {
  const dispatch = useDispatch()
  const { status } = useSelector(selectGameData);

  const { ref, inView } = useInView({
    treshold: 0.5,
  })
  React.useEffect(() => {
    inView && dispatch(setLimitView(1))
  }, [inView])
  return (
    <div className='w-100'>

      <div className={s.games_container}>
        {props.data.map(item => (
          <div ref={ref} className={s.games_item} key={item.id}>
            <Link  to={`game/${item.id}`} className={s.top}>
              <div className={s.games_item_img}
                style={{ backgroundImage: `url(${item.img})` }}>
              </div>
              <div className={s.body}>
                <div className={s.forplay}>{item.forplay}</div>
                <div className={s.name}>{item.name}</div>
              </div>
            </Link>





              <ToggleSwitch data={item} />
          </div>
        ))}
      </div>
      {/* <div className={status === "loading" ? s.loading : ""}></div> */}
    </div>
  )
}

export default Games