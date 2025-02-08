const Button = ({ children, disabled }) => {
  return (
    <button
      className={`w-full p-2 rounded-lg font-semibold text-white transition duration-300 ${
        disabled
          ? "bg-gray-400 cursor-not-allowed"
          : "bg-blue-600 hover:bg-blue-700"
      }`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
