import Image from "next/image";
import myImage from "../../public/images/image-1.png";
const LearnUseImage = () => {
  return (
    <>
      <Image src={myImage} />
    </>
  );
};

export default LearnUseImage;
