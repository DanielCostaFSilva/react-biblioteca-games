import Game from "./components/Game"
import NewGameForm from "./components/NewGameFrom"
import useGameCollection from "./hooks/useGameCollection"


function App() {
  const { games, addGame, removerGame } = useGameCollection()

  return (
    <div className="app">
      <h1>Biblioteca de jogos</h1>
      <NewGameForm addGame={addGame} />
      <div className="games">
        {games.length > 0
          ? games.map((game) => (
            <Game
              key={game.id}
              title={game.title}
              cover={game.cover}
              onRemove={() => removerGame(game.id)}
            />))
          : (
            <h2 style={{margin: "4rem auto"}}>Parece que não tem nenhum jogo cadastrado. Tente cadastra um jogo</h2>
          )}
      </div>
    </div>
  )
}

export default App
