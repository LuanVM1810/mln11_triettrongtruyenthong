import "./FlipCard.css";

type Props = {
  frontHeading1: string;
  frontHeading2: string;
  frontDescription: string;
  backHeading: string;
  backDescription: string;
  specificText: string;
};

const FlipCardSpecific = ({
  frontHeading1,
  frontHeading2,
  frontDescription,
  backHeading,
  backDescription,
  specificText,
}: Props) => {
  return (
    <div className="container">
      <div className="card">
        <div className="front">
          <p className="front-heading px-4 font-harmoni">
            {frontHeading1}{" "}
            <span className="text-triethoc-white">{specificText}</span>
          </p>
          <p className="font-harmoni text-triethoc-brown text-[28px]">
            {frontHeading2}
          </p>
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

export default FlipCardSpecific;
