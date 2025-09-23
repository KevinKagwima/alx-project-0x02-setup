import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ title, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="py-2 px-4 rounded-md bg-blue-600 text-white font-bold cursor-pointer"
    >
      {title}
    </button>
  );
};

export default Button;
