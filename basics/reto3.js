function distributeGifts(packOfGifts, reindeers) {
    const numberRegalo = packOfGifts.map(gift=> gift.length);
    const pesoRegalo = numberRegalo.reduce((a,b) => a+b);
    const numRenos =reindeers.map(reno=> reno.length * 2);
    const pesoRenos = numRenos.reduce((a,b)=>a+b)
    console.log(packOfGifts);
    console.log(numberRegalo);
    console.log(pesoRegalo);
    console.log(reindeers);
    console.log(numRenos);
    console.log(pesoRenos);
    return Math.floor(pesoRenos/pesoRegalo)
  } 

  const packOfGifts = ["book", "doll", "ball"]
  const reindeers = ["dasher", "dancer"]
  
  // pack weights 4 + 4 + 4 = 12
  // reindeers can carry (2 * 6) + (2 * 6) = 24
  distributeGifts(packOfGifts, reindeers) // 2
console.log(distributeGifts(packOfGifts,reindeers));