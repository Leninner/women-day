import { useEffect, useRef } from "react"
import Avatar from '../assets/avatar.png'

export interface AppointmentProps {
  title: string
  description: string
  date: string
  time: string
  location: string
  budget: string
  code: string
  gradientStyle?: string
  onClick?: (x: string) => void
}

const SendWhatsapp = (code: string) => {
  const message = `Hola, quisiera la cita con el código ${code}`
  const url = `https://api.whatsapp.com/send?phone=593979424062&text=${encodeURI(message)}`
  window.open(url, '_blank')
}

export const Card = (props: AppointmentProps) => {
  const { title, description, date, time, location, budget, code, gradientStyle = 'bg-gradient-to-r from-red-500 to-yellow-300' } = props
  const ticket = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const wrapperWidth = document.body.getBoundingClientRect().width
    const wrapperHeight = document.body.getBoundingClientRect().height

    window.addEventListener('mousemove', (e) => {
      const { pageX, pageY } = e
      const halfWidth = wrapperWidth! / 2
      const halfHeight = wrapperHeight! / 2

      const rotationX = (pageX - halfWidth) / halfWidth
      const rotationY = (pageY - halfHeight) / halfHeight

      ticket.current!.style.transform = `rotateY(${rotationY * 12}deg) rotateX(${rotationX * 12}deg)`
    })
  }, [])

  return (
    <div className="container my-20">
      <div className="wrapper">
        <article className={`flex flex-col justify-between items-start w-[800px] p-4 shadow-2xl shadow-neutral-700 aspect-[18/9] relative rounded-md ${gradientStyle}`} ref={ticket}>
          <div>
            <h4 className="absolute top-0 right-0 p-4 font-black text-lg opacity-90 font-mono">#{code}</h4>

            <div className="flex items-center space-x-4 mb-5">
              <img className="w-10 h-10 rounded-full" src={Avatar} alt="" />
              <div className="font-medium text-white text-xl dark:text-white">
                <div>{title}</div>
                <div className="text-sm text-white font-normal dark:text-gray-400"><span className="font-bold">Fecha: </span>{date}</div>
              </div>
            </div>

            <div className="text-white">
              <p>{description}</p>
              <p className="mt-2"><span className="font-bold">Localidad: </span>{location}</p>
              <p><span className="font-bold">Tiempo: </span>{time}</p>
              <p><span className="font-bold">Presupuesto: </span>{budget}</p>
            </div>
          </div>

          <button
            onClick={() => SendWhatsapp(code)}
            className="text-white bg-[#222] hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2 text-center mr-2 my-5 mb-2 max-w-lg">Reservar</button>
          <div className="bg"></div>
        </article>
      </div >
    </div >
  )
}