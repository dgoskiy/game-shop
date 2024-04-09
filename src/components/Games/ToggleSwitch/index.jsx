import React, { useState } from 'react';
import s from './index.module.css';

const ToggleSwitch = (props) => {
  const [dd, setDD] = useState(false)

  return (
    <div>
      <div className={s.DD} >
        <div className={`${dd ? "" : s.active}`} onClick={() => setDD(false)}>disk</div>
        <div className={`${dd ? s.active : ""}`} onClick={() => setDD(true)}>digit</div>
      </div>
      <div className={s.niz_child}>
        <div className={s.cost}>{props.data.cost} ₴</div>
        <button onClick={()=>{console.log(2)}} className={s.add}>Add</button>
      </div>
    </div>
  );
};

export default ToggleSwitch;