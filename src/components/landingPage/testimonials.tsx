import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const Testimonials = () => {
  return (
    <section className="container flex flex-col items-center px-4 py-16 sm:px-8">
      <h2 className="text-center">What our users say</h2>
      <div className="mt-10 flex max-w-5xl flex-col gap-8 lg:flex-row lg:gap-16">
        <div>
          <blockquote className="morder-l-2 pl-6 italic">
            &quot;I&apos;m seriously impressed with the AI dog icon generator!
            It&apos;s unbelievably intuitive and delivers the cutest dog icons
            that instantly elevate my design projects. It&apos;s like having a
            secret weapon for adding a touch of charm and character to
            everything I create!&quot;
          </blockquote>
          <div className="mt-6 flex items-center gap-4">
            <Avatar className="h-8 w-8">
              <AvatarImage src="/05.png" alt="Sophia Miller" />
              <AvatarFallback>SM</AvatarFallback>
            </Avatar>
            <p>Sophia Miller</p>
          </div>
        </div>
        <div>
          <blockquote className="border-l-2 pl-6 italic">
            &quot;The AI dog icon generator site is a total joy to use!
            It&apos;s a creative powerhouse that effortlessly turns my ideas
            into the most adorable dog-themed graphics. I can&apos;t thank the
            creators enough for making my design work so much more fun and
            appealing!&quot;
          </blockquote>
          <div className="mt-6 flex items-center gap-4">
            <Avatar className="h-8 w-8">
              <AvatarImage src="/03.png" alt="Sophia Miller" />
              <AvatarFallback>SM</AvatarFallback>
            </Avatar>
            <p>Sophia Miller</p>
          </div>
        </div>
        <div>
          <blockquote className="border-l-2 pl-6 italic">
            &quot;I can&apos;t contain my excitement about the AI dog icon
            generator! It&apos;s a tail-waggingly brilliant tool that
            effortlessly crafts the most heart-melting dog icons, making my
            design projects feel like a walk in the park.&quot;
          </blockquote>
          <div className="mt-6 flex items-center gap-4">
            <Avatar className="h-8 w-8">
              <AvatarImage src="/04.png" alt="Sophia Miller" />
              <AvatarFallback>SM</AvatarFallback>
            </Avatar>
            <p>Daniel Lee</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
