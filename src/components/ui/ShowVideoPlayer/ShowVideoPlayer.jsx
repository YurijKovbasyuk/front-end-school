import PropTypes from 'prop-types';
import defaultImg from 'data/img/default.webp';
import { Player } from 'components';

export const ShowVideoPlayer = ({
  order,
  showPlayer,
  status,
  link,
  previewImageLink,
  description,
  handleClick,
}) => {
  return showPlayer === order && status === 'unlocked' ? (
    <Player url={link} />
  ) : (
    <img
      key={order}
      src={
        previewImageLink
          ? previewImageLink + '/lesson-' + order + '.webp'
          : defaultImg
      }
      alt={description}
      onClick={() => handleClick(order)}
    ></img>
  );
};

ShowVideoPlayer.propTypes = {
  order: PropTypes.number.isRequired,
  showPlayer: PropTypes.number,
  status: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};
