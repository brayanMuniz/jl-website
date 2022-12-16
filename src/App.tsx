import "./App.css";
import Line from "./Line";
import { CardDataProps } from "./CardData";

// mui
import { Typography } from "@mui/material";

import testData from "./testData.json";
interface lineData {
  line: string;
  cards: Array<CardDataProps> | never[];
}
let lyricsLines: Array<lineData | string | any> = [];
Object.entries(testData).forEach((entry) => {
  const [lineIdx, value] = entry;

  if (typeof value == "number") {
    // @ts-ignore
    let temp = testData[value];
    lyricsLines.push(temp);
  } else if (typeof value == "object") {
    lyricsLines.push({
      line: value.line,
      cards: value.cards,
    });
  } else lyricsLines.push("");
});

function App() {
  return (
    <div className="App">
      {lyricsLines.map((lineData, idx) => {
        if (lineData === "") return <br key={idx} />;
        else if (lineData.cards.length === 0)
          return (
            <Typography
              key={idx}
              variant="h4"
              display={"inline"}
              sx={{ margin: 1.5, fontSize: 40 }}
            >
              {lineData.line}
            </Typography>
          );
        else return <Line key={idx} lineData={lineData}></Line>;
      })}
    </div>
  );
}

export default App;
