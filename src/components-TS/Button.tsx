type ButtonProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};
const Button = (props: ButtonProps) => {
  return <button onClick={(ev) => props.handleClick(ev, 1)}>Click</button>;
};

export default Button;
