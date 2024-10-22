import { FaHandPaper, FaHandPeace, FaHandRock } from "react-icons/fa";
import { useGameStore } from "./UseGameStore";
import "./App.css";
import { FaArrowRightLong } from "react-icons/fa6";
function App() {
  const {
    playerChoice,
    computerChoice,
    result,
    setPlayerChoice,
    setComputerChoice,
    calculateResult,
    rulesModal,
    setRulesModal,
  } = useGameStore();

  const handleClick = (choice) => {
    setPlayerChoice(choice);
    setComputerChoice();
    calculateResult();
  };

  const getBorderColorClass = (choice) => {
    switch (choice) {
      case "paper":
        return "border-blue-500";
      case "scissors":
        return "border-yellow-500";
      case "rock":
        return "border-red-500";
    }
  };

  const renderChoiceIcon = (choice) => {
    switch (choice) {
      case "paper":
        return <FaHandPaper className="text-[3rem] opacity-80" />;
      case "scissors":
        return <FaHandPeace className="text-[3rem] opacity-80" />;
      case "rock":
        return <FaHandRock className="text-[3rem] opacity-80" />;

      default:
        return null;
    }
  };

  const playAgainHandle = () => {
    setPlayerChoice("");
    setComputerChoice("");
    calculateResult("");
  };

  return (
    <div className="bg-blue-950 h-auto font-barlow">
      <div className="container p-8 mx-auto">
        <div className="flex items-center justify-between border-4  border-gray-500 p-4 rounded-md">
          <div className="text-white text-xl font-bold">
            <p>ROCK</p>
            <p>PAPER</p>
            <p>SCISSORS</p>
          </div>
          <div className="bg-white px-4  rounded-md text-center ">
            <p>SCORE</p>
            <p className="text-[2.5rem] font-bold opacity-70">12</p>
          </div>
        </div>

        <div className="flex justify-center items-center gap-8">
          {playerChoice && computerChoice ? (
            <div className="my-20 flex justify-center items-center gap-8">
              <div className="flex flex-col items-center justify-center gap-4">
                <div
                  className={`flex items-center justify-center border-[1rem] ${getBorderColorClass(
                    playerChoice
                  )} rounded-full w-36 h-36 bg-white cursor-pointer `}
                >
                  {renderChoiceIcon(playerChoice)}
                </div>
                <p className="text-white">YOU PICKED</p>
              </div>
              <div className="flex flex-col items-center justify-center gap-4">
                <div
                  className={`flex items-center justify-center border-[1rem] ${getBorderColorClass(
                    computerChoice
                  )} rounded-full w-36 h-36 bg-white cursor-pointer `}
                >
                  {renderChoiceIcon(computerChoice)}
                </div>
                <p className="text-white">THE HOUSE PICKED</p>
              </div>
            </div>
          ) : (
            <div className="my-20 relative w-96 min-h-80 flex justify-center items-center">
              <div
                onClick={() => handleClick("paper")}
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex items-center justify-center border-[1rem] border-blue-500 rounded-full w-28 h-28  xs:w-36 xs:h-36 bg-white cursor-pointer"
              >
                <FaHandPaper className="text-[3rem] opacity-80 " />
              </div>
              <div
                onClick={() => handleClick("scissors")}
                className="absolute top-0 left-0 flex items-center justify-center border-[1rem] border-yellow-500 rounded-full w-28 h-28 xs:w-36  xs:h-36 bg-white cursor-pointer"
              >
                <FaHandPeace className="text-[3rem] opacity-80 rotate-45" />
              </div>
              <div
                onClick={() => handleClick("rock")}
                className="absolute top-0 right-0 flex items-center justify-center border-[1rem] border-red-500 rounded-full w-28 h-28 xs:w-36  xs:h-36 bg-white cursor-pointer"
              >
                <FaHandRock className="text-[3rem] opacity-80" />
              </div>
            </div>
          )}
        </div>

        <div className="flex justify-center mb-8 text-2xl">
          {result && (
            <div className="flex flex-col items-center justify-center">
              <p className=" md:text-[3rem] mb-8 blinking-text"> {result}</p>
              <button
                onClick={playAgainHandle}
                className="bg-white px-20 py-2 rounded-md"
              >
                PLAY AGAIN
              </button>
            </div>
          )}
        </div>
        <div className="flex justify-center items-center">
          <button
            onClick={setRulesModal}
            className="text-white text-2xl border px-12 py-2 rounded-lg "
          >
            RULES
          </button>
          {rulesModal && (
            <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
              <button
                onClick={setRulesModal}
                className="absolute top-4 right-4 text-xl font-bold text-red-600"
              >
                X
              </button>
              <div className="relative w-96 h-80 flex justify-center items-center">
                {/* Hand icons */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 flex items-center justify-center border-[1rem] border-blue-500 rounded-full w-28 h-28 bg-white">
                  <FaHandPaper className="text-[3rem] opacity-80 " />
                </div>
                <div className="absolute bottom-0 left-0 flex items-center justify-center border-[1rem] border-yellow-500 rounded-full w-28 h-28 bg-white">
                  <FaHandPeace className="text-[3rem] opacity-80 rotate-45" />
                </div>
                <div className="absolute bottom-0 right-0 flex items-center justify-center border-[1rem] border-red-500 rounded-full w-28 h-28 bg-white">
                  <FaHandRock className="text-[3rem] opacity-80" />
                </div>

                {/* Arrows */}
                <div className="absolute bottom-8 left-[45%] ">
                  <FaArrowRightLong className="text-3xl  opacity-70 rotate-180" />
                  <p>BEATS</p>
                </div>
                <div className="absolute top-[40%] left-[30%] -rotate-[55deg]">
                  <FaArrowRightLong className="text-3xl opacity-70" />
                  <p>BEATS</p>
                </div>
                <div className="absolute top-[40%] right-[30%] -rotate-[305deg]">
                  <FaArrowRightLong className="text-3xl opacity-70" />
                  <p>BEATS</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
