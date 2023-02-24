import { useEffect } from 'react'
import '@/styles/home.scss'

const text = '指引梦想的灯塔'

const autoType = () => {
  let str = ''
  let index = 0
  const textBox = document.getElementsByClassName('one_sentence')

  const timer = setInterval(() => {
    if (index > text.length - 1) {
      clearInterval(timer)
      return
    }

    str = str + text.substring(index, index + 1)
    textBox[0].innerHTML = str
    index++
  }, 200)
}

const Home = () => {
  useEffect(() => {
    autoType()
  })

  return (
    <div className='homepage'>
      <div className='hm_img' />
      <div className='hm_content'>
        <div className='one_sentence'></div>
      </div>
    </div>
  )
}

export default Home
