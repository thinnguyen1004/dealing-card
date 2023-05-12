export default function shuffle(cards) {
    return cards.reduceRight(
      (acc, _, i) => {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        const [currentElement] = acc.splice(i, 1);
        acc.splice(randomIndex, 0, currentElement);
        return acc;
      },
      [...cards]
    );
  }
  