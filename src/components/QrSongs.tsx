export const QrSongs = () => {
  const songs = [
    {
      title: 'Cómo hacer para olvidarte',
      url: 'https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dxgf0unzA2hI&chs=180x180&choe=UTF-8&chld=L|2'
    },
    {
      title: '70cm',
      url: 'https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DbC6np1klGbg&chs=180x180&choe=UTF-8&chld=L|2'
    },
    {
      title: 'Afuera del planeta',
      url: 'https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DH20qPcYUKXw&chs=180x180&choe=UTF-8&chld=L|2'
    },
    {
      title: 'Kamisama Hajimemashita',
      url: "https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DtYyIm3Q8gWc&chs=180x180&choe=UTF-8&chld=L|2"
    },
    {
      title: 'El poder nuestro es',
      url: 'https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DeaGh5e5Y4C4&chs=180x180&choe=UTF-8&chld=L|2'
    },
    {
      title: 'Haruka',
      url: 'https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DogJlewkQbdQ&chs=180x180&choe=UTF-8&chld=L|2'
    },
    {
      title: 'O',
      url: 'https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D-gA3H3clEqk&chs=180x180&choe=UTF-8&chld=L|2'
    }
  ]

  return (
    <section className="my-48 flex flex-col items-center">
      <h1 className="text-2xl font-bold text-white my-4 px-3">
        ¿Quiéres escuchar música que me gusta y que pienso que te gusta a ti?
      </h1>

      <div className="flex flex-wrap gap-3 justify-center">
        {
          songs.map((song, index) => {
            return (
              <QrSong title={song.title} url={song.url} key={index} />
            )
          })
        }
      </div>
    </section>
  )
}

interface QrSong {
  title: string
  url: string
}

const QrSong = (props: QrSong) => {
  return (
    <div className="text-white md:w-44 w-36">
      <a href="www.qr-code-generator.com/" rel="nofollow">
        <img src={props.url} />
      </a>
      <h3
        className="font-bold"
      >
        <span className="text-[#09f]">{props.title.split(' ')[0]}</span> {props.title.split(' ').slice(1).join(' ')}
      </h3>
    </div>
  )
}