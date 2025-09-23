import Header from "@/components/layout/Header";
import Card from "@/components/common/Card";
import Button from "@/components/common/Button";
import PostModal from "@/components/common/PostModal";
import { PostProps, FormProps } from "@/interfaces";
import { useState } from "react";

const Home: React.FC<{ posts: PostProps[] }> = ({ posts }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [post, setPost] = useState<PostProps[]>(posts);

  const handleAddPost = (newPost: FormProps) => {
    setPost((prev) => [
      ...prev,
      {
        ...newPost,
        id: post.length + 1,
        userId: 1,
      },
    ]);
  };

  return (
    <>
      <Header />
      <div className="p-4">
        <div className="flex justify-between">
          <h1>This is the Home page</h1>
          <Button title="Add" onClick={() => setModalOpen(true)} />
        </div>
        <div className="mt-10">
          <h1>The cards go below here</h1>
          <div className="grid grid-cols-3 mt-2 gap-3">
            {posts?.map((post) => (
              <Card title={post.title} content={post.content} key={post.id} />
            ))}
          </div>
        </div>
      </div>
      {isModalOpen && (
        <PostModal
          onSubmit={handleAddPost}
          onClose={() => setModalOpen(false)}
        />
      )}
    </>
  );
};

export default Home;
