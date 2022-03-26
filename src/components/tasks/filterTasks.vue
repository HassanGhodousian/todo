<template>
  <div class="row mb-3">
    <div class="col-md-2 md=4">
      <h6>filter Tasks :</h6>
      <select
        v-model="number"
        @change="filterTasks"
        class="form-select form-select-sm"
      >
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="25">25</option>
        <option value="50">50</option>
      </select>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const number = ref();
    function filterTasks() {
      store.dispatch("filterTasks", number.value);
    }
    return { filterTasks };
  },
};
</script>

<style></style>
