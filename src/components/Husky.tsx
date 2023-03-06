import '@/styles/tool.scss'

const Husky = (props:any) => {
  return (
    <div className='Tool_item'>
      <div className="Husky"></div>
      <div>Husky</div>
      <div>Husky is a toll which could</div>
      <div>{ props.ison}</div>
    </div>
  )
}

export default Husky
