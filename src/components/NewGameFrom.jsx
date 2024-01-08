import PropTypes from "prop-types";
import { useState } from "react";
import TextInput from "./TextInput";

NewGameForm.propTypes = {
  addGame: PropTypes.func
}

export default function NewGameForm({ addGame }) {
  const [title, setTitle] = useState("")
  const [cover, setCover] = useState("")

  const handleSubimit = (ev) => {
    ev.preventDefault()
    addGame({ title, cover })
    setTitle("")
    setCover("")
  }

  return (
    <form onSubmit={handleSubimit}>
      <TextInput
        id="title"
        label="Título"
        valeu={title}
        onChange={(ev) => setTitle(ev.target.value)}
      />
      <TextInput
        id="cover"
        label="Capa (URL)"
        valeu={cover}
        onChange={(ev) => setCover(ev.target.value)}
      />
      <button>Adicionar</button>
    </form>
  )
}