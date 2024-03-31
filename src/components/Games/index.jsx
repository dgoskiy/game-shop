import React, { useEffect } from 'react'
import s from './index.module.css';
import { /* useSelector, */ useDispatch } from 'react-redux'
import { setLimitView } from '../../redux/store/filterSlice'

import { useInView } from 'react-intersection-observer';
const Games = (props) => {
  const { ref, inView } = useInView({
    treshold: 0,
  })
  const dispatch = useDispatch()
  dispatch(setLimitView(inView))
  return (
    <div>
      <div className={s.games_container}>
        {props.data.map(item => (
          <div className={s.games_item} key={item.id}>
            <div className={s.games_item_img}
              style={{ backgroundImage: `url(${item.img})` }}>
            </div>
            <div className={s.body}>
              <div className={s.forplay}>{item.forplay}</div>
              <div className={s.name}>{item.name}</div>
              <div className={s.cost}>{item.cost} ₴</div>
            </div>
          </div>
        ))}
      </div>
      <div ref={ref} className={s.loading}>Загрузка...</div>
    </div>
  )
}

export default Games