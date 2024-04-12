import React from 'react'
import s from './index.module.css'
import { Link } from 'react-router-dom'
import { /* useSelector, */ useDispatch } from 'react-redux'
import { selectGcomp, /* selectGplat */ } from '../../redux/store/slices/filterSlice'


const Sidebar = () => {
    // const gcomp = useSelector(state => state.filter.gcomp)
    const dispatch = useDispatch()
    // const unique = [...new Set(data.map(obj => obj.gameCompany))]
    const unique = ['PlayStation', 'Xbox']
    return (
        <div className={`${s.sidebar} custom_scroll sticky-top`}>
            <Link className={s.head} to="/">
                <svg xmlns="http://www.w3.org/2000/svg" width="7em" height="7em" viewBox="0 0 48 48"><g fill="none"><path stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M19 30L19 33C19 36.866 15.866 40 12 40V40C8.13401 40 5 36.866 5 33L5 19"></path><path stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M29 30L29 33C29 36.866 32.134 40 36 40V40C39.866 40 43 36.866 43 33L43 19"></path><rect width={38} height={22} x={5} y={8} fill="#2f88ff" stroke="white" strokeWidth={2.2} rx={11}></rect><path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M21 19H13"></path><path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M17 15V23"></path><rect width={4} height={4} x={32} y={15} fill="#fff" rx={2}></rect><rect width={4} height={4} x={28} y={20} fill="#fff" rx={2}></rect></g></svg>
                <div className={s.head_text}>
                    Играй и побеждай
                </div>
            </Link>
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