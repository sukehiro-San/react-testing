type StatusProps = {
  status: "loading" | "success" | "error";
};

const Status = (props: StatusProps) => {
  let message;
  if (props.status === "loading") message = "Loading....";
  else if (props.status === "success") message = "Data fetched successfully!";
  else if (props.status === "error") message = "Error Fetching Data";

  return <h3>Status - {message}</h3>;
};

export default Status;
