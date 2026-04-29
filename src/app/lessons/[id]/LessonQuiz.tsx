"use client";

import { useState } from "react";

type Question = {
  id: string;
  prompt: string;
  question: string;
  options: string[];
  answer: string;
  explanation: string;
};

type LessonQuizProps = {
  question: Question;
};

export function LessonQuiz({ question }: LessonQuizProps) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const isAnswered = selectedOption !== null;
  const isCorrect = selectedOption === question.answer;

  return (
    <section className="mt-8 rounded-3xl bg-slate-950 p-6 text-white">
      <p className="text-sm font-medium text-emerald-200">当前题目</p>
      <p className="mt-4 text-3xl font-bold">{question.prompt}</p>
      <p className="mt-4 text-base leading-7 text-slate-300">
        {question.question}
      </p>

      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        {question.options.map((option) => {
          const isSelected = selectedOption === option;

          return (
            <button
              key={option}
              type="button"
              onClick={() => setSelectedOption(option)}
              className={`min-h-12 rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                isSelected
                  ? "bg-emerald-400 text-slate-950"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              {option}
            </button>
          );
        })}
      </div>

      {isAnswered ? (
        <div className="mt-6 rounded-3xl bg-white p-5 text-slate-950">
          <p
            className={`text-base font-bold ${
              isCorrect ? "text-emerald-700" : "text-rose-700"
            }`}
          >
            {isCorrect ? "回答正确" : "回答错误"}
          </p>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            {question.explanation}
          </p>
        </div>
      ) : null}
    </section>
  );
}
