const Button = ({ text, className }) => {
  return (
    <button className={`btn bg-black font-semibold text-sm py-3 px-6 cursor-pointer transition-opacity duration-300 hover:opacity-80 ${className}`}>
      {text}
    </button>
  );
};

export default Button;
