export interface ButtonProps {
  variant: "primary" | "secondary";
  size: "sm" | "md" | "lg";
  text: string;
  startIcon?: any; // optional prop
  endIcon?: any; // optional prop
  onClick: () => void;
}

export const Button = (props: ButtonProps) => {
  return <button></button>;
};
