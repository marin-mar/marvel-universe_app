import Button from './Button';

import bannerRandomImg from '../Img/banner-random.png';

import './BannerRandom.scss';

const BannerRandom = (props) => {
  return (
    <div className="banner banner--random">
      <div className="banner__info">
        <h2 className="banner__text">
          Random character for today!
          <br />
          Do you want to get to know him better?
        </h2>
        <p className="banner__text">Or choose another one</p>
        <div className="banner__buttons">
          <Button
            buttonClasses={'banner__button button--accent button--dark-bg'}
            buttonName="Try it"
            onClick={props.onClick}
          />
        </div>
      </div>
      <img
        className="banner__img"
        src={bannerRandomImg}
        alt="hammer and shield"
        width={202 + 'px'}
        height={189 + 'px'}
      />
    </div>
  );
};

export default BannerRandom;
