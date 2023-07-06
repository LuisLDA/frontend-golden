import React from 'react';

function ImagenConComentarios(props) {
  return (
    <div className='card'>
      <img src={props.imagen} alt="Imagen" />
      <p>{props.comentario1}</p>
      <p>{props.comentario2}</p>
      <p>{props.comentario3}</p>
      <p>{props.comentario4}</p>
      <p>{props.comentario5}</p>
    </div>
  );
}

export default ImagenConComentarios;
