import bannerAddLeftImg from '../Img/avengers.png';
import bannerAddRightImg from '../Img/avengers_logo.png';

import './BannerAd.scss';

const BannerAd = (props) => {
  return (
    <div className="banner banner--ad">
      <img className="banner__img" src={bannerAddLeftImg} alt="avengers" width={152} height={100} />
      <div className="banner__info">
        <h2 className="banner__text">
          New comics every week!
          <br />
          Stay tuned!
        </h2>
      </div>
      <img className="banner__img" src={bannerAddRightImg} alt="avengers logo" width={133} height={100} />
    </div>
  );
};

export default BannerAd;
