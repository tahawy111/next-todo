
interface TodoItemProps {
    id: string;
    title: string;
    complete: boolean;
}

export default function TodoItem({ id, title, complete }: TodoItemProps) {
    return <li className="flex gap-1 items-center">
        <input id={ id } type="checkbox" className="coursor-pointer peer" />
        <label htmlFor={ id } className="peer-checked:line-through">{ title }</label>
    </li>;
}
