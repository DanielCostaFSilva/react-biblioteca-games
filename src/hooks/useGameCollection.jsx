import { useState } from "react"

export default function useGameCollection() {
    const [games, setGames] = useState(() => {
        const storedGames = localStorage.getItem("obc-game-lib")
        if (!storedGames) return []
        return JSON.parse(storedGames)
    })

    const addGame = ({ titulo, cover }) => {
        const id = Math.floor(Math.random() * 100000)
        const game = { id, titulo, cover }
        setGames(state => {
            const newState = [...state, game]
            localStorage.setItem("obc-game-lib", JSON.stringify(newState))
            return newState
        })
    }

    const removerGame = (id) => {
        setGames(state => {
            const newState = state.filter(game => game.id !== id)
            localStorage.setItem("obc-game-lib", JSON.stringify(newState))
            return newState
        })
    }

    return { games, addGame, removerGame }
}