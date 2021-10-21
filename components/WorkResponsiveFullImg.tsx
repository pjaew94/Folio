import Image from "next/image";

const WorkResponsiveFullImg: React.FC<{
  img1: string;

  img1Blur: string;
  margin: boolean;
}> = ({ img1, img1Blur, margin }) => {
  return (
    <div className={`pr-6 ${margin && 'mb-12 3xl:mb-28'}`}>
      <Image
        className="object-contain w-full relative "
        src={img1}
        alt=""
        height={189}
        width={350}
        layout="responsive"
        placeholder="blur"
        blurDataURL={img1Blur}
      />
    </div>
  );
};

export default WorkResponsiveFullImg;

