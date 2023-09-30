import { useState } from 'react'
import './App.css'
import Header from "../src/Header/index"
import Footer from "../src/Footer/index"

const paper = "https://cdn-icons-png.flaticon.com/512/2541/2541979.png"
const rock = "https://cdn-icons-png.flaticon.com/512/2206/2206698.png"
const scissors = "https://cdn-icons-png.flaticon.com/512/2088/2088765.png"

function App() {
  const [jogada_usuario, set_jogada_usuario] = useState('jogada_tesoura')
  const [jogada_robo, set_jogada_robo] = useState('jogada_pedra')

  const escolhas_computador = ['jogada_tesoura','jogada_papel','jogada_pedra']
  function sortear_jogada(){
    const numero = Math.floor(Math.random() * escolhas_computador.length)
    set_jogada_robo(escolhas_computador[numero])
  }

  function escolher_jogada(escolha){
    if(escolha == 'papel'){
      set_jogada_usuario('jogada_papel')
    } else if (escolha == 'pedra'){
      set_jogada_usuario('jogada_pedra')
    }else {
      set_jogada_usuario('jogada_tesoura')
    }
    sortear_jogada()
  }

  const [resultado, set_resultado] = useState('Inicie uma partida')
  const [vitorias_usuario, set_vitorias_usuario] = useState(0)
  const [vitorias_robo, set_vitorias_robo] = useState(0)
  const [empates, set_empates] = useState(0) 

  function jogar(){
    if(jogada_usuario == jogada_robo){
      set_resultado('EMPATE')
      set_empates(empates + 1)
    } else if ((jogada_usuario == 'jogada_tesoura' && jogada_robo == 'jogada_pedra') || (jogada_usuario == 'jogada_pedra' && jogada_robo == 'jogada_papel')){
      set_resultado('DERROTA')
      set_vitorias_robo(vitorias_robo + 1)
    }else{
      set_resultado('VITORIA')
      set_vitorias_usuario(vitorias_usuario + 1)
    }
  }

  return (
    <>
      <Header/>
      <h1>Jokenpo</h1>
      <div id="jogo">
        <div id="jogador_usuario">
          <h2>Eu</h2>
          <div id={jogada_usuario} className='jogada_escolhida'>
            <div>
              <button onClick={() => escolher_jogada('tesoura')}> <img src={scissors} alt=""/> </button>
              <button onClick={() => escolher_jogada('pedra')}> <img src={rock} alt=""/> </button>
              <button onClick={() => escolher_jogada('papel')}> <img src={paper} alt=""/> </button>
            </div>
          </div>
          <button id="btn_jogar" onClick={() => jogar()}> Jogar</button>
          <div id="jogador_usuario">
          <h2>Robo</h2>
          <div id={jogada_robo} className='jogada_escolhida'>
            <div>
              <img src={scissors} alt=""/> 
               <img src={rock} alt=""/> 
               <img src={paper} alt=""/> 
            </div>
          </div> 
        </div>
        <div>
          <h1>{resultado}</h1>
          <h2>{vitorias_usuario} x {vitorias_robo}</h2>
          <h2>Empates: {empates}</h2>
        </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default App
