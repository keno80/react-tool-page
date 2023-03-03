import '@/styles/tabbar.scss'

const dotQty = [1, 2, 3]
const Tabbar = () => {
  return (
    <div className="dots">
      {dotQty.map((value) => (
        <div className="dotbox">
          {dotQty.map((value) => (
            <div className="dot"></div>
          ))}
        </div>
      ))}
    </div>
  )
}
export default Tabbar
