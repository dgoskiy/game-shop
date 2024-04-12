import React from 'react'
import s from './index.module.css'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
const FullGame = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [game, setGame] = React.useState('')
  React.useEffect(() => {
    async function fetchGame() {
      try {
        const { data } = await axios.get(`https://65eb6f1043ce16418933d917.mockapi.io/api/game_shop/game/${id}`)
        setGame(data)
      } catch (error) {
        alert("Ошибка при получении пиццы")
        navigate("/")
      }
    }
    fetchGame()
  }, [])

  return (
    <div className={s.full_game}>
      <div className={s.game_img}
        style={{ backgroundImage: `url(${game.img})` }}>
      </div>
      <div className={s.name_game}></div>
      <div className={s.cost_game}>{game.cost}</div>
      <div className={s.dd_game}></div>
    </div>
  )
}

export default FullGame