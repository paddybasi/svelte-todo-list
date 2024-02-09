<script>

  import { createTodoStore } from './lib/todo-store.js';
  import { limit, skip } from './lib/stores.js';

  import Counter from './lib/Counter.svelte';
  import TodoList from './lib/TodoList.svelte';

  let todos = createTodoStore([]);

  $: fetch(`https://dummyjson.com/todos?limit=${$limit}&skip=${$skip}`).then(response => response.json()).then(resp => {
    todos = createTodoStore(resp.todos);
  });

</script>

<Counter store={limit} label="Limit" />
<Counter store={skip} label="Skip" />

<div class="board">

    <div class="todo">
        <h2>todo</h2>
        <TodoList store={todos} done={false} />
    </div>

    <div class="done">
        <h2>done</h2>
        <TodoList store={todos} done={true} />
    </div>
</div>

<style>
    .board {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 1em;
        max-width: 36em;
        margin: 0 auto;
    }

    h2 {
        font-size: 2em;
        font-weight: 200;
    }
</style>



