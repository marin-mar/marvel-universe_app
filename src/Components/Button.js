import './Button.scss';

const Button = (props) => {
  const { buttonClasses, buttonName, buttonUrl, onClick } = props;

  if (buttonUrl) {
    return (
      <a className={'button ' + buttonClasses} href={buttonUrl} target="_blank" rel="noopener noreferrer">
        {buttonName}
      </a>
    );
  } else {
    return (
      <button type="button" className={'button ' + buttonClasses} onClick={onClick}>
        {buttonName}
      </button>
    );
  }
};

export default Button;
