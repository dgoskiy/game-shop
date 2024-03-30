import React from 'react'
import s from './index.module.css';

const Games = (props) => {
  return (
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
  )
}

export default Games