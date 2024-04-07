import React, { useState } from 'react';
import s from './index.module.css';

const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <div className={`${s.toggle_switch} ${isOn ? s.on : s.off}`} onClick={toggleSwitch}>
      <div className={s.toggle_switch_inner} />
    </div>
  );
};

export default ToggleSwitch;