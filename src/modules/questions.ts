interface IQuestion {
  id: number;
  question: string;
  correctAnswer: string;
  incorrectAnswers: [string, string];
  image?: {  // Optional field to store image data
    src: string;
    alt: string;
  };
}

const questions: IQuestion[] = [
    {
      id: 0,
      question:
        'What is lost in Hawaiian and is also the name of a little girl in a 2002 film which features a alien named Stitch?',
      correctAnswer: 'Lilo',
      incorrectAnswers: ['Lolo', 'Lucy'],
    },
    {
      id: 1,
      question:
        'In the Star Wars universe, what species is Grand Admiral Thrawn?',
      correctAnswer: 'Chiss',
      incorrectAnswers: ['Gungans', 'Pantorans'],
    },
    {
      id: 2,
      question:
        'In SpongeBob SquarePants, what is the name of Sandy Cheek\'s place of residence?',
      correctAnswer: 'Sandy\'s Treedome',
      incorrectAnswers: ['Sandy\'s Bubble', 'Auquatic Reseach Centre'],
    },
    {
      id: 3,
      question:
        'In Rick and Morty from which dimension do Rick and Morty originate from?',
      correctAnswer: 'C-137',
      incorrectAnswers: ['J1977', 'C-136'],
    },
    {
      id: 4,
      question:
        'Which episode from The Amazing World Of Gumball won the Childrens Choice Award at the British Animation Awards in 2016?',
      correctAnswer: 'The Shell',
      incorrectAnswers: ['The Limit', 'The Kids'],
    },
    {
      id: 5,
      question:
        'The song Little April Shower features in which Disney cartoon film?',
      correctAnswer: 'Bambi',
      incorrectAnswers: ['Cinderella', 'Pinocchio'],
    },
    {
      id: 6,
      question: 'What is Dipper\'s real name from Gravity Falls?',
      correctAnswer: 'Mason Pines',
      incorrectAnswers: ['Mable Pines', 'Jason Pines'],
    },
    {
      id: 7,
      question: 'What year was the Disney film A Goofy Movie released?',
      correctAnswer: '1995',
      incorrectAnswers: ['2001', '1997'],
    },
    {
      id: 8,
      question: 'What was the first Disney movie to use CGI?',
      correctAnswer: 'The Black Cauldron',
      incorrectAnswers: ['Tron', 'Fantasia'],
    },
    {
      id: 9,
      question:
        'Butters Stotch, Pip Pirrup, and Wendy Testaburger are all characters in which long running animated TV series?',
      correctAnswer: 'South Park',
      incorrectAnswers: ['The Simpsons', 'Family Guy'],
    },
    {
      id: 10,
      question:
        'The stop motion comedy show Robot Chicken was created by which of the following?',
      correctAnswer: 'Seth Green',
      incorrectAnswers: ['Seth MacFarlane', 'Seth Rogen'],
    },
    {
      id: 11,
      question:
        'Wendy O. Koopa appeared in the Super Mario DIC Cartoons, but what was she known as?',
      correctAnswer: 'Kootie Pie',
      incorrectAnswers: ['Sweetie Pie', 'Wendy Pie'],
    },
    {
      id: 12,
      question: 'Which Family Guy character got his own spin-off show in 2009?',
      correctAnswer: 'Cleveland Brown',
      incorrectAnswers: ['Glenn Quagmire', 'Joe Swanson'],
    },
    {
      id: 13,
      question: 'How many episodes were in season five of Samurai Jack?',
      correctAnswer: '10',
      incorrectAnswers: ['12', '11'],
    },
    {
      id: 14,
      question: 'What is the name of Ruby Rose\'s weapon from RWBY?',
      correctAnswer: 'Crescent Rose',
      incorrectAnswers: ['Thorned Rosebud', 'Magnhild'],
    },
    {
      id: 15,
      question: 'Which city did Anger berate for ruining pizza in Inside Out?',
      correctAnswer: 'San Francisco',
      incorrectAnswers: ['Minnesota', 'California'],
    },
    {
      id: 16,
      question: 'What is Scooby-Doo\'s real name?',
      correctAnswer: 'Scoobert',
      incorrectAnswers: ['Scrappy', 'Shooby'],
    },
    {
      id: 17,
      question:
        'What was Maggie Simpson\'s first canonical word, not including the Tracey Ullman shorts?',
      correctAnswer: 'Daddy.',
      incorrectAnswers: ['Sequel?', 'Rusty!'],
    },
    {
      id: 18,
      question:
        'What Cartoon Network show aired its first episode on November 4th, 2013?',
      correctAnswer: 'Steven Universe',
      incorrectAnswers: ['Adventure Time', 'The Amazing World of Gumball'],
    },
    {
      id: 19,
      question: 'Nickelodeon is owned by what parent company?',
      correctAnswer: 'Viacom',
      incorrectAnswers: ['CBS', 'FOX'],
    },
  ];

export default questions;
