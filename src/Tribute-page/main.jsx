import React from "react";

const Data = [
  { year: "1887", description: "Born in Erode, Mysore, India" },
  {
    year: "1889",
    description: `Moved to Kanchipuram, Chennai due to smallpox
    outbreak.`,
  },
  {
    year: "1892",
    description: `enrolled in local school, his family enlisted a
  local constable to make sure he attended school.`,
  },
  {
    year: "1897",
    description: `passed his primary examinations in English,
  Tamil, geography, and arithmetic with the best scores in the
  district. That year, Ramanujan entered Town Higher Secondary School,
  where he encountered formal mathematics for the first time.`,
  },
  {
    year: "1904",
    description: `independently developed and investigated the
  Bernoulli numbers and calculated the Euler–Mascheroni constant up to
  15 decimal places, graduated from Town Higher Secondary School, was
  awarded the K. Ranganatha Rao prize for mathematics by the school's
  headmaster, Krishnaswami Iyer.`,
  },
  {
    year: "1906",
    description: `Ramanujan failed his Fellow of Arts exam in
  December 1906 and again a year later. Without an FA degree, he left
  college and continued to pursue independent research in mathematics,
  living in extreme poverty and often on the brink of starvation.`,
  },
  {
    year: "1910",
    description: `after a meeting between the 23-year-old
  Ramanujan and the founder of the Indian Mathematical Society, V.
  Ramaswamy Aiyer, Ramanujan began to get recognition in Madras's
  mathematical circles, leading to his inclusion as a researcher at
  the University of Madras.`,
  },
  {
    year: "1911",
    description: `In his 17-page paper "Some Properties of
  Bernoulli's Numbers", Ramanujan gave three proofs, two corollaries
  and three conjectures.`,
  },
  {
    year: "1913",
    description: `Received a letter from Hardy expressing interest
  in his work, adding that it was "essential that I should see proofs
  of some of your assertions". He refused to leave his country to "go
  to a foreign land"`,
  },
  {
    year: "1914",
    description: `Traveled to England by ship, leaving his wife to
  stay with his parents in India. Hardy had already received 120
  theorems from Ramanujan in the first two letters, but there were
  many more results and theorems in the notebooks. Hardy saw that some
  were wrong, others had already been discovered, and the rest were
  new breakthroughs. Ramanujan left a deep impression on Hardy and
  Littlewood. Littlewood commented, "I can believe that he's at least
  a Jacobi", while Hardy said he "can compare him only with Euler or
  Jacobi."`,
  },
  {
    year: "1916",
    description: `was awarded a Bachelor of Arts by Research
  degree(the predecessor of the PhD degree) for his work on highly
  composite numbers, sections of the first part of which had been
  published the preceding year in the Proceedings of the London
  Mathematical Society. The paper was more than 50 pages long and
  proved various properties of such numbers. Hardy disliked this topic
  area but remarked that though it engaged with what he called the
  'backwater of mathematics', in it Ramanujan displayed 'extraordinary
  mastery over the algebra of inequalities'.`,
  },
  {
    year: "1917",
    description: "was elected to the London Mathematical Society.",
  },
  {
    year: "1918",
    description: `was elected a Fellow of the Royal Society, the
  second Indian admitted, after Ardaseer Cursetjee in 1841. At age 31,
  Ramanujan was one of the youngest Fellows in the Royal Society's
  history. He was elected "for his investigation in elliptic functions
  and the Theory of Numbers." On 13 October 1918, he was the first
  Indian to be elected a Fellow of Trinity College, Cambridge.`,
  },
  {
    year: "1919",
    description: ` was diagnosed with tuberculosis and a severe
  vitamin deficiency, and confined to a sanatorium. He returned to
  Kumbakonam, Madras Presidency`,
  },
  {
    year: "1920",
    description: `died at the age of 32. After his death, his
  brother Tirunarayanan compiled Ramanujan's remaining handwritten
  notes, consisting of formulae on singular moduli, hypergeometric
  series and continued fractions.`,
  },
];

function Information() {
  return (
    <div id="tribute-info">
      <h3>Here's a timeline of Dr. Srinivasa Ramanujan's life:</h3>
      <div>
        <ul>
          {Data.map((event, index) => (
            <li key={index}>
              <span>{event.year}</span> - {event.description}
            </li>
          ))}
        </ul>
      </div>
      <q>
        An equation means nothing to me unless it expresses a thought of God.
      </q>
      <p>-- Dr. Srinivas Ramanujan</p>
    </div>
  );
}

export default Information;
