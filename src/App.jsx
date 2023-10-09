import './App.css'
import Player from './Player/Player';
import { useEffect, useRef, useState } from 'react'
import { dadosMusicas } from './Player/audios';
import beat1 from './Player/mp3/beat1.mp3';


function App() {
  const [musicas, setMusicas] = useState(dadosMusicas);
  const [emReproducao, setEmReproducao] = useState(false);
  const [musicaAtual, setMusicaAtual] = useState(dadosMusicas[0]);

  const musicaElemento = useRef();

  useEffect(() => {
    if(emReproducao) {
      musicaElemento.current.play();
    } else {
      musicaElemento.current.pause();
    }
  }, [emReproducao])

  return (
    <>
      <div className="App">

        <audio src={musicaAtual.url} ref={musicaElemento} />
        <Player musicas={musicas} setMusicas={setMusicas}
        emReproducao={emReproducao} setEmReproducao={setEmReproducao}
        musicaElemento={musicaElemento} musicaAtual={musicaAtual} />
      </div>
    </>
  )
}

export default App;
