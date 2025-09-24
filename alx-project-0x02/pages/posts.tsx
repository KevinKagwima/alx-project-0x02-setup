import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import { PostProps } from "@/interfaces";

const Posts: React.FC<PostProps[]> = ({ posts }) => {
  return (
    <>
      <Header />
      <div className="p-4">
        <div className="flex align-middle justify-center">
          <h1>This is the Posts page</h1>
        </div>
        <div className="mt-10 grid grid-cols-3 gap-2">
          {posts?.map((post: PostProps) => {
            <PostCard
              title={post.title}
              content={post.content}
              userId={post.userId}
              key={post.id}
              id={post.id}
            />;
          })}
        </div>
      </div>
    </>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}

export default Posts;
