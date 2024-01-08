import { useState } from "react"


function App() {
  const [games, setGames] = useState(()=>{
    const storedGames = localStorage.getItem("obc-game-lib")
    if(!storedGames) return []
    return JSON.parse(storedGames)
  })
  const [titulo, setTitulo] = useState("")
  const [cover, setCover] = useState("")

  const addGame = ({ titulo, cover }) => {
    const id = Math.floor(Math.random() * 100000)
    const game = { id, titulo, cover }
    setGames(state =>{
      const newState = [...state, game]
      localStorage.setItem("obc-game-lib", JSON.stringify(newState))
      return newState
    })
  }

  const removerGame = (id) => {
    setGames(state =>{
      const newState = state.filter(game=> game.id !== id)
      localStorage.setItem("obc-game-lib", JSON.stringify(newState))
      return newState
    })
  }

  const handleSubimit = (ev) => {
    ev.preventDefault()
    addGame({ titulo, cover })
    setTitulo("")
    setCover("")
  }

  return (
    <div className="app">
      <h1>Biblioteca de jogos</h1>
      <form onSubmit={handleSubimit}>
        <div>
          <label htmlFor="title">Título:</label>
          <input
            type="text"
            id="title"
            value={titulo}
            onChange={(ev) => setTitulo(ev.target.value)}
          />
        </div>
        <div>
          <label htmlFor="cover">Capa:</label>
          <input
            type="text"
            id="cover"
            value={cover}
            onChange={(ev) => setCover(ev.target.value)}
          />
        </div>
        <button>Adicionar</button>
      </form>
      <div className="games">
        {games.map((game) => (
          <div key={game.id}>
            <img src={game.cover} alt="Capa do Jogo" />
            <div>
              <h2>{game.titulo}</h2>
              <button onClick={() => removerGame(game.id)}>
                Remover
              </button>
            </div>
          </div>
        ))}

      </div>
    </div>
  )
}

export default App
