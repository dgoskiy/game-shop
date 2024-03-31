import React from 'react'
import s from './index.module.css';
import { useDispatch } from 'react-redux'
import { setLimitView } from '../../redux/store/filterSlice'

import { useInView } from 'react-intersection-observer';
const Games = (props) => {
  const { ref, inView } = useInView({
    treshold: 0.5,
  })
  const dispatch = useDispatch()

  React.useEffect(() => {
    inView && dispatch(setLimitView(10))
  }, [inView])
  return (
    <div className='w-100'>
      <input type="text" />

      <div className={s.games_container}>
        {props.data.map(item => (
          <div ref={ref} className={s.games_item} key={item.id}>
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
    </div>
  )
}

export default Games