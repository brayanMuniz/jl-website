import CardData from "../CardData";
import { Grid } from "@mui/material";

function Kanji(props: { lyricsLines: Array<any> }) {
  let allKanji: Array<any> = [];
  props.lyricsLines.forEach((line) => {
    if (line !== "") {
      if (line.cards.length > 0) {
        line.cards.forEach((card: any) => {
          if (card.kana !== card.word)
            if (!allKanji.includes(card)) allKanji.push(card);
        });
      }
    }
  });

  return (
    <Grid container spacing={1}>
      {allKanji.map((card, idx) => {
        return (
          <Grid item key={idx}>
            <CardData
              key={idx}
              word={card.word}
              kana={card.kana}
              definitions={card.definitions}
              conjugation={card.conjugation}
            ></CardData>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default Kanji;
