import React from 'react'
import s from './index.module.css'
import { /* useSelector, */ useDispatch } from 'react-redux'
import { selectGcomp, /* selectGplat */ } from '../../redux/store/slices/filterSlice'


const Sidebar = () => {
    // const gcomp = useSelector(state => state.filter.gcomp)
    const dispatch = useDispatch()
    // const unique = [...new Set(data.map(obj => obj.gameCompany))]
    const unique = ['PlayStation', 'Xbox']
    return (
        <div className={`${s.sidebar} custom_scroll sticky-top`}>
            {unique.map((item, i) =>
                <div key={i}>
                    <nav className={`${s.sidebar_item}`} onClick={() => {
                    // <nav className={`${s.sidebar_item} ${gcomp === item ? s.active : ""}`} onClick={() => {
                        dispatch(selectGcomp(item))
                    }}>
                        {item}
                    </nav>
                </div>
            )}
        </div>
    )
}

export default Sidebar