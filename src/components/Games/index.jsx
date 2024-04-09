import React from 'react'
import s from './index.module.css';
import ToggleSwitch from './ToggleSwitch';
import { useDispatch } from 'react-redux'
import { setLimitView, setSearch } from '../../redux/store/filterSlice'
import debounce from 'lodash.debounce';
import { useInView } from 'react-intersection-observer';
const Games = (props) => {
  const dispatch = useDispatch()
  const { ref, inView } = useInView({
    treshold: 0.5,
  })
  const testDebounce = debounce((event) => {
    dispatch(setSearch(event.target.value))
  }, 1000)
  React.useEffect(() => {
    inView && dispatch(setLimitView(10))
  }, [inView])
  return (
    <div className='w-100'>

      <input onChange={testDebounce} type="text" />
      <div className={s.games_container}>
        {props.data.map(item => (
          <div ref={ref} className={s.games_item} key={item.id}>
            <div className={s.games_item_img}
              style={{ backgroundImage: `url(${item.img})` }}>
            </div>
            <div className={s.body}>
              <div className={s.forplay}>{item.forplay}</div>
              <div className={s.name}>{item.name}</div>
              <ToggleSwitch data={item} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Games