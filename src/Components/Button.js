import './Button.scss';

const Button = (props) => {
  const { buttonClasses, buttonName, buttonUrl, onClick, disabled, style, type } = props;

  if (buttonUrl) {
    return (
      <a
        className={'button ' + buttonClasses}
        href={buttonUrl}
        target="_blank"
        rel="noopener noreferrer"
        disabled={disabled}
        style={style}>
        {buttonName}
      </a>
    );
  } else {
    return (
      <button type={type ? type : "button"} className={'button ' + buttonClasses} onClick={onClick} disabled={disabled} style={style}>
        {buttonName}
      </button>
    );
  }
};

export default Button;
