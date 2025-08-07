// Add the required props
import { TodoInfo } from '../TodoInfo/TodoInfo';

export const TodoList = ({ todos }) => {
  return (
    <section className="TodoList">
      {todos.map(todo => (
        <TodoInfo key={todo.id} todo={todo} />
        // <article
        //   key={todo.id}
        //   className={`TodoInfo ${todo.completed ? 'TodoInfo--completed' : ''}`}
        // >
        //   <h2 className="TodoInfo__title">{todo.title}</h2>

        //   <a className="UserInfo" href={`mailto:${todo.user.email}`}>
        //     {todo.user.name}
        //   </a>
        // </article>
      ))}
    </section>
  );
};
