import React from 'react'
import s from './index.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { sortByAmount } from '../../redux/store/sortSlice'

export const Sort = ({ onClickSort }) => {
    // const {} = useSelector((state) => state.sort)
    const dispatch = useDispatch()
    const list = [
        { name: "Содержание" },
        { name: "По алфавиту", sortProperty: "name", order: "asc" },
        { name: "Цена ↑", sortProperty: "cost", order: "asc" },
        { name: "Цена ↓", sortProperty: "cost", order: "desc" },
    ]

    return (
        <div className={`${s.sort} sticky-top`}>
            <button onClick={() => {
                dispatch(sortByAmount({ id: 1, sortProperty: 2 }))
            }}>123</button>
        </div >
    )
}
export default Sort