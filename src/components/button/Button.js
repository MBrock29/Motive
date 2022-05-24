import s from "./Button.module.scss";

export const Button = ({ buttonText, handleClick, secondary }) => {
  const handleButtonType = secondary ? s.secondary : s.button;

  return (
    <button onClick={handleClick} className={handleButtonType}>
      {buttonText}
    </button>
  );
};
