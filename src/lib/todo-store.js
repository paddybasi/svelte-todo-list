import { writable } from 'svelte/store';

export function createTodoStore(initial) {


    const { subscribe, update } = writable(initial);

    return {
        subscribe,
        remove: todo => {
            update($todos => $todos.filter(item => item !== todo));
        },
        mark: (todo, completed) => {
            update($todos => [
                ...$todos.filter(item => item !== todo),
                { ...todo, completed }
            ]);
        }
    };
}
