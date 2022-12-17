import Home from "./pages/Home";
import Kanji from "./pages/Kanji";
import NoPage from "./pages/NoPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";

// *** Will have to use react store in the future since the process will go from lyrics.txt => server return json => format json ***
import testData from "./testData.json";
let lyricsLines: Array<any> = [];
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
    <BrowserRouter>
      <Routes>
        <Route index element={<Home lyricsLines={lyricsLines} />} />
        <Route path="kanji" element={<Kanji lyricsLines={lyricsLines} />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
