import type { Metadata } from "next";
import Link from "next/link";

import { courses } from "@/data/courses";

export const metadata: Metadata = {
  title: "Tagalog AI Tutor",
  description: "面向中文母语者的菲律宾语学习工具。",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7fbf7] text-slate-950">
      <section className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-5 py-8 sm:px-8 lg:px-10">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex size-11 items-center justify-center rounded-2xl bg-emerald-600 text-lg font-bold text-white shadow-sm shadow-emerald-200">
              T
            </div>
            <span className="text-base font-semibold tracking-wide text-slate-900">
              Tagalog AI Tutor
            </span>
          </div>
          <span className="rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm font-medium text-emerald-700 shadow-sm">
            中文友好
          </span>
        </nav>

        <div className="grid flex-1 items-center gap-10 py-14 lg:grid-cols-[1.02fr_0.98fr] lg:py-10">
          <div className="max-w-2xl">
            <p className="mb-5 inline-flex rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-800">
              菲律宾语入门练习
            </p>
            <h1 className="text-4xl font-bold leading-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Tagalog AI Tutor
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600 sm:text-xl">
              面向中文母语者的菲律宾语学习工具。
            </p>
            <div className="mt-8 flex flex-wrap gap-3 text-sm font-medium text-slate-700">
              <span className="rounded-full bg-white px-4 py-2 shadow-sm ring-1 ring-slate-200">
                从高频场景开始
              </span>
              <span className="rounded-full bg-white px-4 py-2 shadow-sm ring-1 ring-slate-200">
                中文解释更直观
              </span>
              <span className="rounded-full bg-white px-4 py-2 shadow-sm ring-1 ring-slate-200">
                适合碎片时间练习
              </span>
            </div>
          </div>

          <div className="rounded-[2rem] bg-white p-5 shadow-xl shadow-emerald-100 ring-1 ring-emerald-100 sm:p-6">
            <div className="rounded-[1.5rem] bg-slate-950 p-6 text-white">
              <p className="text-sm font-medium text-emerald-200">
                今日学习片段
              </p>
              <p className="mt-5 text-3xl font-bold">Salamat!</p>
              <p className="mt-3 text-slate-300">谢谢，用于表达感谢。</p>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3 text-center text-sm font-semibold">
              <div className="rounded-2xl bg-emerald-50 px-3 py-4 text-emerald-800">
                听
              </div>
              <div className="rounded-2xl bg-cyan-50 px-3 py-4 text-cyan-800">
                读
              </div>
              <div className="rounded-2xl bg-amber-50 px-3 py-4 text-amber-800">
                说
              </div>
            </div>
          </div>
        </div>

        <section aria-labelledby="courses-heading" className="pb-10">
          <div className="mb-6 flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
                Courses
              </p>
              <h2
                id="courses-heading"
                className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl"
              >
                选择一个课程开始
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-slate-500">
              先从真实生活里最常用的表达练起，再逐步扩展到更多场景。
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {courses.map((course) => (
              <article
                key={course.id}
                className="group flex min-h-64 flex-col rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-100"
              >
                <div
                  className={`mb-6 h-2 w-20 rounded-full bg-gradient-to-r ${course.accent}`}
                />
                <div className="flex-1">
                  <p className="text-sm font-semibold text-slate-400">
                    {course.example}
                  </p>
                  <h3 className="mt-3 text-2xl font-bold text-slate-950">
                    {course.name}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-slate-600">
                    {course.description}
                  </p>
                </div>
                <Link
                  href={`/lessons/${course.id}`}
                  className="mt-8 flex h-12 items-center justify-center rounded-full bg-slate-950 px-5 text-sm font-semibold text-white transition group-hover:bg-emerald-600"
                >
                  开始学习
                </Link>
              </article>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
