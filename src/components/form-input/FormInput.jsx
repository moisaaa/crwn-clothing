const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className="flex flex-col text-center">
      <label>{label}</label>
      <input
        {...otherProps}
        className="border-b-2 border-black text-center p-2 px-6 mb-2"
      ></input>
    </div>
  );
};

export default FormInput;
