import React from 'react'
import { BsFillPlayCircleFill, BsFillPauseCircleFill, BsFillSkipStartCircleFill, 
BsSkipEndCircleFill, BsFillSkipEndCircleFill} from 'react-icons/bs';

const Player = ({musicaElemento, emReproducao, setEmReproducao, musicaAtual}) => {

    const PlayPause = () => {

        setEmReproducao(!emReproducao);

    }

  return (
    <div className="player-container">
        <div className="titulo">
            <p>{musicaAtual.titulo}</p>
        </div>
        <div className="navegacao">
            <div className="navegacao-wrapper">
                <div className="barra-pesquisa" style={{width:'50%'}}></div>
            </div>
        </div>
        <div className="controles">
            <BsFillSkipStartCircleFill className="botao-acao" />
            {emReproducao ? <BsFillPauseCircleFill className="botao-acao pp" onClick={PlayPause} /> : 
            <BsFillPlayCircleFill className="botao-acao pp" onClick={PlayPause} />}
            <BsFillSkipEndCircleFill className="botao-acao" />
        </div>
    </div>
  )
}

export default Player;