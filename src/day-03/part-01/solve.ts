export const solve = (rawInput: string) => {
  const input = rawInput.split('\n').map((binary) => binary.split(''));

  const frequencyRates: Record<string, number>[] = [];
  for (let binary of input) {
    for (let position in binary) {
      if (frequencyRates[position] === undefined) {
        frequencyRates.push({});
      }

      const bit = binary[position];
      frequencyRates[position][bit] = (frequencyRates[position][bit] || 0) + 1;
    }
  }

  let epsilonBinary = [];
  let gammaBinary = [];
  for (let bitsFrequencies of frequencyRates) {
    const sortableFrequencies = Object.entries(bitsFrequencies);

    sortableFrequencies.sort(([_, frequencyA], [__, frequencyB]) => frequencyB - frequencyA);
    const [[mostFrequentBit]] = sortableFrequencies;
    const [lessFrequentBit] = sortableFrequencies[sortableFrequencies.length - 1];

    epsilonBinary.push(lessFrequentBit);
    gammaBinary.push(mostFrequentBit);
  }

  const epsilonRate = parseInt(epsilonBinary.join(''), 2);
  const gammaRate = parseInt(gammaBinary.join(''), 2);

  return epsilonRate * gammaRate;
};
