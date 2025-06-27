<template>
  <span class="btn-template p1">
		<span class="btn-wrap">
			{{ text }}
		</span>
  </span>
</template>
<script setup lang="ts">
defineProps<{
  accent?: boolean;
  grey?: boolean;
  text: string;
}>();
</script>
<style scoped lang="scss">
.btn-wrap {
	width: 100%;
	height: 2.75rem;
	display: flex;
  align-items: center;
  justify-content: center;
	background: var(--c-accent);
  color: var(--c-black);
	clip-path: polygon(
    0.6875rem 0,
    100% 0,
    100% calc(100% - 1rem),
    calc(100% - 1rem) 100%,
    0 100%,
    0% 50%,
    0 0.6875rem
  );
}
.btn-template {
	display: flex;
  font-family: var(--font-bold);
  position: relative;
  transition: all 0.3s ease;
  text-transform: uppercase;
  white-space: nowrap;
  width: 100%;
	position: relative;

  @include mobile {
    font-size: 0.75rem;
  }
}

.btn-template:after {
	content: "";
  width: 0;
  height: 0;
  border-left: .6875rem solid transparent;
  border-bottom: .6875rem solid var(--c-accent);
	position: absolute;
	bottom: 0;
	right: 0;
}
@include hover {
  .btn-template:hover {
    opacity: 0.5;
  }
}
</style>
