import { MdDone } from "react-icons/md";

const TruncatedText2 = ({ text, maxLength }) => {
  const length = maxLength ? maxLength : text.length;
  let truncatedText = "";
  if (text?.length >= maxLength) {
    truncatedText = text.substring(0, length);
    const lastSpaceIndex = truncatedText.lastIndexOf(" ");

    if (lastSpaceIndex !== -1 && lastSpaceIndex < maxLength - 1) {
      truncatedText = truncatedText.slice(0, lastSpaceIndex) + "...";
    } else {
      truncatedText += "...";
    }
  } else {
    truncatedText = text;
  }
  const textLines = truncatedText.split(/\n/);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
      {textLines.map((line, index) => (
        <span key={index} style={{display:"flex", alignItems:"center", gap:"15px"}}>
          <span>
            <MdDone style={{color:"#29F0B4"}}/>
          </span>
          <span>{line}</span>
        </span>
      ))}
    </div>
  );
};

export default TruncatedText2;
