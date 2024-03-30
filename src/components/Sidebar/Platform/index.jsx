import React from 'react'
import s from './index.module.css'

const Console = ({ data, gameCompany, onClickPlatform }) => {
    const unique = Array.from(new Set(data.filter(obj => obj.gameCompany === gameCompany).flatMap(obj => obj.gamePlatform)));
    return (
        <nav className={s.platform}>
            {unique.map((item, i) => <nav className={s.platform_item} onClick={() => onClickPlatform(item)} key={i}>{item}</nav>)}
        </nav>
    )
}

export default Console