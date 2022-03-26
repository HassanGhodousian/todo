<template>
  <div>
    <div v-if="loading" class="container">
      <div class="row justify-content-center">
        <div class="spinner-border" role="status">
          <span class="sr-only"></span>
        </div>
      </div>
    </div>
    <div v-else class="container mt-3">
      <filterTasks />

      <div class="row g-3">
        <div v-for="task in tasks" :key="task.id" class="col-md-4">
          <div class="card" :class="{ 'bg-light': task.completed }">
            <div class="card-body">
              <div v-if="task.completed">
                <del>{{ task.title }}</del>
              </div>
              <div v-else>{{ task.title }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from "@vue/runtime-core";
import { useStore } from "vuex";
import filterTasks from "@/components/tasks/filterTasks.vue";
export default {
  components: {
    filterTasks,
  },
  setup() {
    const store = useStore();
    const loading = ref(false);
    const tasks = computed(() => {
      return store.getters.allTasks;
    });
    async function fetchTasks() {
      loading.value = true;
      await store.dispatch("fetchTasks");
      loading.value = false;
    }

    fetchTasks();
    return { tasks, loading };
  },
};
</script>

<style></style>
