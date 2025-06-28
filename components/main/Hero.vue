<template>
	<CommonSectionTemplate>
		<img src="/images/hero-bg.png" class="inner-img desk" alt="">
		<img src="/images/hero-bg-mob.png" class="inner-img mob" alt="">
		<div class="hero">
			<div class="logo">
				<IconLogo />
			</div>
			<div class="content">
				<h1 class="h1 title">
					Early Access Comes With Real Advantages
				</h1>
				<p class="descr1 p1">
					The Unstaked Presale is live. Token price starts at $0.0065 — with a projected listing at $0.181.
				</p>
				<p class="descr2 p1">
					By getting in now, you position yourself at the start of a platform built for long-term growth, real tools, and on-chain access.
				</p>
			</div>

			<div class="info">
				<div class="presale">
					<SvgPresaleBox />

					<div class="presale-box">
						<p>presale ıs <span>actıve!</span></p>

						<div class="presale-icons">
							<SvgPresaleIcons />
						</div>
					</div>
				</div>

				<a class="presale-btn" href="https://presale2.unstaked.com" target="_blank">
					<CommonButton text="Join now" />
				</a>
			</div>

			<div class="robot">
				<img src="/images/hero-robot.png" alt="">
			</div>
		</div>
	</CommonSectionTemplate>
</template>
<script setup lang='ts'>
</script>
<style scoped lang='scss'>
.hero {
	position: relative;
}
.logo {
	width: 20.8125rem;
	margin-left: -5rem;
	margin-top: -5.3125rem;
	margin-bottom: -10rem;

	@include mobile {
		width: 15rem;
		margin-left: -3.5rem;
		margin-bottom: -7rem;
		margin-top: -4.5rem;
	}
}
.title {
	margin-bottom: 2.5rem;
	@include mobile {
		margin-bottom: 1.5rem;
	}
}
.descr1 {
	margin-bottom: 1.5rem;
}
.descr2 {
	width: 31.875rem;
	margin-bottom: 1.5rem;
	@include mobile {
		width: 100%;
		margin-bottom: 21.375rem;
	}
}
.content {
	width: 35.6875rem;
	@include mobile {
		width: 100%;
	}
}
.presale {
	width: 20.125rem;
	position: relative;
	margin-left: -1.375rem;
	@include mobile {
		width: 22.65rem;
		margin-left: -1.6rem;
	}
}
.presale-box {
	font-size: .875rem;
	font-family: var(--font-bold);
	text-transform: uppercase;
	display: flex;
	align-items: center;
	gap: 0.5rem;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	white-space: nowrap;
	@include mobile {
		font-size: .75rem;
	}
}
.presale-box span {
	color: #40ED47;
}
.presale-icons {
	width: 6.5625rem;
}
.robot {
	width: 40.625rem;
	position: absolute;
	right: -8.75rem;
	top: 3.625rem;
	@include mobile {
		width: 25rem;
		top: 20rem;
		right: -3.5rem;
	}
}
.robot img {
	width: 100%;
}
.info {
	display: flex;
	align-items: center;
	@include mobile {
		display: block;
	}
}
.presale-btn {
	width: 17.3125rem;
	margin-left: -0.3125rem;
	@include mobile {
		width: 100%;
		margin-left: 0;
	}
}
</style>