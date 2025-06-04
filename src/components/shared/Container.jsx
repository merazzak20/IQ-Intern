const Container = ({ children, className = "" }) => {
  return (
    <div
      className={`max-w-[2520px] xl:px-20 md:px-14 sm:px-10 px-6 ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
