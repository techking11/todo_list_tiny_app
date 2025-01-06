interface Todo {
  id?: number;
  title?: string;
  completed?: boolean;
}

interface TodoWithoutId {
  title?: string;
  completed?: boolean;
}

export { Todo, TodoWithoutId };
