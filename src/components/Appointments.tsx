import { AppointmentProps, Card } from "./Card"

export const Appointments = () => {
  const appointments: AppointmentProps[] = [
    {
      code: '1',
      title: 'Quinta Juan León Mera - Café Oasis',
      date: 'Dentro de 1 o 2 semanas',
      budget: 'Yo invito si quiéres',
      description: 'Para esta cita tendríamos que ir primero a la Quinta, recorrerla, verla y demás. Luego tomaríamos el bus e iríamos a un café llamado Oasis, al cuál nunca he ido, si tu lo conoces y piensas en una mejor opción avísame!',
      location: 'Ambato',
      time: 'Aproximadamente desde las 9am hasta las 4pm',
      gradientStyle: 'bg-gradient-to-r from-yellow-400 to-red-500',
    },
    {
      code: '2',
      title: 'Parque de la Familia - Caminata y picnic',
      budget: 'Lo que gastemos en comida para los dos',
      date: 'Después de la primera cita, dentro de 3 o 4 semanas',
      description: 'Esta cita consiste en ir al parque de la familia, recorrerla juntos, conversar, caminar, jugar, etc. Luego de eso, nos sentaríamos en un lugar tranquilo y comeríamos algo que llevemos. Deberías llevar ropa cómoda porque podemos mojarnos xd. Si quieres puedes llevar una cámara para tomar fotos.',
      location: 'Ambato - Quisapincha',
      time: 'Aproximadamente desde las 9am hasta las 4pm',
      gradientStyle: 'bg-gradient-to-r from-cyan-300 to-blue-600'
    },
    {
      code: '3',
      title: 'Almuerzo en el restaurante de tu preferencia',
      budget: 'Lo que vayamos a gastar, si quieres yo invito!',
      date: 'De acuerdo a tu preferencia después de las anteriores citas',
      description: 'Para esta cita, podemos ir a un restaurante que tenga esas características que tu mencionaste, que sea privado o que tenga vista linda a la ciudad, pienso en pizza dentro de La Fornace, pero si tienes otra idea, avísame!',
      location: 'Ambato',
      time: 'Aproximadamente desde las 4pm o 5pm',
      gradientStyle: 'bg-gradient-to-r from-purple-800 to-pink-500'
    },
    {
      code: '4',
      title: 'Caminata y almuerzo en mi casa',
      budget: 'Lo que vayamos a comprar para hacer el almuerzo',
      date: 'A convenir después de las anteriores citas',
      description: 'Es simple, caminamos por mi parroquia un día sábado o domingo y luego preparamos el almuerzo en mi casa bailando cosas.',
      location: 'Ambato - Mi casa',
      time: 'Aproximadamente desde las 9am hasta las 5pm',
      gradientStyle: 'bg-gradient-to-r from-red-600 to-blue-500'
    },
    {
      code: '5',
      title: 'Tirarnos del puente de baños',
      budget: 'Aproximadamente $20 por persona para la actividad',
      date: 'A convenir',
      description: 'Dije que un día iba a invitarte a baños a tirarnos del puente, así que esta es esa cita!',
      location: 'Baños - Puente',
      time: 'Aproximadamente desde las 8am hasta las 5pm',
    },
    {
      code: '6',
      title: 'Rafting en el rio Pastaza',
      budget: 'Desconozco el precio, pero es aproximadamente $30 por persona',
      date: 'A convenir',
      description: 'Cita un poco extrema pero que me gustaría hacer contigo, es ir a baños y hacer rafting en el rio Pastaza.',
      location: 'Baños',
      time: 'Aproximadamente desde las 8am hasta las 5pm',
      gradientStyle: 'bg-gradient-to-r from-green-400 to-blue-500'
    },
    {
      code: '7',
      title: 'Cine y helado',
      budget: 'Simple, un helado y una entrada al cine!',
      date: 'A convenir',
      description: 'Cita un poco común pero que me gustaría hacer contigo.',
      location: 'Mall de los Andes o Paseo Shopping',
      time: 'Aproximadamente desde las 12pm hasta las 5pm',
      gradientStyle: 'bg-gradient-to-r from-cyan-500 to-blue-900'
    },
    {
      code: '8',
      title: 'Armar un rompecabezas juntos',
      budget: 'Lo que cuesta un rompecabezas',
      date: 'A convenir',
      description: 'Cita capaz que estresante pero que me gustaría hacer contigo, es armar un rompecabezas juntos, si quieres podemos hacerlo en mi casa o en la tuya, pero si quieres podemos hacerlo en un lugar público.',
      location: 'Anywhere',
      time: 'Aproximadamente desde las 10pm hasta las 5pm',
    },
  ]

  return (
    <section className="flex justify-center flex-col items-center my-10 mb-20">
      <h1 className='text-center font-bold text-2xl text-white'>Puedes elegir una cita, varias o todas a continuación</h1>
      
      <div>
        {
          appointments.map((appointment, index) => (
            <Card key={index} {...appointment} />
          ))
        }
      </div>

      <a className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-10 py-9 text-center mr-2 mb-2 max-w-lg"
        href="https://walink.co/fd4db6"
        target="_blank"
      >
        Seleccionar todas
      </a>
    </section>
  )
}