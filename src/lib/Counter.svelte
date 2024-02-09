<script>
    export let label = 'Counter';
    export let store;
</script>

<h1>{label}: {$store}</h1>

<button on:click={store.increment}>+</button>
<button on:click={store.decrement}>-</button>
<button on:click={store.reset}>reset</button>