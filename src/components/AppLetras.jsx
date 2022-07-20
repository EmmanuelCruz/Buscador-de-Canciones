import React from 'react'
import Formulario from './Formulario'
import useLetras from '../hooks/useLetras'
import Alerta from './Alerta'
import Letra from './Letra'

const AppLetras = () => {
  const { alerta, letra, cargando } = useLetras()

  return (
    <>
      <header>Búsqueda de Letra de Canciones</header>

      <Formulario />

      <main>
        {alerta ? <Alerta>{alerta}</Alerta> : letra ? <Letra /> : cargando ? 'Cargando' : <p className='text-center'>Busca letras de tus artistas</p>}
      </main>
    </>
  )
}

export default AppLetras
