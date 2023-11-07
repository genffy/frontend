import { EExerciseType } from "@site/src/constants/quiz";

interface IExerciseMata {
  index?: number;
  type: EExerciseType;
  answer: string[];
}
interface IExerciseOption {
  label: string;
  value: string;
}

interface IMarkDown {
  raw: string;
  tokens?: IMarkDown[];
  type: "blockquote" | "heading" | "code" | "paragraph" | "space" | "list";
  deep?: number;
  lang?: string;
}
interface IExerciseContent {
  extend?: IMarkDown[];
  options?: IExerciseOption[];
}

export interface IExercise {
  title: string;
  meta: IExerciseMata;
  content: IExerciseContent;
}
