type InputProps = {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = (props: InputProps) => {
  return (
    <input
      type="text"
      onChange={(ev) => props.handleChange(ev)}
    />
  );
};

export default Input;
