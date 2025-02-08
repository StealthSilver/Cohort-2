export const Button = ({ disabled, children, onClick }) => {
  return (
    <div
      className={`pointer ${disabled ? "bg-blue-200" : "bg-green-400"}`}
    ></div>
  );
};
