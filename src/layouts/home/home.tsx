
import { SelectedPage } from "../../shared-components/types";
import ActionButton from "../../shared-components/ActionButton";
import HomePageText from "../../assets/HomePageText.png";
import HomePageGraphic from "../../assets/HomePageGraphic.png";
import SponsorTesco from "../../assets/SponsorTesco.png";
import SponsorDID from "../../assets/SponsorDID.png";
import SponsorSuperValu from "../../assets/SponsorSuperValu.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion"
import UseMediaQuery from "../../hooks/useMediaQuery";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = UseMediaQuery("(min-width:1060px)");
  return (
    <section id="home" className="gap-16 bg-gray-20 py-20 md:h-full md:pb- ">
      {/* 👌⬇️⬇️⬇️ IMAGE AND MAIN HEADER ⬇️⬇️⬇️👌 */}
      <motion.div className="mx-auto w-5/6 mt-20 items-center justify-center md:flex md:h-5/6"
      onViewportEnter={()=>setSelectedPage(SelectedPage.Home)}>
        {/* 👌⬇️⬇️⬇️ MAIN HEADER⬇️⬇️⬇️👌 */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* 👌⬇️⬇️⬇️ HEADINGS ⬇️⬇️⬇️👌 */}
          <motion.div className="md:-mt-20" 
          initial="hidden" whileInView="visible"
          viewport={{once: true , amount: 0.5}}
          transition={{duration: 0.5}}
          variants={{hidden:{opacity: 0, x:-100},
          visible: { opacity: 1, x:0}}}>
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext">
                <img src={HomePageText} alt="home-page-text" />
              </div>
            </div>
            <p className="mt-7 text-sm md:text-start">
            Is more than another workout, it's a comprehensive approach to fitness. We pair the ultimate strength and cardio workouts with experiential lighting, sound, and luxury amenities.
            </p>
          </motion.div>
          {/* 👌⬇️⬇️⬇️ ACTION ⬇️⬇️⬇️👌 */}
          <motion.div className="mt-8 flex items-center gap-8 md:justify-start"
          initial="hidden" whileInView="visible"
          viewport={{once: true , amount: 0.5}}
          transition={{delay: 0.2 ,duration: 0.5}}
          variants={{hidden:{opacity: 0, x:-100},
          visible: { opacity: 1, x:0}}}>
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>
            <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </motion.div>
        </div>

        {/* 👌⬇️⬇️⬇️ IMAGE ⬇️⬇️⬇️👌 */}
        <div className="flex basis-5/6 justify-center 
        md:z-10 md:ml-40 md:mt-16 md:justify-items-end">
          <img src={HomePageGraphic} alt="home-page-graphic" />
        </div>
      </motion.div>

      {/* 👌⬇️⬇️⬇️ Sponsors ⬇️⬇️⬇️👌 */}
      {isAboveMediumScreens && (
        <div className="h-[150px] w-full bg-primary-100 py-10 ">
          <div className="mx-auto w-5/6"  >
            <div className="flex w-3/5 items-center justify-between gap-8 mt-10">
              <img src={SponsorTesco} alt="tesco-sponsor" />
              <img src={SponsorDID} alt="did-sponsor" />
              <img src={SponsorSuperValu} alt="supervalu-sponsor" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
