// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum,
    dna,
    mutate() {
      do {
        var index = Math.floor(Math.random() * this.dna.length)
        var base = this.dna[index]
        var randomBase = returnRandBase()
        // console.log('base:' + base + ', randombase: ' + randomBase)
      } while (base === randomBase)
      this.dna[index] = randomBase
      return this.dna
    },
    compareDNA(pAequor) {
      let matchCount = 0
      for (let i=0; i < pAequor.dna.length; i++) {
        if (pAequor.dna[i] === this.dna[i]) {
          matchCount++
        }
      }
      let perc = matchCount/pAequor.dna.length * 100.0
      console.log(`specimen #1 and specimen #2 have ${perc}% DNA in common`)
    },
    willLikelySurvive() {
      let count = this.dna.reduce((acc, it) => { return (it === 'C' || it === 'G')? ++acc: acc}, 0)
      let perc = count / this.dna.length * 100
      return perc >= 60 ? true: false
    }
  }
}

/*
var pf = pAequorFactory('5', ['A','C','T','G'])
var pf2 = pAequorFactory('4', ['A','G','T','G'])
pf2.mutate()
pf2.mutate()
pf2.mutate()
pf2.mutate()
console.log(pf2.dna)
// console.log()
pf.compareDNA(pf2)
pf2.willLikelySurvive()
*/

var survivors = []
do {
  let pf = pAequorFactory(survivors.length, mockUpStrand())
  if (pf.willLikelySurvive()) {
    survivors.push(pf)
  }
} while (survivors.length <= 30)

survivors.forEach((survivor) => {
  console.log(survivor.dna)
})