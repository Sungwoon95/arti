const IconTitle = ({ text, icon }) => {
  return (
    <section className={'icon_title_wrap'}>
      <div className={'icon_title_img'}>
        <img src={`http://localhost:8000/icon/${icon}.png`} />
      </div>
      <h2>{text}</h2>
    </section>
  )
}
export default IconTitle