import Image from "next/image";

const GalleryPage = () => {
  return (
    <div>
      <h1 className=" text-center text-4xl">Image Optimization</h1>
      <h1 className=" text-center text-2xl">Regular Image</h1>
      <img
        src="https://i.ibb.co.com/fQS0Yh6/images-2.jpg"
        alt="next js img"
        className="mx-auto"
      />
      <h1 className=" text-center text-2xl">Next js Image</h1>
      <Image
        src="https://i.ibb.co/fQS0Yh6/images-2.jpg"
        alt="img"
        width={500}
        height={500}
      />
      <Image
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtnh7pgJUtpZWWtHn-eVA3n1DY6D6WpnGOdA&s"
        alt="img"
        width={500}
        height={500}
      />
    </div>
  );
};

export default GalleryPage;
