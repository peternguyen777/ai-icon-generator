import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const Testimonials = () => {
  return (
    <section className="container px-4 pt-16 sm:px-8">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-left ">What our users say</h2>
        <div className="mt-10 grid grid-cols-1 gap-10 lg:min-h-[250px] lg:grid-cols-3 lg:gap-6">
          <div className="ml-5 flex flex-col justify-between border-l-2">
            <blockquote className="pl-6 italic">
              &quot;I&apos;m seriously impressed with the AI dog icon generator!
              It&apos;s unbelievably intuitive and delivers the cutest dog icons
              that instantly elevate my design projects. It&apos;s like having a
              secret weapon for adding a touch of charm and character to
              everything I create!&quot;
            </blockquote>
            <div className="mt-4 flex -translate-x-5 items-center gap-4 lg:mt-0">
              <Avatar className="h-10 w-10">
                <AvatarImage src="/05.png" alt="Sophia Miller" />
                <AvatarFallback>SM</AvatarFallback>
              </Avatar>
              <p>Sophia Miller</p>
            </div>
          </div>
          <div className="ml-5 flex flex-col justify-between border-l-2">
            <blockquote className="pl-6 italic">
              &quot;The AI dog icon generator site is a total joy to use!
              It&apos;s a creative powerhouse that effortlessly turns my ideas
              into the most adorable dog-themed graphics. I can&apos;t thank the
              creators enough for making my design work so much more fun and
              appealing!&quot;
            </blockquote>
            <div className="mt-4 flex -translate-x-5 items-center gap-4 lg:mt-0">
              <Avatar className="h-10 w-10">
                <AvatarImage src="/03.png" alt="Sophia Miller" />
                <AvatarFallback>SM</AvatarFallback>
              </Avatar>
              <p>Sophia Miller</p>
            </div>
          </div>
          <div className="ml-5 flex flex-col justify-between border-l-2">
            <blockquote className="pl-6 italic">
              &quot;I can&apos;t contain my excitement about the AI dog icon
              generator! It&apos;s a tail-waggingly brilliant tool that
              effortlessly crafts the most heart-melting dog icons, making my
              design projects feel like a walk in the park.&quot;
            </blockquote>
            <div className="mt-4 flex -translate-x-5 items-center gap-4 lg:mt-0">
              <Avatar className="h-10 w-10">
                <AvatarImage src="/04.png" alt="Daniel Lee" />
                <AvatarFallback>SM</AvatarFallback>
              </Avatar>
              <p>Daniel Lee</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
