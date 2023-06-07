type PersonListProps = {
  names: { first: string; last: string }[];
};

const PersonList = (props: PersonListProps) => {
  return (
    <div>
      {props.names.map((n) => (
        <h3>
          {n.first} {n.last}
        </h3>
      ))}
    </div>
  );
};

export default PersonList;
