import styleButton from '../styles/dotbutton.module.css';

export const DotButton = ({ selected, onClick }) => (
  <button
    className={styleButton}
    type="button"
    onClick={onClick}
  />
);