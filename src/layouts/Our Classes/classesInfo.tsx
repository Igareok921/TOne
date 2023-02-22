type Props = {
  name: string;
  description?: string;
  image: string;
};

const ClassesInfo = ({ name, description, image }: Props) => {
  const overlayStyles = `p-5 absolute z-30 flex
    h-[50%] w-[100%]  flex-col items-center justify-center
     bg-gray-600 text-center text-white
    opacity-0 transition duration-500 hover:opacity-90`;

  return (
    <li className=" relative inline-block h-[auto] w-[100%] xs:h-[auto] xs:w-[100%]">
      <div className={overlayStyles}>
        <p className="text-2xl">{name}</p>
        <p className="mt-5">{description}</p>
      </div>
      <img alt={`${image}`} src={image} />
    </li>
  );
};

export default ClassesInfo;