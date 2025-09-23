export interface CardProps {
  title: string;
  content: string;
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  styles?: string;
  onClick?: () => void;
}

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
