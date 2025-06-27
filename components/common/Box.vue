<template>
	<div class="box">
		<div class="square square-1" />
		<div class="square square-2" />
		<div class="square square-3" />
		<div class="square square-4" />

		<slot />
	</div>
</template>

<script setup lang='ts'>
</script>
<style scoped lang='scss'>
.box {
	height: 2.75rem;
	padding: 0 1rem;
	border: .0625rem solid var(--c-grey);
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
}

.square {
	width: .3438rem;
	height: .3438rem;
	background: var(--c-accent);
	position: absolute;
	z-index: 2;
}
.square-1 {
	top: .0313rem;
	left: 0;
	transform: translate(-50%, -50%);
}
.square-2 {
	top: .0313rem;
	right: 0;
	transform: translate(50%, -50%);
}
.square-3 {
	bottom: .0313rem;
	left: 0;
	transform: translate(-50%, 50%);
}
.square-4 {
	bottom: .0313rem;
	right: 0;
	transform: translate(50%, 50%);
}
</style>