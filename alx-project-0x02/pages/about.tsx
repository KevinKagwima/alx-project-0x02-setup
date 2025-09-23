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
        <Button title="First Button" shape="rounded-sm" size="small" />
        <Button title="Second Button" shape="rounded-md" size="medium" />
        <Button title="Third Button" shape="rounded-full" size="large" />
      </div>
    </>
  );
};

export default About;
