import PropTypes from "prop-types";
import AddressType from "./AddressType";
import imageType from "./ImageType";

const cardType = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  address: AddressType.isRequired,
  image: imageType.isRequired,
  phone: PropTypes.string.isRequired,
  likes: PropTypes.array,
  web: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([undefined])]),
  email: PropTypes.string.isRequired,
});

export default cardType;
