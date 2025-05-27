import { demos } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
import { SiSpine } from "react-icons/si";

const Demos = () => {
  return (
    <Section id="demos">
      <div className="container relative z-2">
        <Heading className="md:max-w-md lg:max-w-2xl" title="Demos" />

        <div className="flex flex-wrap gap-10 mb-10">
          {demos.map((item) => {
            const Wrapper = item.comingSoon ? "div" : "a";

            return (
              <Wrapper
                key={item.id}
                {...(!item.comingSoon && {
                  href: item.youtubeUrl,
                  target: "_blank",
                  rel: "noopener noreferrer",
                })}
                className={`block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem] ${
                  item.comingSoon ? "cursor-not-allowed" : ""
                }`}
                style={{
                  backgroundImage: `url(${item.backgroundUrl})`,
                }}
              >
                <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                  <h5 className="h5 mb-5">{item.title}</h5>
                  <p className="body-2 mb-6 text-n-3">{item.text}</p>
                  <div className="flex items-center mt-auto">
                    <SiSpine size={48} />
                    <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                      {item.comingSoon ? "Coming Soon" : "Explore more"}
                    </p>
                    {!item.comingSoon && <Arrow />}
                  </div>
                </div>

                {item.light && <GradientLight />}

                <div
                  className="absolute inset-0.5 bg-n-8 group"
                  style={{ clipPath: "url(#benefits)" }}
                >
                  <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                    {item.imageUrl && (
                      <img
                        src={item.imageUrl}
                        width={380}
                        height={362}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>

                  {item.comingSoon && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 text-white font-bold text-xl opacity-0 hover:opacity-100 transition-opacity">
                      Coming Soon
                    </div>
                  )}
                </div>

                <ClipPath />
              </Wrapper>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default Demos;
