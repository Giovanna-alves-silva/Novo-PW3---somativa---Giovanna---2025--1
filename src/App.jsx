import './App.css'

import BookCard from './components/BookCard'

import capa_livro from './assets/cavernas_aco.jpg'

function App() {

  return (
    <>
      <div>

          <h1>PW3 - WEBAPP - LIVRARIA</h1>

          <BookCard
            titulo='Carvenas de aço' 
            autor= 'Isaac Asmov'
            imagem= {capa_livro}/> 

          {/* <BookCard
            titulo='O quarto de despejo' 
            autor= 'Maria Carolina de Jesus'
            imagem= 'IMAGEM'/>

          <BookCard
            titulo='Iracema' 
            autor= 'José de Alencar'
            imagem= 'IMAGEM'/>

          <BookCard
            titulo='O Guarani' 
            autor= 'José de Alencar'
            imagem= 'IMAGEM'/> */}


      </div>
    </>
  )
}

export default App
