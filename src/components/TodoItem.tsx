"use client";

import { useRouter } from "next/router";

interface TodoItemProps {
    id: string;
    title: string;
    complete: boolean;
    toggleTodo: (id: string, complete: boolean) => void;
    deleteTodo: (id: string) => Promise<void>;
}

export default function TodoItem({ id, title, complete, toggleTodo, deleteTodo }: TodoItemProps) {

    return <li className="flex gap-1 items-center justify-between my-1">
        <div>
            <input id={ id } type="checkbox" className="coursor-pointer peer" defaultChecked={ complete } onChange={ (e) => toggleTodo(id, e.target.checked) } />
            <label htmlFor={ id } className="peer-checked:line-through">{ title }</label>
        </div>
        <button className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none" onClick={ async (_) => {
           await deleteTodo(id)
           window.location.reload()
        } }>Delete</button>
    </li>;
}
