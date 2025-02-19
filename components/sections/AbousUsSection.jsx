import teamData from "@/public/data/teamData.json";
import ImageCard from "../fragments/Card";

const AboutUsSection = () => {
  return (
    <section className="bg-background px-10 py-10">
      <div className="container mx-auto mt-4 w-full max-w-[800px] text-center">
        <h1 className="mb-6 text-5xl font-bold text-gray-900">About Us</h1>
        <h3 className="text-7 mt-6 font-sans text-slate-600">
          Meet the developers and designers behind this awesome project.
        </h3>
        <div className="mt-6 flex min-h-[50vh] flex-col items-center justify-center py-2">
          <div className="grid grid-cols-5 gap-10 md:grid-cols-3 lg:grid-cols-4">
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
