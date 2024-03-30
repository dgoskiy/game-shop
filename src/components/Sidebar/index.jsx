import React from 'react'
import Platform from './Platform'
import s from './index.module.css'

const Sidebar = ({ data, setPlatform }) => {
    const unique = [...new Set(data.map(obj => obj.gameCompany))]
    return (
        <div className={`${s.sidebar} custom_scroll sticky-top`}>
            {unique.map((item, i) =>
                <div key={i}>
                    <nav className={s.sidebar_item}>
                        {item}
                    </nav>
                    <Platform data={data} gameCompany={item} onClickPlatform={(platform) => setPlatform(platform)} />
                </div>
            )}
        </div>
    )
}

export default Sidebar