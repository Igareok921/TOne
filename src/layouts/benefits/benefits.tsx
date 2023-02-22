import ActionButton from "../../shared-components/ActionButton";
import { motion } from "framer-motion";
import HText from "../../shared-components/HText";
import { SelectedPage } from "../../shared-components/types";
import BenefitsPageGraphic from "../../assets/BenefitsPageGraphic.png";
import { benefits } from "./cardsData";
import DetailBenifits from "./detailBenifits";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* 👌⬇️⬇️⬇️ HEADER  ⬇️⬇️⬇️👌 */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>MORE THAN JUST GYM.</HText>
          <p className="my-5 text-sm">
            We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. We provide true
            care into each and every member.
          </p>
        </motion.div>
        {/* 👌⬇️⬇️⬇️ BENEFITS  ⬇️⬇️⬇️👌 */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit) => (
            <DetailBenifits
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* 👌⬇️⬇️⬇️ GRAPHICS AND DESCRIPTION  ⬇️⬇️⬇️👌 */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* 👌⬇️⬇️⬇️ GRAPHIC  ⬇️⬇️⬇️👌 */}
          <img
            className="mx-auto"
            alt="benefits-page-graphic"
            src={BenefitsPageGraphic}
          />

          {/* 👌⬇️⬇️⬇️ DESCRIPTION  ⬇️⬇️⬇️👌 */}
          <div>
            {/* 👌⬇️⬇️⬇️ TITLE  ⬇️⬇️⬇️👌 */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                    MILLIONS OF HAPPY MEMBERS GETTING{" "}
                    <span className="text-primary-500">FIT</span>
                  </HText>
                </motion.div>
              </div>
            </div>

            {/* 👌⬇️⬇️⬇️ DESCRIPTION  ⬇️⬇️⬇️👌 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                There is no limit to what you are capable of, physically and
                mentally. These Dance, HIIT, and Tone workouts are led by
                Broadway performers, professional dancers, and former Rockettes
                - all trainers certified through nationally accredited
                organizations.
              </p>
              <p className="mb-5">
                Years of pushing our limits in performance have given us an
                intuitive understanding of what it takes to get to a high level
                of athleticism and strength, which we share with our clients.
                Join us for classes at our studio, live classes on Zoom, on
                demand, or set up a personal training session!
              </p>
            </motion.div>

            {/* 👌⬇️⬇️⬇️ BUTTON  ⬇️⬇️⬇️👌 */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
