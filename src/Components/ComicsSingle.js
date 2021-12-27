import ComicsSingleImg from '../Img/Comics_single.png';

import './ComicsSingle.scss';

const ComicsSingle = () => {
  return (
    <div className="comic">
      <img className="comic__img" src={ComicsSingleImg} alt="Single Comics" width={293} height={450} />

      <div className="comic__info">
        <h2 className="comic__title">X-Men: Days of Future Past</h2>
        <p className="comic__text">
          Re-live the legendary first journey into the dystopian future of 2013 - where Sentinels stalk the Earth, and
          the X-Men are humanity's only hope...until they die! Also featuring the first appearance of Alpha Flight, the
          return of the Wendigo, the history of the X-Men from Cyclops himself...and a demon for Christmas!?
        </p>
        <p className="comic__pages">144 pages</p>
        <p className="comic__language">Language: en-us</p>
        <p className="comic__price">9.99$</p>
      </div>

      <p className="comic__back">Back to all</p>
    </div>
  );
};

export default ComicsSingle;
