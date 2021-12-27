import Button from './Button';
import ComicsPreviewImg from '../Img/Comics_preview.png';

import './Comics.scss';

const Comics = () => {
	return (
    <div className="comics">
      <ul className="comics__list">
        <li className="comics__item">
          <img className="comics__img" src={ComicsPreviewImg} alt="Comics preview" width={225} height={346} />
          <h3 className="comics__title">ultimate x-men vol. 5: ultimate war tpb</h3>
          <p className="comics__price">9.99$ or not available</p>
        </li>
        <li className="comics__item">
          <img className="comics__img" src={ComicsPreviewImg} alt="Comics preview" width={225} height={346} />
          <h3 className="comics__title">ultimate x-men vol. 5: ultimate war tpb</h3>
          <p className="comics__price">9.99$ or not available</p>
        </li>
        <li className="comics__item">
          <img className="comics__img" src={ComicsPreviewImg} alt="Comics preview" width={225} height={346} />
          <h3 className="comics__title">ultimate x-men vol. 5: ultimate war tpb</h3>
          <p className="comics__price">9.99$ or not available</p>
        </li>
        <li className="comics__item">
          <img className="comics__img" src={ComicsPreviewImg} alt="Comics preview" width={225} height={346} />
          <h3 className="comics__title">ultimate x-men vol. 5: ultimate war tpb</h3>
          <p className="comics__price">9.99$ or not available</p>
        </li>
      </ul>
      <Button
        buttonClasses={'comics__button button--accent'}
        buttonName="Load more"
        // disabled={newItemLoading}
        // style={{ display: charactersEnded ? 'none' : 'block' }}
        // onClick={onRequestList}
      />
    </div>
  );
}

export default Comics;