interface IQuestion {
  id: number;
  question: string;
  correctAnswer: string;
  incorrectAnswers: [string, string];
}

const questions: IQuestion[] = [];

export default questions;
