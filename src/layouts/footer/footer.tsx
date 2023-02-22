import Logo from "../../assets/Logo.svg";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-12 pb-2">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
          Our vision is to create a community of like-minded people who share in the mission of health and wellness for all. We owe it to ourselves and our families to be healthy in mind, body, and spirit.
          </p>
          
        </div>
        <div className="mt-16 basis-1/4  md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-2">Facebook</p>
          <p className="my-2">Instagram</p>
          <p>Twitter</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          
          <p className="my-2">(353)123-456-789</p>
        </div>
      </div>
      <p className="text-center">
        © Igor Sirghii. All Rights Reserved.
        </p>
    </footer>
  );
};

export default Footer;
