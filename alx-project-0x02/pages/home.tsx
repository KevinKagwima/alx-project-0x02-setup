import Header from "@/components/layout/Header";
import InfoCard from "@/components/common/Card";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <div className="flex align-middle justify-center">
        <h1>This is the Home page</h1>
      </div>
      <div className="mt-10">
        <h1>The cards go below here</h1>
        <InfoCard title="Heading" content="This is the content" />
      </div>
    </>
  );
};

export default Home;
