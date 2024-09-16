import { useState } from "react";

const Chapter = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const text = `Coming Soon...`;

  // Fungsi untuk memotong kalimat jika panjang
  const truncatedText =
    text.length > 300 ? text.substring(0, 300) + "..." : text;

  return (
    <div className="chapter">
      <div className="chapter-container">
        <div className="chapter-card">
          <div className="card-1">
            <div className="title-chap">
              <h1>Chapter 002:  Bertemu Alesha</h1>
              <p>3 Januari 2024</p>
            </div>
            <div className="chapter-kalimat">
              <p>{isExpanded ? text : truncatedText}</p>
              <button className="btn" onClick={toggleExpand}>
                {isExpanded ? "Lebih sedikit" : "Lebih banyak..."}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chapter;
