import ImagenConComentarios from './componentes/imagenComentarios.jsx';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js'
import {useFetch } from './useFetch'
import { useState } from 'react';

function App() {

  //Register arc element
  Chart.register(ArcElement);



  //Create pastel array with 3 elements

  const pastel = {
    labels: ['Pastel de chocolate', 'Pastel de vainilla', 'Pastel de fresa'],
    datasets: [
      {
        label: 'Pastel',
        data: [300, 50, 100],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)', //red
          'rgba(54, 162, 235, 0.2)', //blue
          'rgba(255, 206, 86, 0.2)', //yellow
        ]
      },
    ],
  }

  const options = {
    title: {
      display: true,
      text: 'Pastel de chocolate, vainilla y fresa',
    },
    responsive: true,
  }

  const page = 1

  //Fetch data from API


  //Use fetch hook useeffect

  const {data}= useFetch(`http://192.168.7.166:3000/posts?page=${page}`)

  return (
    <>

      <div className='contenedor'>

        {data?.map((item) => (
          <>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
            }}>
              <p style={{
                fontSize: '20px',
                fontWeight: 'bold',
                display: 'flex',
                justifyContent: 'center',
              }}>{item.name}</p>

              <ImagenConComentarios
              imagen="https://cloudfront-us-east-1.images.arcpublishing.com/infobae/UTHV4PIZJVF63HTO46MMB74ZWQ.jpg"
              comentario1="Deserunt sint do ullamco consectetur deserunt."
              comentario2="Cillum ea aliquip consectetur pariatur tempor minim minim esse est deserunt."
              comentario3="Enim ex enim ad enim nulla aliqua deserunt eiusmod nisi elit enim nulla culpa."
              comentario4="Aliquip eiusmod enim cillum eiusmod aliquip."
              comentario5="Mollit duis consectetur enim consectetur ex voluptate irure nisi dolore quis adipisicing consectetur enim amet."
            />
            </div>
            
          </>
        ))}

      </div>

      <div className='pastelcontainer'>

        <Pie
          data={pastel} options={options} />
      </div>




      <div className='botones'>
        <button className='boton'>Anterior</button>
        <button className='boton'
        onClick={() => {
          console.log('Siguiente')
          //Load more data and update the state load page + 1

          
        }
        }
        
        >Siguiente</button>
      </div>
    </>

  );
}

export default App;