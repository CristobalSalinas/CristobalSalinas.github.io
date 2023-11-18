import BioDescription from "./BioDescription";

export default function Bio() {
  const bioList = [
    {
      title: "1996",
      description: "Nacido en Viña del mar.",
    },
    {
      title: "2018",
      description: "Titulado de ingeniería en informática Duoc Uc.",
    },
    {
      title: "2019",
      description: "Evualueserve, Full-Stack developer.",
    },
    {
      title: "2021",
      description: "Jumpitt Labs, Full-Stack developer.",
    },
    {
      title: "2023",
      description: "Trabajando como Freelancer e Indie Developer.",
    },
  ];

  return (
    <>
      <h2 className="mb-3 mt-5 text-lg">
        <u>Bio</u>
      </h2>
      <div className="w-full">
        <ul>
          {bioList.map(bio => (
            <li key={bio.title}>
              <BioDescription title={bio.title} description={bio.description} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
