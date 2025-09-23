import { ModalProps, FormProps } from "@/interfaces";
import Button from "./Button";
import { useState } from "react";

const PostModal: React.FC<ModalProps> = ({ onClose, onSubmit }) => {
  const [post, setPost] = useState<FormProps>({
    userId: 1,
    title: "",
    content: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setPost((prevPost) => ({ ...prevPost, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(post);
    console.log(post);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-8 shadow-lg w-full max-w-md">
        <div className="flex justify-between gap-1 wrap-anywhere">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            Add New Post
          </h2>
          <Button onClick={onClose} title="X" />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-gray-700 font-medium mb-2"
            >
              Title
            </label>
            <input
              type="string"
              id="title"
              name="title"
              value={post.title}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none text-black focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="content"
              className="block text-gray-700 font-medium mb-2"
            >
              Content
            </label>
            <input
              type="textarea"
              id="content"
              name="content"
              required
              value={post.content}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none text-black focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="grid mt-5">
            <Button type="submit" title="Submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostModal;
