import './Skeleton.scss';

const Skeleton = () => {
  return (
    <div className="skeleton">
      <h2 className="skeleton__title">Please select a character from the list on the left to view the information</h2>
      <div className="skeleton__row">
        <div className="skeleton__img"></div>
        <div className="skeleton__name"></div>
      </div>
      <div className="skeleton__row">
        <div className="skeleton__text"></div>
      </div>
      <div className="skeleton__row">
        <div className="skeleton__text"></div>
      </div>
      <div className="skeleton__row">
        <div className="skeleton__text"></div>
      </div>
    </div>
  );
};

export default Skeleton;
