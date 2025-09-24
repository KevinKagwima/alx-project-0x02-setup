import { PostProps } from "@/interfaces";

const PostCard: React.FC<PostProps> = ({ title, content, userId }) => {
  return (
    <div className="bg-white text-gray-800 rounded-md">
      <span>UserID: {userId}</span>
      <h1>Title: {title}</h1>
      <p>Content: {content}</p>
    </div>
  );
};

export default PostCard;
