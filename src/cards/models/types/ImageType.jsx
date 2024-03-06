import PropTypes from "prop-types";

const ImageType = PropTypes.shape({
  url: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
});

export default ImageType;
