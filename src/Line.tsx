// components
import CardData, { CardDataProps } from "./CardData";

// mui
import { Typography } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";

interface LineProps {
  lineData: {
    line: string;
    cards: Array<CardDataProps>;
  };
}

function Line(props: LineProps) {
  return (
    <div>
      {props.lineData.cards.map((card, idx) => (
        <Tooltip
          title={
            <CardData
              word={card.word}
              kana={card.kana}
              definitions={card.definitions}
              conjugation={card.conjugation}
            />
          }
          placement="bottom-end"
          key={idx}
        >
          <Typography
            variant="h4"
            display={"inline"}
            sx={{ textDecoration: "underline", margin: 1.5, fontSize: 40 }}
            key={idx}
          >
            {card.word.replace("1. ", "")}
          </Typography>
        </Tooltip>
      ))}
    </div>
  );
}

export default Line;
