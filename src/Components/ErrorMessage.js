import './ErrorMessage.scss';
import errorMsgImg from './ErrorMessage.png';

const ErrorMessage = () => {
  return (
    <div className="error-message">
      <img className="error-message__icon" src={errorMsgImg} alt="error - try again later" width={100} height={100} />
      <p className="error-message__text">something went wrong... try again later</p>
    </div>
  );
};

export default ErrorMessage;
