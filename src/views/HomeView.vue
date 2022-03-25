<template>
  <div>
    <h2>home view</h2>
    {{ count }}
  </div>
</template>

<script>
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const count = computed(() => store.state.count);
    return { count };
  },
};
</script>

<style></style>
