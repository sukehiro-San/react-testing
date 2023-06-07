type GreetProps = {
  name: string;
  messageCount?: number;
  isLoggedIn: Boolean;
};

const Greet = (props: GreetProps) => {

  const { messageCount = 0 } = props;

  return (
    <h2>
      {props.isLoggedIn
        ? `Welcome ${props.name}! you have ${messageCount} unread messages.`
        : "Welcome Guest!"}
    </h2>
  );
};

export default Greet;
