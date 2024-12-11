import { useState } from "react";
import "./App.css";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "na",
      "Are you sure? 🙁",
      "Really sure? 🙂",
      "firse soch lo! 🙃",
      "Last chance! 😐",
      "Sch m nhi dilaoge? 😃",
      "Dekhlo! 😏",
      "Firse sochlo! 😩",
      "Serious ho? 🫠",
      "Pachtana pdega! 🙌",
      "Apke pss dil nhi h kya! 🥲",
      "Asa mt kro! 🥺",
      "aree 💔",
      "Sch m? 📌",
      "Please 🥹",
      "Is that your final answer? 🫤",
      "You're breaking my heart :(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="centered-container">      
      <div className="valentine-container">
        {yesPressed ? (
          <>
            <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
            <div className="text-container">yay!!! chlo chale 😭</div>
          </>
        ) : (
          <>
            <img
              className="h-[200px]"
              style={{ width: "400x", height: "240px" }}
              src="https://i.pinimg.com/originals/98/25/54/982554743da278c474ae2b78b935ae16.gif"
            />
            <h1 className="text-container">Bangles dila do 🥹</h1>
            <div>
              <button
                className={"yes-button"}
                style={{ fontSize: yesButtonSize }}
                onClick={() => setYesPressed(true)}
              >
                Chlo
              </button>

              <button onClick={handleNoClick} className="no-button">
                {noCount === 0 ? "na" : getNoButtonText()}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
