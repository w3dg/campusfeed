import teamData from "@/public/data/teamData.json";
import ImageCard from '../fragments/Card';

const AboutUsSection = () => {
  return (
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