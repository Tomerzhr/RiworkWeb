const normalizeUser = (user) => ({
  name: {
    first: user.first,
    last: user.last,
  },
  email: user.email,
  password: user.password,
  phone: user.phone,
  address: {
    city: user.city,
    state: user.state,
    country: user.country,
    street: user.street,
    houseNumber: user.houseNumber,
    zip: user.zip,
  },
  image: {
    url: user.url,
    alt: user.alt,
  },
  isBusiness: user.isBusiness,
});

export default normalizeUser;
