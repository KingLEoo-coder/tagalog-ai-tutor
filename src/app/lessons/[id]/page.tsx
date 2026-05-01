import Link from "next/link";
import { notFound } from "next/navigation";

import { courses } from "@/data/courses";
import { LessonQuiz } from "./LessonQuiz";

type LessonPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function LessonPage({ params }: LessonPageProps) {
  const { id } = await params;
  const course = courses.find((item) => item.id === id);

  if (!course) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#f7fbf7] px-5 py-8 text-slate-950 sm:px-8 lg:px-10">
      <section className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-4xl flex-col">
        <nav className="flex items-center justify-between">
          <Link
            href="/"
            className="rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm font-semibold text-emerald-700 shadow-sm transition hover:bg-emerald-50"
          >
            返回首页
          </Link>
          <span className="text-sm font-semibold text-slate-400">
            Tagalog AI Tutor
          </span>
        </nav>

        <div className="flex flex-1 items-center py-12">
          <article className="w-full rounded-[2rem] bg-white p-6 shadow-xl shadow-emerald-100 ring-1 ring-emerald-100 sm:p-8 lg:p-10">
            <div
              className={`mb-8 h-2 w-24 rounded-full bg-gradient-to-r ${course.accent}`}
            />
            <p className="mb-4 inline-flex rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-800">
              课程详情
            </p>
            <h1 className="text-4xl font-bold leading-tight text-slate-950 sm:text-5xl">
              {course.name}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              {course.description}
            </p>

            <div className="mt-8 rounded-3xl bg-emerald-50 p-5 text-base font-semibold text-emerald-900 ring-1 ring-emerald-100">
              <p className="text-sm font-medium text-emerald-700">
                菲律宾语示例
              </p>
              <p className="mt-4 text-3xl font-bold text-slate-950">
                {course.example}
              </p>
            </div>

            <LessonQuiz questions={course.questions} />
          </article>
        </div>
      </section>
    </main>
  );
}
