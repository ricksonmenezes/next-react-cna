import Image from "next/image";
import Link from "next/link";
import postgres  from "postgres";
import {Suspense} from "react";

const sql = postgres(process.env.DATABASE_URL)
type Quiz = {
  quiz_id:number,
  title: string
}
async function Quizzes() {


  const quizzes: Quiz[] = await sql `select * from "Quiz"."Quizzes"`;
  return(
      <ul>
        {quizzes.map((quiz) => (
            <li key={quiz.quiz_id}>
              <Link href={`/quiz/${quiz.quiz_id}`}>{quiz.title}</Link>
            </li>
            ))}
      </ul>
  );
}
export default function Home() {
  return (
<section>

  <h1 className="text-2xl font-semibold text-blue-700">All Quizzes</h1>
  <Suspense fallback={<p>Loading.......</p>}>
    <Quizzes />
  </Suspense>
</section>
  );
}
