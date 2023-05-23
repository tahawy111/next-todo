import TodoItem from '@/components/TodoItem';
import { prisma } from '@/db';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { useRouter } from 'next/router';

interface Home {

}

async function toggleTodo(id: string, complete: boolean) {
  "use server";

  await prisma.todo.update({ where: { id }, data: { complete } });
}


export default async function Home({ }: Home) {
  // await prisma.todo.create({ data: { title: "Walk the dog", complete: false } });
  const todos = await prisma.todo.findMany();

  const deleteTodo = async (id: string) => {
    "use server";
    await prisma.todo.delete({ where: { id } });
  };
  return <>

    <header className='flex justify-between items-center mb-4'>
      <h1 className='text-2xl'>Todos</h1>
      <Link className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none" href={ `/new` }>New</Link>
    </header>

    <ul className="pl-4">
      { todos.map((todo) => (<TodoItem deleteTodo={ deleteTodo } toggleTodo={ toggleTodo } key={ todo.id } { ...todo } />)) }
    </ul>

  </>;
}