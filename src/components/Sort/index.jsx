import React from 'react'
import s from './index.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { sortByAmount, selectGplat } from '../../redux/store/filterSlice'
export const list = [
    { name: "Содержание" },
    { name: "По алфавиту", sortProperty: "name", order: "asc" },
    { name: "Цена ↑", sortProperty: "cost", order: "asc" },
    { name: "Цена ↓", sortProperty: "cost", order: "desc" },
]
export const Sort = () => {
    const { gcomp, id } = useSelector(state => state.filter)
    const sort = useSelector((state) => state.filter)
    const dispatch = useDispatch()
    const [open, setOpen] = React.useState(false)
    const listPlatform = {
        PlayStation: ["PS4", "PS5"],
        Xbox: ["Xbox One", "Xbox X | S", "PC"],
    }

    return (
        <div className={`${s.sort} sticky-top`}>
            <div className='d-flex'>
                <button className={s.btn} onClick={() => {
                    setOpen(!open)
                    // console.log(sort)
                }}>{list[id].name} </button>
            </div>
            {open && (<div className="container_sort">
                {list.map((item, i) => i !== 0 && (
                    <li key={i} onClick={() => {
                        setOpen(!open);
                        dispatch(sortByAmount({ id: i, sortProperty: item.sortProperty, order: item.order }))
                    }} className={`${s.item} dropdown-item`}>{item.name}</li>
                ))}
            </div>)}


            {/* {listPlatform[gcomp].map((item, i) => (<div key={i} className={`${s.plat_item} ${item === gplat ? s.active : ""}`} onClick={() => { */}
            {listPlatform[gcomp].map((item, i) => (<div key={i} className={`${s.plat_item} `} onClick={() => {
                dispatch(selectGplat(item))
            }}>{item}</div>))}
        </div >
    )
}
export default Sort