export interface Props {
  title: string;
  description: string;
}

const BioDescription = ({ title, description }: Props) => {
  return (
    <p>
      <b>* {title}:</b> {description}
    </p>
  );
};

export default BioDescription;
