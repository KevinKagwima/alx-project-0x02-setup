import Header from "@/components/layout/Header";
import Button from "@/components/common/Button";

const About: React.FC = () => {
  return (
    <>
      <Header />
      <div className="flex align-middle justify-center">
        <h1>This is the About page</h1>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-30">
        <Button
          title="First Button"
          styles="bg-red-600 p-2 cursor-pointer rounded-sm"
        />
        <Button
          title="Second Button"
          styles="bg-blue-600 p-2 cursor-pointer rounded-md"
        />
        <Button
          title="Third Button"
          styles="bg-green-600 p-2 cursor-pointer rounded-full"
        />
        <Button
          title="Fourth Button"
          styles="bg-green-600 p-2 cursor-pointer rounded-lg"
        />
      </div>
    </>
  );
};

export default About;
