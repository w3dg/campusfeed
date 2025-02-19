import teamData from "@/public/data/teamData.json";
import ImageCard from "../fragments/Card";

const AboutUsSection = () => {
  return (
    <section
      id="about-us"
      className="relative isolate overflow-hidden px-6 lg:px-6"
    >
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="mb-6 text-5xl font-bold text-gray-900">About Us</h1>
          <h1 className="mb-12 text-center text-xl text-gray-400">
            Meet the developers and designers behind this awesome project
          </h1>
        </div>
        <div className="mt-6 flex min-h-[50vh] flex-col items-center justify-center py-2">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3 lg:grid-cols-4">
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
