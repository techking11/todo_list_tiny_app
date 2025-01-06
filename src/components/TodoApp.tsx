import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, fetchTodos, updateTodo } from '../api/api';
import { Todo } from '../types/types';
import { setFilter } from '../redux/slice';

function TodoApp() {
  const queryClient = useQueryClient();
  const filter = useSelector(
    (state: { filter: 'all' | 'completed' | 'pending' }) => state.filter
  );
  const dispatch = useDispatch();

  const {
    data: todos = [],
    isLoading,
    isError,
  } = useQuery({ queryKey: ['todos'], queryFn: fetchTodos });

  // const addMutation = useMutation(addTodo, {
  //   onSuccess: () => queryClient.invalidateQueries<any>('todos'),
  // });

  // const updateMutation = useMutation(updateTodo, {
  //   onSuccess: () => queryClient.invalidateQueries<any>('todos'),
  // });

  // const deleteMutation = useMutation(deleteTodo, {
  //   onSuccess: () => queryClient.invalidateQueries<any>('todos'),
  // });

  const filteredTodos = todos?.filter((todo: Todo) => {
    if (filter === 'completed') return todo.completed;
    if (filter === 'pending') return !todo.completed;
    return true;
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching todos!</p>;

  return (
    <div className="p-4 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>

      <div className="mb-4">
        <button
          onClick={() => dispatch(setFilter('all'))}
          className="mr-2 px-3 py-1 bg-gray-200 rounded"
        >
          All
        </button>
        <button
          onClick={() => dispatch(setFilter('completed'))}
          className="mr-2 px-3 py-1 bg-green-200 rounded"
        >
          Completed
        </button>
        <button
          onClick={() => dispatch(setFilter('pending'))}
          className="px-3 py-1 bg-red-200 rounded"
        >
          Pending
        </button>
      </div>

      <ul className="mb-4">
        {filteredTodos.map((todo: any) => (
          <li key={todo.id} className="flex items-center justify-between mb-2">
            <span
              className={
                todo.completed ? 'line-through text-gray-500' : 'text-black'
              }
            >
              {todo.title}
            </span>
            <div>
              <button
                // onClick={() =>
                //   updateMutation.mutate({
                //     id: todo.id,
                //     completed: !todo.completed,
                //   })
                // }
                className="mr-2 px-3 py-1 bg-blue-200 rounded"
              >
                Toggle
              </button>
              <button
                // onClick={() => deleteMutation.mutate(todo.id)}
                className="px-3 py-1 bg-red-200 rounded"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>

      <button
        // onClick={() =>
        //   addMutation.mutate({
        //     title: `New Todo ${Date.now()}`,
        //     completed: false,
        //   })
        // }
        className="px-4 py-2 bg-green-500 text-white rounded"
      >
        Add Todo
      </button>
    </div>
  );
}

export default TodoApp;
