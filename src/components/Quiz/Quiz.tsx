import { useEffect, useState } from "react";
import NewsImage from "../../assets/Background trang bạn học triết.png";
import { data1 } from "../../constants";
import NenKetQua from "../../assets/nền kết quả_ 1.png";
import { IoMdHome } from "react-icons/io";
import { NavLink } from "react-router-dom";

interface Question {
  question: string;
  option1: string;
  option2: string;
  option3: string;
  ans: number;
}

const Quiz = () => {
  const [index, setIndex] = useState(0);
  let question: Question | null = data1[index];
  const [chooseAnswer, setChooseAnswer] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean>();
  const [lock, setLock] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [percent, setPercent] = useState("0%");
  const [result, setResult] = useState<boolean>(false);

  useEffect(() => {
    const newPercent = (score / data1.length) * 100 + "%";
    setPercent(newPercent);
  }, [score]);

  const checkAnswer = (ans: number) => {
    if (lock == false) {
      if (question?.ans === ans) {
        setChooseAnswer(ans);
        setIsCorrect(true);
        setLock(true);
        setScore((prev) => prev + 1);
      } else {
        setChooseAnswer(ans);
        setIsCorrect(false);
        setLock(true);
      }
    }
  };

  const nextQuestion = async () => {
    if (index == data1.length - 1) {
      question = null;
      await setResult(true);
      return;
    }
    setIndex(index + 1);
    setChooseAnswer(null);
    setIsCorrect(undefined);
    setLock(false);
  };
  console.log(percent);

  return (
    <div className="pt h-screen lg:max-w-full">
      <div
        className="h-screen flex justify-center items-center bg-contain lg:bg-center lg:bg-cover duration-500 ease-in"
        style={{
          backgroundImage: `url(${NewsImage})`,
        }}
      >
        <div className="bg-triethoc-green shadow-btn w-[700px] max-w-[1000px] mx-4 px-4 lg:px-6 py-4 lg:py-6 rounded-[20px]">
          {result === true ? (
            <div className="lg:grid lg:grid-cols-2 ">
              <div className="h-[220px] lg:h-full flex items-center justify-center">
                <img className="" src={NenKetQua} alt="" />
              </div>
              <div>
                <div className="font-harmoni text-center text-[40px] lg:text-[50px] text-triethoc-brown">
                  Kết quả của bạn
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-[18px] lg:text-[28px] text-white">
                    {score}/{data1.length} Câu đúng
                  </div>
                  <div className="font-bold text-black/80 px-3 py-1 uppercase bg-triethoc-white rounded-[9px]">
                    Cấp 1
                  </div>
                </div>
                <div className="w-[100%] relative h-[13px] bg-triethoc-white mt-5 rounded-[20px]">
                  <div
                    className={`w-[${percent}] absolute bg-triethoc-brown h-[13px] rounded-[20px]`}
                  ></div>
                </div>
                <div className="mt-5 text-white">
                  Những cá nhân hướng ngoại sẵn sàng tận hưởng các hoạt động
                  nhóm và coi trọng việc tương tác xã hội. Họ có xu hướng nhiệt
                  tình, hướng ngoại và thể hiện sự hào hứng của mình.
                </div>

                <div className="flex justify-end mt-5">
                  <NavLink to="/">
                    <button className="flex items-center p-2 bg-triethoc-white rounded-[10px] gap-1">
                      <IoMdHome size={18} color="black" />
                      Về trang chủ
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
          ) : (
            <>
              <div className="flex justify-center">
                <p className="bg-triethoc-white px-4 py-2 mb-4 rounded-md text-black/80 font-bold">
                  Cấp 1
                </p>
              </div>
              <p className="uppercase text-triethoc-brown font-bold mb-4">
                {index + 1}. {question?.question}
              </p>
              <ul className="text-white">
                <li
                  onClick={() => {
                    checkAnswer(1);
                  }}
                  className={` ${
                    chooseAnswer == 1 && isCorrect == true && "bg-green-500"
                  }  ${
                    chooseAnswer == 1 && isCorrect == false && "bg-[#ff4a4a] "
                  } bg-[#546D68] mb-4 lg:mb-6 p-2 lg:p-4 rounded-[13px] border-2 border-white cursor-pointer`}
                >
                  a. {question?.option1}
                </li>
                <li
                  onClick={() => {
                    checkAnswer(2);
                  }}
                  className={` ${
                    chooseAnswer == 2 && isCorrect == true && "bg-green-500"
                  }  ${
                    chooseAnswer == 2 && isCorrect == false && "bg-[#ff4a4a]"
                  } bg-[#546D68] mb-4 lg:mb-6 p-2 lg:p-4 rounded-[13px] border-2 border-white cursor-pointer`}
                >
                  b. {question?.option2}
                </li>
                <li
                  onClick={() => {
                    checkAnswer(3);
                  }}
                  className={` ${
                    chooseAnswer == 3 && isCorrect == true && "bg-green-500"
                  }  ${
                    chooseAnswer == 3 && isCorrect == false && "bg-[#ff4a4a]"
                  } bg-[#546D68] mb-4 lg:mb-6 p-2 lg:p-4 rounded-[13px] border-2 border-white cursor-pointer`}
                >
                  c. {question?.option3}
                </li>
              </ul>
              <div className="flex justify-end mb-4">
                <button
                  disabled={chooseAnswer === null ? true : false}
                  onClick={nextQuestion}
                  className={`${
                    chooseAnswer === null && "cursor-not-allowed bg-opacity-25"
                  } px-6 py-2 bg-triethoc-white font-bold rounded-[13px] text-black/80`}
                >
                  Tiếp
                </button>
              </div>
              <div className="text-white text-center">
                {index + 1} trong {data1.length} câu hỏi
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
