import MemoizedForm from "../../forms/components/Form";
import Input from "../../forms/components/Input";
import ROUTS from "../../routes/routsModel";
import PropTypes from "prop-types";

function CardForm({ onSubmit, onReset, errors, data, onFormChange, onInputChange, title }) {
  return (
    <MemoizedForm
      onSubmit={onSubmit}
      onReset={onReset}
      onChange={onFormChange}
      title={title}
      style={{
        width: "70%",
        padding: "50px 30px 70px 30px",
      }}
      to={ROUTS.MY_CARDS}>
      <Input label="Title" name="title" data={data} handleChange={onInputChange} error={errors.title} sm={6} />
      <Input label="Subtitle" name="subtitle" data={data} handleChange={onInputChange} error={errors.subtitle} sm={6} />
      <Input label="Description" name="description" data={data} handleChange={onInputChange} error={errors.description} sm={6} />
      <Input label="Phone" name="phone" data={data} handleChange={onInputChange} error={errors.phone} sm={6} />
      <Input label="Email" name="email" data={data} handleChange={onInputChange} error={errors.email} />
      <Input label="WebSite" name="webUrl" data={data} handleChange={onInputChange} error={errors.webUrl} />
      <Input label="Image Url" name="imageUrl" data={data} handleChange={onInputChange} error={errors.url} />
      <Input label="Image Description" name="imageAlt" data={data} handleChange={onInputChange} error={errors.alt} />
      <Input label="City" name="city" data={data} handleChange={onInputChange} error={errors.city} />
      <Input label="Street" name="street" data={data} handleChange={onInputChange} error={errors.street} />
      <Input label="House Number" name="houseNumber" data={data} handleChange={onInputChange} error={errors.houseNumber} />
      <Input label="State" name="state" data={data} handleChange={onInputChange} error={errors.state} />
      <Input label="Country" name="country" data={data} handleChange={onInputChange} error={errors.country} />
      <Input label="Zip" name="zip" data={data} handleChange={onInputChange} error={errors.zip} />
    </MemoizedForm>
  );
}

CardForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  onFormChange: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default CardForm;
