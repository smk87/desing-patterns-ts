/*
Liskov Substitution - Alson known as substitutability. You should be able to use a subclass in place of its parent class. In other words, A subclass should be used wherever it's base class can be used.
*/

export class QuizQuestion {
	private _question: string;
	private _answer1: string;
	private _answer2: string;
	private _answer3: string | null;
	private _answer4: string | null;
	private _correctAnswer: number;

	constructor(
		question: string,
		ans1: string,
		ans2: string,
		ans3: string | null,
		ans4: string | null,
		correctAns: number
	) {
		this._question = question;
		this._answer1 = ans1;
		this._answer2 = ans2;
		this._answer3 = ans3;
		this._answer4 = ans4;
		this._correctAnswer = correctAns;
	}

	public get question(): string {
		return this._question;
	}

	public get answer1(): string {
		return this._answer1;
	}

	public get answer2(): string {
		return this._answer2;
	}

	public get answer3(): string | null {
		return this._answer3;
	}

	public get answer4(): string | null {
		return this._answer4;
	}

	public get correctAnswer(): number {
		return this._correctAnswer;
	}
}

export class TrueFalseQuestion extends QuizQuestion {
	constructor(question: any) {
		super(question, 'TRUE', 'FALSE', null, null, 1);
	}
}

function formatQuestion(quizQuestion: QuizQuestion) {
	console.log(quizQuestion.question);
	console.log(`1. ${quizQuestion.answer1}`);
	console.log(`2. ${quizQuestion.answer2}`);
	console.log(`3. ${quizQuestion.answer3}`);
	console.log(`4. ${quizQuestion.answer4}`);
}

let quizQuestion = new QuizQuestion('Which framework is using TypeScript', 'React', 'Vue', 'Angular', 'Cycle', 3);
// formatQuestion(quizQuestion);

let trueFalseQuestion = new TrueFalseQuestion('TypeScript is a superset of JavaScript');
formatQuestion(trueFalseQuestion); // Violation - TruFalseQuestion has only 2 answer options instead of 4. The solution is not to use inheritance always
