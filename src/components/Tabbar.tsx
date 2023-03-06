import '@/styles/tabbar.scss'
import { useState } from 'react'
import Husky from './Husky'

const dotQty = [1, 2, 3]
const Tabbar = () => {
  const [isTabOn, setisTabOn] = useState(true)
  const TabControl = () => setisTabOn(!isTabOn)
  const [toolOn,settoolOn] = useState([0,0])
  return (
    <>
      <div className="dots" onClick={TabControl}>
        {dotQty.map(() => (
          <div className="dotbox">
            {dotQty.map(() => (
              <div className="dot"></div>
            ))}
          </div>
        ))}
      </div>
      {isTabOn && (
        <div className='Animate1'>
          <div className="Tab_back" onClick={TabControl}></div>
          <div className="Tab_outline">
            <div className='Tab'>
              <h1 className="Title">工具箱</h1>
              <div className="Tab_main">
                <Husky ison={toolOn[0]}></Husky>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Tabbar
