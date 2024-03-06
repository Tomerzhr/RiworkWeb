import Joi from "joi";

const contactSchema = {
  first: Joi.string().min(2).max(250).required(),

  last: Joi.string().min(2).max(250).required(),

  phone: Joi.string()
    .ruleset.pattern(/0[0-9]{1,2}-?\s?[0-9]{3}\s?[0-9]{4}/)
    .rule({
      message: "Please enter a valid phone number",
    })
    .required(),

  email: Joi.string()
    .ruleset.pattern(/^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/)
    .rule({
      message: 'user "mail" must be a valid mail',
    })
    .required(),

  message: Joi.string().min(2).max(250).allow(" ").required(),
};

export default contactSchema;
