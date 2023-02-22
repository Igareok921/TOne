import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "../../assets/Logo.svg";
import Link from "./link";
import { SelectedPage } from "../../shared-components/types"
import UseMediaQuery from "../../hooks/useMediaQuery";
import ActionButton from "../../shared-components/ActionButton";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const flexBetween = "flex items-center justify-between";
  const isAboveMediumScreens = UseMediaQuery("(min-width:1060px)");
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const navBarBackground = isTopOfPage ? "" : " bg-primary-100 drop-shadow";
  
  
  
  return (
    <nav>
      <div
        className={`${navBarBackground}${flexBetween} fixed top-0 z-30 w-full py-6`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16 `}>
            {/* ⬇️⬇️⬇️ LEFT SIDE NAVBAR ⬇️⬇️⬇️ */}
            <AnchorLink href={`#${SelectedPage.Home}`}>
              <img src={Logo} alt="logo" 
              onClick={() => setSelectedPage(SelectedPage.Home)}
              />
            </AnchorLink>
            

            {/* 👌⬇️⬇️⬇️ RIGHT SIDE NAVBAR ⬇️⬇️⬇️👌 */}

            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-full`}>
                <div className={`${flexBetween} gap-8 text-sm`}>
                  <Link
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Benefits"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Our CLasses"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Contact Us"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>
                <div className={`${flexBetween} gap-8 `}>
                  <p>Sign In</p>
                  <ActionButton setSelectedPage={setSelectedPage}>
                    Become a Member
                  </ActionButton>
                </div>
              </div>
            ) : (
              <button
                className="rounded-full bg-secondary-600 p-2 "
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* 👌⬇️⬇️⬇️ SMALL SCREENS MENU MODAL ⬇️⬇️⬇️👌 */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100">
          {/* 👌⬇️⬇️⬇️ CLOSE ICON ⬇️⬇️⬇️👌 */}
          <div className="  flex justify-end p-12 ">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-secondary-600" />
            </button>
          </div>

          {/* 👌⬇️⬇️⬇️ MENU ITEMS ⬇️⬇️⬇️👌 */}
          <div className=" ml-[33%] flex flex-col gap-10 text-2xl ">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Benefits"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Our CLasses"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Contact Us"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
