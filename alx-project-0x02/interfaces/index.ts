export interface CardProps {
  title: string;
  content: string;
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  size?: string;
  shape?: string;
  onClick?: () => void;
}

type btn_size<ButtonProps> = "small" | "medium" | "large";
type btn_shape<ButtonProps> = "rounded-sm" | "rounded-md" | "rounded-full";
export interface ModalProps {
  onClose: () => void;
  onSubmit: (post: FormProps) => void;
}

export interface FormProps extends CardProps {
  userId: number;
  id?: number;
}

export interface PostProps extends CardProps {
  userId: number;
  id: number;
}
