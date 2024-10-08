import "./FlipCard.css";

type Props = {
  frontHeading: string;
  frontDescription: string;
  backHeading: string;
  backDescription: string;
};

const FlipCard = ({
  frontHeading,
  frontDescription,
  backHeading,
  backDescription,
}: Props) => {
  return (
    <div className="container">
      <div className="card">
        <div className="front">
          <p className="front-heading">{frontHeading}</p>
          <p className="px-4">{frontDescription}</p>
          <div className="font-bold lg:hidden">Nhấn để xem ví dụ</div>
        </div>
        <div className="back">
          <p className="back-heading">{backHeading}</p>
          <p className="px-4">{backDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
