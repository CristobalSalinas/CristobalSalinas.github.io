import fotocv from "../assets/images/fotocv.jpeg";

const PresentationCard = () => {
  return (
    <div className="justify-between sm:flex">
      <div>
        <h1 className="text-3xl font-bold sm:text-5xl">Cristóbal Salinas</h1>
        <p>Full-stack / Mobile / Indie developer</p>
      </div>
      <div className="flex justify-center sm:justify-start">
        <img
          className="rounded-full"
          height={100}
          width={100}
          src={fotocv.src}
        />
      </div>
    </div>
  );
};

export default PresentationCard;
