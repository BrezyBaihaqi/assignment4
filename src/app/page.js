import { BookList } from "@/components/BookList";
import { CreateList } from "@/components/CreateList";
import { Header } from "@/components/Header";

export const dynamic = "force-dynamic";

async function getData() {
  // GET API
  const res = await fetch("https://v1.appbackend.io/v1/rows/kmOtA2iYFJC4");
  const data = await res.json();
  return data;
}

export default async function Home() {
  const { data } = await getData();

  return (
    <main>
      <Header />
      <div className="max-w-3xl m-auto space-y-5">
        <BookList data={data} />
        <CreateList />
      </div>
    </main>
  );
}
