<template>
  <main>
    <form @submit="handleSubmit">
      <label for="query"> Search for a cocktail</label>
      <input type="search" id="query" name="query" />
      <button>Search</button>
    </form>

    <section v-if="state.status === 'SUCCESS'">
      <h2>Results</h2>

      <ul>
        <li :key="drink.idDrink" v-for="drink in state.data">
          <h3>{{ drink.strDrink }}</h3>
          <img
            :alt="`Image of a ${drink.strDrink} cocktail`"
            :src="drink.strDrinkThumb"
          />
        </li>
      </ul>
    </section>

    <section v-if="state.status === 'LOADING'">
      <h2>Loading</h2>
    </section>

    <section v-if="state.status === 'FAILED'">
      <h2>Something went wrong</h2>
    </section>
  </main>
</template>

<script setup lang="ts">
import useApp from "./useApp";

const { state, handleSubmit } = useApp();
</script>

<style scoped>
@import "./assets/base.css";

main {
  max-width: 732px;
  margin: auto;
}

label {
  display: block;
}

section {
  margin-top: 2rem;
}

img {
  max-width: 100px;
}
</style>
