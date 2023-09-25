import { Dog } from "lucide-react";

const DemoSection = () => {
  return (
    <section className="bg-secondary py-12">
      <div className="container flex flex-col items-center px-4 sm:px-8">
        <h2 className="text-center">
          Em-bark on Icon Adventures with AI Brilliance!
        </h2>
        <div className="mt-10 max-w-5xl space-y-10 lg:grid lg:grid-cols-7 lg:gap-16 lg:space-y-0">
          <div className="lg:col-span-2 lg:my-auto">
            <Dog height={30} width={30} />
            <h4 className="mb-4 mt-1">Create your own pets!</h4>
            <p>
              Unleash your creativity with our AI dog icon generator! Select
              your favorite breed, style, color, and action to craft the
              perfect, one-of-a-kind dog icon. And guess what? You can generate
              a whole pack of these delightful icons with ease, bringing
              boundless canine joy to your projects!
            </p>
          </div>
          <video
            muted
            autoPlay
            loop
            className="w-full rounded-lg border lg:col-span-5"
          >
            <source src="/Demo.mp4" />
          </video>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
