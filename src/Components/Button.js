import './Button.scss';

const Button = (props) => {
  const { buttonClasses, buttonName, buttonUrl } = props;

  return (
    <a className={'button ' + buttonClasses} href={buttonUrl} target="_blank" rel="noopener noreferrer">
      {buttonName}
    </a>
  );
};

export default Button;
