import teamData from "@/public/data/teamData.json";
import ImageCard from '../fragments/Card';

const AboutUsSection = () => {
  return (
<<<<<<< HEAD
    <section
      id="about-us"
      className="relative isolate overflow-hidden px-6 lg:px-6"
    >
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-5xl font-semibold font-sans text-pretty">
            Meet Our Team
          </h1>
        </div>
       <div className="mt-6 flex flex-col items-center justify-center min-h-[50vh] py-2">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:grid-cols-4">
                 {teamData.map((member) => (
=======
    <section className="py-10 bg-background px-10">
      <div className="container mx-auto text-center w-full max-w-[800px] mt-8">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">About Us</h1>
        <h1 className="text-xl text-gray-400 mb-20 text-center">Meet the developers and designers behind this awesome project</h1>
        <div className="flex flex-wrap justify-center gap-10 items-start">
          {teamData.map((member) => (
>>>>>>> 46b6eafbaf816e41f4c654fa86c4bb6c93ca8c9a
            <ImageCard
              key={member.id}
              title={member.title}
              subtitle={member.subtitle}
              image={member.image}
              github={member.github}
            />
          ))}
            </div>
          </div>
       </div>
    </section>
  );
};

export default AboutUsSection;