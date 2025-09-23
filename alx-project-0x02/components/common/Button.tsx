import { type ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ title, onClick, size, shape }) => {
  return (
    <button
      onClick={onClick}
      // className="py-2 px-4 rounded-md bg-blue-600 text-white font-bold cursor-pointer"
      className={size && shape}
    >
      {title}
    </button>
  );
};

export default Button;
