const H = ({ children, style }) => {
  return (
    <h1 className={`primary-text ${style}`}>
      {children}
    </h1>
  );
};

export default H;
