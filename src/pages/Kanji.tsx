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
  console.log(allKanji);

  return <div>Kanji</div>;
}

export default Kanji;
