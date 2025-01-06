const ErrorMessage = ({ message }) => {
  return (
    <div
      style={{
        width: "100%",
        padding: "32px 0",
        color: "red",
        textAlign: "center",
      }}
    >
      {message}
    </div>
  );
};

export default ErrorMessage;
