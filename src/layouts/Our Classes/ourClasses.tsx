import { motion } from "framer-motion";
import HText from "../../shared-components/HText";
import ClassesInfo from "../Our Classes/classesInfo";
import { classesInfoData } from "../Our Classes/classesInfoData";
import { ClassType, SelectedPage } from "../../shared-components/types";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import "./swiper.style.css";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>OUR CLASSES</HText>
            <p className="py-5">
              At TOne Fitness we understand what it’s like to begin a fitness
              journey, especially if you’re completely new to fitness or coming
              back to fitness after long a break or an injury. All of our
              beginner/easy classes are set in a relaxed atmosphere where you
              can feel comfortable to go at your own pace.
            </p>
          </div>
        </motion.div>
        <div>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              200: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 50,
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <ul>
              {classesInfoData.map((item: ClassType, index: number) => (
                <SwiperSlide>
                  <ClassesInfo
                    key={`${item.name}-${index}`}
                    name={item.name}
                    description={item.description}
                    image={item.image}
                  />
                </SwiperSlide>
              ))}
            </ul>
          </Swiper>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
