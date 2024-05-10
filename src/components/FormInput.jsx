import PropTypes from 'prop-types';

function FormInput({ label, onChange, id, ...inputProps }) {
  const inputId = String(id);

  return (
    <div className="p-5 m-[5px]">
      <label htmlFor={inputId}>{label}</label>
      <input
        id={inputId}
        className="h-8 w-full outline-none bg-fundo rounded-lg p-2 shadow-2xl"
        {...inputProps}
        onChange={onChange}
      />
    </div>
  );
}

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, 
};

export default FormInput;
