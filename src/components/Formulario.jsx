import { useState } from "react"
import useLetras from "../hooks/useLetras"

const Formulario = () => {

  const { setAlerta, buscaLetra } = useLetras()

  const [busqueda, setBusqueda] = useState({
    artista: '',
    cancion: ''
  })

  const handleSubmit = e => {
    e.preventDefault()

    if(Object.values(busqueda).includes('')){
      setAlerta('Coloca nombre de artista y canción')
      return
    }
    buscaLetra(busqueda)
  }

  return (
    <form onSubmit={handleSubmit} action="">
      <legend>Busca por artistas y canción</legend>

      <div className='form-grid'>
        <div>
          <label htmlFor="artista">Artista</label>
          <input 
            type="text" 
            name='artista' 
            id="artista"
            placeholder='Nombre de artista'
            value={busqueda.artista}
            onChange={e => setBusqueda({
              ...busqueda,
              [e.target.name]: e.target.value
            })}
          />
        </div>

        <div>
          <label htmlFor="cancion">Canción</label>
          <input 
            type="text" 
            name='cancion' 
            id="cancion"
            placeholder='Nombre de canción'
            value={busqueda.cancion}
            onChange={e => setBusqueda({
              ...busqueda,
              [e.target.name]: e.target.value
            })}
          />
        </div>

        <input type="submit" value='Buscar' />
      </div>
    </form>
  )
}

export default Formulario
