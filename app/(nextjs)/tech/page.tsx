import SortedTechPage from "@/components/SortedTechPage";

const TechPage = async () => {
  return (
    <>
      <h1 className="mb-2 text-3xl font-bold">Tech</h1>
      <p className="mb-12 text-neutral-500">A list of the technology I recommend</p>
      <SortedTechPage />
    </>
  );
};

export default TechPage;
