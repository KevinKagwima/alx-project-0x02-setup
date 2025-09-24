import { PostProps } from "@/interfaces";

const PostCard: React.FC<PostProps> = ({ title, content, userId }) => {
  return (
    <div className="bg-white text-gray-800 rounded-md">
      <span>{userId}</span>
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
};

export default PostCard;
