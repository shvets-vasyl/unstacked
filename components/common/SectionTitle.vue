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
}
.title:before {
	left: 1.5rem
}
</style>