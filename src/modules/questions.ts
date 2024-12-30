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
    image: {
      src: 'question_images/spongebob.webp',
      alt: 'SpongeBob SquarePants',
    },
  },
  {
    id: 1,
    question: 'Which city does Batman protect in the animated series?',
    correctAnswer: 'Gotham City',
    incorrectAnswers: ['Metropolis', 'Star City'],
    image: {
      src: 'question_images/batman.webp',
      alt: 'Batman',
    },
  },
  {
    id: 2,
    question: 'In Pokémon, what is the evolved form of Pikachu?',
    correctAnswer: 'Raichu',
    incorrectAnswers: ['Pichu', 'Jolteon'],
    image: {
      src: 'question_images/pikachu.webp',
      alt: 'Pikachu',
    },
  },
  {
    id: 3,
    question:
      "What is the name of Dexter's older sister in 'Dexter's Laboratory'?",
    correctAnswer: 'Dee Dee',
    incorrectAnswers: ['Lily', 'Mandy'],
    image: {
      src: 'question_images/dexter.webp',
      alt: 'Dexter and older sister',
    },
  },
  {
    id: 4,
    question:
      'What is lost in Hawaiian and is also the name of a little girl in a 2002 film which features a alien named Stitch?',
    correctAnswer: 'Lilo',
    incorrectAnswers: ['Lolo', 'Lucy'],
    image: {
      src: 'question_images/stitch.webp',
      alt: 'Stitch and friend',
    },
  },
  {
    id: 5,
    question:
      "Who is the villain in 'The Powerpuff Girls' known for his red skin and sinister demeanor?",
    correctAnswer: 'Him',
    incorrectAnswers: ['Dr. X', 'Professor Utonium'],
    image: {
      src: 'question_images/powerpuff-girls.webp',
      alt: 'Powerpuff girls fighting villain',
    },
  },
  {
    id: 6,
    question:
      'In Avatar: The Last Airbender, what element does Aang master last?',
    correctAnswer: 'Fire',
    incorrectAnswers: ['Earth', 'Water'],
    image: {
      src: 'question_images/avatar.webp',
      alt: 'Aang flying',
    },
  },
  {
    id: 7,
    question: "What is the name of Ash Ketchum's hometown?",
    correctAnswer: 'Pallet Town',
    incorrectAnswers: ['Cerulean City', 'Viridian City'],
    image: {
      src: 'question_images/ash-ketchum.webp',
      alt: 'Ash Ketchum and Pikachu',
    },
  },
  {
    id: 8,
    question:
      "In Tom and Jerry, who often gets hurt as a result of Tom's antics?",
    correctAnswer: 'Tom',
    incorrectAnswers: ['Jerry', 'Spike'],
    image: {
      src: 'question_images/tom-and-jerry.webp',
      alt: 'Tom and Jerry',
    },
  },
  {
    id: 9,
    question:
      "In 'Adventure Time,' who is Finn's best friend and adoptive brother?",
    correctAnswer: 'Jake the Dog',
    incorrectAnswers: ['Marceline', 'BMO'],
    image: {
      src: 'question_images/adventure-time.webp',
      alt: 'Adventuretime characters',
    },
  },
  {
    id: 10,
    question: "In Futurama, who is Fry's one-eyed love interest?",
    correctAnswer: 'Leela',
    incorrectAnswers: ['Amy', 'Linda'],
    image: {
      src: 'question_images/futurama.webp',
      alt: 'Fry and love interest',
    },
  },
  {
    id: 11,
    question: "In 'South Park,' what is Kenny known for?",
    correctAnswer: 'Always dying in episodes',
    incorrectAnswers: ['Being the smartest kid', 'Inventing schemes'],
    image: {
      src: 'question_images/south-park.webp',
      alt: 'Kenny',
    },
  },
  {
    id: 12,
    question:
      "In 'Courage the Cowardly Dog,' where do Courage and his owners live?",
    correctAnswer: 'Nowhere',
    incorrectAnswers: ['Somewhere', 'Middle-of-Nowhere'],
    image: {
      src: 'question_images/courage-the-cowardly-dog.webp',
      alt: 'Courage the Cowardly Dog',
    },
  },
  {
    id: 13,
    question: 'In The Smurfs, who is the villain trying to capture the Smurfs?',
    correctAnswer: 'Gargamel',
    incorrectAnswers: ['Azrael', 'Brainy'],
    image: {
      src: 'question_images/smurfs.webp',
      alt: 'Villain and smurf',
    },
  },
  {
    id: 14,
    question: "In The Flintstones, what is the name of Fred's wife?",
    correctAnswer: 'Wilma',
    incorrectAnswers: ['Betty', 'Pebbles'],
    image: {
      src: 'question_images/flintstones.webp',
      alt: 'Flintstones family',
    },
  },
  {
    id: 15,
    question: "Who is the main villain in 'Kim Possible'?",
    correctAnswer: 'Dr. Drakken',
    incorrectAnswers: ['Shego', 'Monkey Fist'],
    image: {
      src: 'question_images/kim-possible.webp',
      alt: 'Kim Possible',
    },
  },
  {
    id: 16,
    question: "What is Scooby-Doo's real name?",
    correctAnswer: 'Scoobert',
    incorrectAnswers: ['Scrappy', 'Shooby'],
    image: {
      src: 'question_images/scooby-doo.webp',
      alt: 'Scooby-doo',
    },
  },
  {
    id: 17,
    question:
      'In The Simpsons, what does Homer often say when something goes wrong?',
    correctAnswer: "D'oh!",
    incorrectAnswers: ['Woo-hoo!', 'Mmm... donuts!'],
    image: {
      src: 'question_images/simpsons.webp',
      alt: 'Homer Simpson',
    },
  },
  {
    id: 18,
    question:
      'In Rick and Morty, what does Rick often use to travel between dimensions?',
    correctAnswer: 'The Portal Gun',
    incorrectAnswers: ['The Time Box', 'The Dimensional Key'],
    image: {
      src: 'question_images/rick-and-morty.webp',
      alt: 'Rick and Morty',
    },
  },
  {
    id: 19,
    question: "What is the name of the villain in 'The Lion King'?",
    correctAnswer: 'Scar',
    incorrectAnswers: ['Mufasa', 'Zazu'],
    image: {
      src: 'question_images/lion-king.webp',
      alt: 'Lion King characters',
    },
  },
];

export default questions;
