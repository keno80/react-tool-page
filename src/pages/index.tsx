import { useEffect, useState } from 'react'
import { getSentence } from '@/api/open'
import '@/styles/home.scss'

const autoType = (sentence: string) => {
  let str = ''
  let index = 0
  const textBox = document.getElementsByClassName('one_sentence')

  const timer = setInterval(() => {
    if (index > sentence.length - 1) {
      clearInterval(timer)
      return
    }

    str = str + sentence.substring(index, index + 1)
    textBox[0].innerHTML = str
    index++
  }, 200)
}

const Home = () => {
  useEffect(() => {
    getSentence().then((res) => {
      autoType(res.data.hitokoto)
    })
  }, [])
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
