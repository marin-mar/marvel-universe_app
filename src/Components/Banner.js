import BannerCharacter from './BannerCharacter';
import BannerAd from './BannerAd';

import './Banner.scss';

const Banner = (props) => {
  if (props.bannerCharacter) {
    return <BannerCharacter />;
  } else {
    return <BannerAd />;
  }
};

export default Banner;
