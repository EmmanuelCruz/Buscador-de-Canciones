import { createContext, useState } from "react"
import axios from "axios"

const LetrasContext = createContext()

const LetrasProvider = ({ children }) => {

  const [alerta, setAlerta] = useState('')
  const [letra, setLetra] = useState('')
  const [cargando, setCargando] = useState(false)

  const buscaLetra = async (busqueda) => {
    setCargando(true)
    try {
      const { artista, cancion } = busqueda
      const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`
      const respuesta = await fetch(url)
      const resultado = await respuesta.json()
      const letra = resultado.lyrics

      setLetra(letra)
      setAlerta('')
    } catch (error) {
      console.error("Error", error)
      setAlerta('Canción no encontrada')
    }
    setCargando(false)
  }

  return (
    <LetrasContext.Provider
      value={{
        alerta,
        setAlerta,
        buscaLetra,
        letra,
        cargando
      }}
    >
      {children}
    </LetrasContext.Provider> 
  )
}

export {
  LetrasProvider
}

export default LetrasContext