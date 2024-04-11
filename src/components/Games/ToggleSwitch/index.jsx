import React, { useState } from 'react';
import s from './index.module.css';
import { useDispatch } from 'react-redux'
import { addItem } from '../../../redux/store/slices/cartSlice'


const ToggleSwitch = (props) => {
  const dispatch = useDispatch()
  const [dd, setDD] = useState(false)
  const [disk, setDisk] = useState(0)
  const [digit, setDigit] = useState(0)

  const onClickAdd = () => {
    const item = {
      id: props.data.id,
      name: props.data.name,
      cost: props.data.cost,
      dd: dd,
      img: props.data.img,

    }
    dd ? setDigit(digit + 1) : setDisk(disk + 1)
    dispatch(addItem(item))
  }
  return (
    <div className={s.niz}>
      <div className={s.DD} >
        <div className={`${s.dd_child} ${dd ? "" : s.active}`} onClick={() => setDD(false)}>disk{disk > 0 && ` ${disk}`}</div>
        <div className={`${s.dd_child} ${dd ? s.active : ""}`} onClick={() => setDD(true)}>digit{digit > 0 && ` ${digit}`}</div>
      </div>
      <div className={s.niz_child}>
        <div className={s.cost}>{props.data.cost}</div>
        <button onClick={onClickAdd} className={s.add}>Add</button>
      </div>
    </div>
  );
};

export default ToggleSwitch;