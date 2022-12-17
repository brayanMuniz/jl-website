import Line from "../Line";

import { Typography } from "@mui/material";

function Home(props: { lyricsLines: Array<any> }) {
  return (
    <div className="Home">
      {props.lyricsLines.map((lineData, idx) => {
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

export default Home;
