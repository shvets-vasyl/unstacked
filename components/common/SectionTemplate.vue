<template>
	<section class="section">
		<div class="container">
			<div class="square square-1" />
			<div class="square square-2" />
			<div class="square square-3" />
			<div class="square square-4" />

			<div class="line line-1" />
			<div class="line line-2" />

			<div class="box">
				<SvgSectionLinesLeft class="lines left-lines desk" />
				<SvgSectionLinesLeftMob class="lines left-lines mob" />

				<div class="content">
					<slot />
				</div>

				<SvgSectionLinesRight class="lines right-lines desk" />
				<SvgSectionLinesRightMob class="lines right-lines mob" />
			</div>
		</div>
	</section>
</template>
<script setup lang='ts'>
</script>
<style scoped lang='scss'>
.section {
	padding: 3.125rem 0;
	@include mobile {
		padding: 1.5rem 0;
	}
}
.container {
	position: relative;
}
.box {
	position: relative;
	padding: 0 2.5rem;
	overflow: hidden;
	border-top: .0625rem solid var(--c-grey);
	border-bottom: .0625rem solid var(--c-grey);

	@include mobile {
		padding: 0 1.25rem;
	}
}
.content {
	position: relative;
	padding: 2.5rem;

	@include mobile {
		padding: .75rem;
	}
}
.lines {
	width: 2.5rem;
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	@include mobile {
		width: 1.25rem;
	}
}
.left-lines {
	left: 0;
}
.right-lines {
	right: 0;
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
	left: 2.5313rem;
	transform: translate(-50%, -50%);
	@include mobile {
		left: 1.22rem;
	}
}
.square-2 {
	top: .0313rem;
	right: 2.5313rem;
	transform: translate(50%, -50%);
	@include mobile {
		right: 1.22rem;
	}
}
.square-3 {
	bottom: .0313rem;
	left: 2.5313rem;
	transform: translate(-50%, 50%);
	@include mobile {
		left: 1.22rem;
	}
}
.square-4 {
	bottom: .0313rem;
	right: 2.5313rem;
	transform: translate(50%, 50%);
	@include mobile {
		right: 1.22rem;
	}
}
.line {
	position: absolute;
	width: .25rem;
	height: 5rem;
	top: 50%;
	transform: translateY(-50%);
	background: var(--c-accent);
	border-radius: .625rem;
	z-index: 2;
}
.line-1 {
	left: 2.4rem;
	@include mobile {
		left: 1.1rem;
	}
}
.line-2 {
	right: 2.4rem;
	@include mobile {
		right: 1.1rem;
	}
}
</style>