"use client";

import { useState } from "react";
import Link from "next/link";

type Question = {
  id: string;
  prompt: string;
  question: string;
  options: string[];
  answer: string;
  explanation: string;
};

type LessonQuizProps = {
  questions: Question[];
};

export function LessonQuiz({ questions }: LessonQuizProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isCompleted, setIsCompleted] = useState(false);

  const question = questions[currentQuestionIndex];
  const isAnswered = selectedOption !== null;
  const isCorrect = selectedOption === question.answer;
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  function handleNextQuestion() {
    if (isLastQuestion) {
      setIsCompleted(true);
      return;
    }

    setCurrentQuestionIndex((index) => index + 1);
    setSelectedOption(null);
  }

  if (isCompleted) {
    return (
      <section className="mt-8 rounded-3xl bg-slate-950 p-6 text-white">
        <p className="text-sm font-medium text-emerald-200">完成</p>
        <h2 className="mt-4 text-3xl font-bold">课程已完成</h2>
        <p className="mt-4 text-base leading-7 text-slate-300">
          你已经完成本课程的所有题目
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex h-12 items-center justify-center rounded-full bg-emerald-400 px-5 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
        >
          返回首页
        </Link>
      </section>
    );
  }

  return (
    <section className="mt-8 rounded-3xl bg-slate-950 p-6 text-white">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm font-medium text-emerald-200">当前题目</p>
        <p className="text-sm font-semibold text-slate-400">
          {currentQuestionIndex + 1} / {questions.length}
        </p>
      </div>
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
          <button
            type="button"
            onClick={handleNextQuestion}
            className="mt-5 h-12 rounded-full bg-slate-950 px-5 text-sm font-semibold text-white transition hover:bg-emerald-600"
          >
            {isLastQuestion ? "完成课程" : "下一题"}
          </button>
        </div>
      ) : null}
    </section>
  );
}
