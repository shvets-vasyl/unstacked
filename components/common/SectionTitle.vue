<template>
	<h2 class="h2 title">
		<slot />
	</h2>
</template>
<script setup lang='ts'>

</script>
<style scoped lang='scss'>
.title {
	position: relative;
	text-indent: 3.75rem;
	@include mobile {
		text-indent: 2rem;
	}
}
.title:after, .title:before {
	content: "";
	width: .25rem;
	height: 2.25rem;
	background: var(--c-accent);
	position: absolute;
	top: .3125rem;
	left: 0.5rem;
	transform: rotate(20deg);
	@include mobile {
		transform: scale(0.5) rotate(20deg);
		top: -0.4rem;
		left: 0.3rem;
	}
}
.title:before {
	left: 1.5rem;
	@include mobile {
		left: 0.9rem;
	}
}
</style>