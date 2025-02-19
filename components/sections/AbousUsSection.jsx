import teamData from "@/public/data/teamData.json";
import ImageCard from '../fragments/Card';

const AboutUsSection = () => {
  return (
    <section className="py-10 bg-gray-100 px-10">
      <div className="container mx-auto text-center w-full max-w-[800px] mt-8">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">About Us</h1>
        <h1 className="text-xl text-gray-400 mb-20 text-center">Meet the developers and designers behind this awesome project</h1>
        <div className="flex flex-wrap justify-center gap-10 items-start">
          {teamData.map((member) => (
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
    </section>
  );
};

export default AboutUsSection;