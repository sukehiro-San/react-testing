type GreetProps = {
  name?: string;
};

const Greet = (props: GreetProps) => {
  return <>Hello {props.name}</>;
};

export default Greet;
