const Button = ({ children, disabled }) => {
  return (
    <button
      className={`w-full p-2 rounded-lg font-semibold transition duration-300 ${
        disabled
          ? "bg-gray-500 text-gray-300 cursor-not-allowed"
          : "bg-blue-600 hover:bg-blue-700 text-white"
      }`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
