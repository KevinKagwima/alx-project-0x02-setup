import { CardProps } from "@/interfaces";

const InfoCard: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="p-4 bg-gray-50 text-gray-900">
      <h1>Title: {title}</h1>
      <p>Content: {content}</p>
    </div>
  );
};

export default InfoCard;
