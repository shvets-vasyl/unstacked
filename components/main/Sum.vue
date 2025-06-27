<template>
	<CommonSectionTemplate>
		<div class="sum">

			<CommonBox class="tag">
				<p class="p1">profit calculator</p>
			</CommonBox>

			<p class="subtitle p1">Each presale stage increases the price.</p>

			<h2 class="h2 title">
				The earlier you join, the more access and utility you unlock.
			</h2>

			<p class="descr p1">
				Use our Projected Value Calculator to explore what your token position could look like over time — based on current presale stages and projected listing.
			</p>


			<div class="content">
				<SvgSumBox />

				<div class="info">
					<div class="head">
						<div class="stage">
							<SvgSumStage />

							<div class="stage-content">
								<p class="stage-text p2">Stage 1</p>
								<p class="stage-price p2">$0.01</p>
							</div>
						</div>
						<div class="current">
							<CommonBox>
								<div class="current-info">
									<p class="current-text p2">Stage 19 (Current):</p>
									<p class="current-price p1">$0.01</p>
								</div>
							</CommonBox>
						</div>
						<div class="listing">
							<SvgSumListing />

							<!-- <div class="listing-content">
								<p class="listing-text p2">Listing</p>
								<p class="listing-price p2">$0.03</p>
							</div> -->
						</div>
					</div>
				</div>
			</div>

			<a class="btn" href="#" target="_blank">
				<CommonButton text="Join now" />
			</a>

			<p class="text">Plan ahead. Think long-term. Act early.</p>

		</div>
	</CommonSectionTemplate>
</template>
<script setup lang='ts'>
</script>
<style scoped lang='scss'>
.sum {
	position: relative;
}
.tag {
	position: absolute;
	top: 0;
	right: 0;
	text-transform: uppercase;
}
.tag .p1 {
	font-family: var(--font-semibold);
}
.subtitle {
	color: var(--c-grey2);
	margin-bottom: 1rem;
}
.title {
	width: 55rem;
	margin-bottom: 1.5rem;
}
.descr {
	width: 38.4375rem;
}
.content {
	width: 55rem;
	margin: 5.875rem auto 2.5rem;
	position: relative;
}
.text {
	font-size: 2rem;
	line-height: 3rem;
	text-transform: uppercase;
	text-align: center;
	width: 28rem;
	margin: 3.375rem auto 0;
	color: var(--c-accent);
	text-shadow: 0 0 .75rem rgba(255, 142, 61, 0.65);
}
.btn {
	width: 13rem;
	display: block;
	margin: 0 auto;
}
.info {
	position: absolute;
	width: 100%;
	left: 0;
	top: 0;
	height: 19rem;
	padding: 2.5rem;
}
.head {
	display: grid;
	grid-template-columns: 9.375rem 17.75rem 9.375rem;
	align-items: center;
	justify-content: space-between;
}
.current-info {
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	font-family: var(--font-bold);
}
.current-info p:first-child {
	color: var(--c-grey2);
}
.stage, .listing {
	position: relative;
	width: 9.375rem;
}
.stage-content, .listing-content {
	position: absolute;
	inset: 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 1rem;
}
.stage-price, .listing-price {
	color: var(--c-black);
}
</style>