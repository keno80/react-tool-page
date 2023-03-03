import { useState } from 'react'
import '@/styles/clock.scss'
import config from './ClockConfig'

const Num = (props: any) => {
  return (
    <>
      <div className="num">
        <div className={props.item[0] ? 't' : 't trans'}></div>
        <div className="line top1">
          <div className={props.item[1] ? 'l' : 'l trans'}></div>
          <div className={props.item[2] ? 'r' : 'r trans'}></div>
        </div>
        <div className={props.item[3] ? 'm' : 'm trans'}></div>
        <div className="line top2">
          <div className={props.item[4] ? 'l' : 'l trans'}></div>
          <div className={props.item[5] ? 'r' : 'r trans'}></div>
        </div>
        <div className={props.item[6] ? 'b' : 'b trans'}></div>
      </div>
    </>
  )
}

const Clock = () => {
  const hours = () => {
    return Array.from(
      new Date().getHours() < 10
        ? `0${new Date().getHours()}`
        : `${new Date().getHours()}`
    )
  }
  const minutes = () => {
    return Array.from(
      new Date().getMinutes() < 10
        ? `0${new Date().getMinutes()}`
        : `${new Date().getMinutes()}`
    )
  }

  const [value, setValue] = useState([
    config[hours()[0] as unknown as number],
    config[hours()[1] as unknown as number],
    config[minutes()[0] as unknown as number],
    config[minutes()[1] as unknown as number],
  ])
  const crontab = setInterval(() => {
    setValue([
      config[hours()[0] as unknown as number],
      config[hours()[1] as unknown as number],
      config[minutes()[0] as unknown as number],
      config[minutes()[1] as unknown as number],
    ])
  }, 1000)
  return (
    <div className="timer">
      <div>
        <Num item={value[0]}></Num>
      </div>
      <div>
        <Num item={value[1]}></Num>
      </div>
      <div className="comu">:</div>
      <div>
        <Num item={value[2]}></Num>
      </div>
      <div>
        <Num item={value[3]}></Num>
      </div>
    </div>
  )
}

export default Clock
