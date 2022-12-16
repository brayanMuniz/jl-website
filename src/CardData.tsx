import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";

export interface CardDataProps {
  word: string;
  kana: string;
  definitions: Array<string>;
  conjugation: [string, string | null, Array<string> | []];
}

function CardData(props: CardDataProps) {
  let orderedDef: Array<string> = [];
  for (let i = 0; i < props.definitions.length; i += 2) {
    let joinedDef = props.definitions[i] + " " + props.definitions[i + 1];
    orderedDef.push(joinedDef);
  }

  const correctWord: string = props.word.replace("1.", "");
  const correctKana: string = props.kana.replace("1.", "");

  return (
    <Card
      sx={{
        width: 400,
      }}
    >
      <CardContent>
        <Typography variant="h1" component="div">
          {correctWord}
        </Typography>
        <Typography color="text.secondary" sx={{ fontSize: 55 }}>
          {correctKana}
        </Typography>
        <ul>
          {orderedDef.map((def) => (
            <li>
              <Typography variant="body2" sx={{ fontSize: 30 }}>
                {def}
              </Typography>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

export default CardData;
