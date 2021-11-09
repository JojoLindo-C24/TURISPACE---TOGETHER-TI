import React from 'react';
import {Container} from './styled.js';
import { Link} from 'react-router-dom'

function boxCarrosel(props) {
  return (
      <Container>
        <div className="Pt1">
          <img src={props.item.imagem1} alt=""/>
        </div>
        <div className="pt2"> 
          <div className="titulo"> {props.item.titulo} </div>
          <Link to={{
                    pathname: '/admInserir'
                }}>
          {props.adm === true? <div className="edit"> <img src="/assets/images/edit.png" alt="" /> </div>: ''}
          </Link>
          <Link className="ver-mais" to={{pathname: '/infolugar', state: props.item }}> <div className="ver-mais"> Ver mais sobre</div> </Link>

        </div>
      </Container>
  )
}

export default boxCarrosel;