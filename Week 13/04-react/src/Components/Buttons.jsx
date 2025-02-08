export const Button = ({ disabled, children, onClick }) => {
  return (
    <div
      className={`px-30 py-8 cursor-pointer ${
        disabled ? "bg-blue-200" : "bg-green-400"
      }`}
    ></div>
  );
};
