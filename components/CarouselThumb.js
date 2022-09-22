import styleThumb from '../styles/carouselfotos.module.css'

export const Thumb = ({ selected, onClick, imgSrc }) => {
  return (
  <div
    className={selected ? styleThumb.emblaSlideThumbSelected : styleThumb.emblaSlideThumb}
  >
    <button
      onClick={onClick}
      className={styleThumb.emblaSlideInnerThumb}
      type="button"
    >
      <img className={styleThumb.emblaSlideThumbnail} src={imgSrc} alt="Imagen Inmueble" />
    </button>
  </div>
)};