import BannerCharacter from './BannerCharacter';
import BannerRandom from './BannerRandom';
import BannerAd from './BannerAd';

import './Banner.scss';

const Banner = (props) => {
  if (props.bannerCharacter) {
    return <BannerCharacter />;
  } else if (props.bannerRandom) {
    return <BannerRandom />;
  } else {
    return <BannerAd />;
  }
};

export default Banner;
