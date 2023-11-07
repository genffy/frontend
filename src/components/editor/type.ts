import BaseMonaco, { editor } from "monaco-editor";
import { IExercise } from "@site/src/typings/quiz";
import { Token } from "Tokens";

export type TPosition = {
  line: number;
  column?: number;
};

export type TTokenPosition = {
  start: TPosition;
  end: TPosition;
};

export enum ESupportLanguage {
  MARKDOWN = "markdown",
}

export type TModelWrapper = {
  notInitial?: boolean;

  shown?: boolean;

  readOnly?: boolean;

  tested?: boolean;

  model?: editor.ITextModel;

  filename: string;

  value: string;

  language: ESupportLanguage;
};

export type TEditor = BaseMonaco.editor.IStandaloneCodeEditor;

export interface IQuizEditorValue {
  meta: {
    quiz_id: string;
    course_id: string;
  };
  exercises: IExercise[];
}

export type TTokenWithAny = Token & { [key: string]: any };
