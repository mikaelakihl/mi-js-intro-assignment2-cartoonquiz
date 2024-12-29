/* eslint-disable quotes */
interface IQuestion {
  id: number;
  question: string;
  correctAnswer: string;
  incorrectAnswers: [string, string];
  image?: {
    // Optional field to store image data
    src: string;
    alt: string;
  };
}

const questions: IQuestion[] = [
  {
    id: 0,
    question: 'What is the name of SpongeBob SquarePants best friend?',
    correctAnswer: 'Patrick Star',
    incorrectAnswers: ['Squidward Tentacles', 'Mr. Krabs'],
  },
  {
    id: 1,
    question: 'Which city does Batman protect in the animated series?',
    correctAnswer: 'Gotham City',
    incorrectAnswers: ['Metropolis', 'Star City'],
  },
  {
    id: 2,
    question: 'In Pokémon, what is the evolved form of Pikachu?',
    correctAnswer: 'Raichu',
    incorrectAnswers: ['Pichu', 'Jolteon'],
  },
  {
    id: 3,
    question:
      "What is the name of Dexter's older sister in 'Dexter's Laboratory'?",
    correctAnswer: 'Dee Dee',
    incorrectAnswers: ['Lily', 'Mandy'],
  },
  {
    id: 4,
    question:
      'What is lost in Hawaiian and is also the name of a little girl in a 2002 film which features a alien named Stitch?',
    correctAnswer: 'Lilo',
    incorrectAnswers: ['Lolo', 'Lucy'],
  },
  {
    id: 5,
    question:
      "Who is the villain in 'The Powerpuff Girls' known for his red skin and sinister demeanor?",
    correctAnswer: 'Him',
    incorrectAnswers: ['Dr. X', 'Professor Utonium'],
  },
  {
    id: 6,
    question:
      'In Avatar: The Last Airbender, what element does Aang master last?',
    correctAnswer: 'Fire',
    incorrectAnswers: ['Earth', 'Water'],
  },
  {
    id: 7,
    question: "What is the name of Ash Ketchum's hometown?",
    correctAnswer: 'Pallet Town',
    incorrectAnswers: ['Cerulean City', 'Viridian City'],
  },
  {
    id: 8,
    question:
      "In Tom and Jerry, who often gets hurt as a result of Tom's antics?",
    correctAnswer: 'Tom',
    incorrectAnswers: ['Jerry', 'Spike'],
  },
  {
    id: 9,
    question:
      "In 'Adventure Time,' who is Finn's best friend and adoptive brother?",
    correctAnswer: 'Jake the Dog',
    incorrectAnswers: ['Marceline', 'BMO'],
  },
  {
    id: 10,
    question: "In Futurama, who is Fry's one-eyed love interest?",
    correctAnswer: 'Leela',
    incorrectAnswers: ['Amy', 'Linda'],
  },
  {
    id: 11,
    question: "In 'South Park,' what is Kenny known for?",
    correctAnswer: 'Always dying in episodes',
    incorrectAnswers: ['Being the smartest kid', 'Inventing schemes'],
  },
  {
    id: 12,
    question:
      "In 'Courage the Cowardly Dog,' where do Courage and his owners live?",
    correctAnswer: 'Nowhere',
    incorrectAnswers: ['Somewhere', 'Middle-of-Nowhere'],
  },
  {
    id: 13,
    question: 'In The Smurfs, who is the villain trying to capture the Smurfs?',
    correctAnswer: 'Gargamel',
    incorrectAnswers: ['Azrael', 'Brainy'],
  },
  {
    id: 14,
    question: "In The Flintstones, what is the name of Fred's wife?",
    correctAnswer: 'Wilma',
    incorrectAnswers: ['Betty', 'Pebbles'],
  },
  {
    id: 15,
    question: "Who is the main villain in 'Kim Possible'?",
    correctAnswer: 'Dr. Drakken',
    incorrectAnswers: ['Shego', 'Monkey Fist'],
  },
  {
    id: 16,
    question: "What is Scooby-Doo's real name?",
    correctAnswer: 'Scoobert',
    incorrectAnswers: ['Scrappy', 'Shooby'],
  },
  {
    id: 17,
    question:
      'In The Simpsons, what does Homer often say when something goes wrong?',
    correctAnswer: "D'oh!",
    incorrectAnswers: ['Woo-hoo!', 'Mmm... donuts!'],
  },
  {
    id: 18,
    question:
      'In Rick and Morty, what does Rick often use to travel between dimensions?',
    correctAnswer: 'The Portal Gun',
    incorrectAnswers: ['The Time Box', 'The Dimensional Key'],
  },
  {
    id: 19,
    question: "What is the name of the villain in 'The Lion King'?",
    correctAnswer: 'Scar',
    incorrectAnswers: ['Mufasa', 'Zazu'],
  },
];

export default questions;
