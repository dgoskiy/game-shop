import React, { useState } from 'react';
import s from './index.module.css';

const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);
  const toggleSwitch = () => {
    setIsOn(!isOn);
  };
  const [dd, setDD] = useState(false)

  return (
    <div >
      <div className={`${dd ? "" : s.active}`} onClick={() => setDD(false)}>disk</div>
      <div className={`${dd ? s.active : ""}`} onClick={() => setDD(true)}>digit</div>
    </div>
    // <div className={`${s.toggle_switch} ${isOn ? s.on : s.off}`} onClick={toggleSwitch}>
    // <div className={s.toggle_switch_inner} />
    // </div>
  );
};

export default ToggleSwitch;