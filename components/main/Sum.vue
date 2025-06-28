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
				<SvgSumBox class="desk" />
				<SvgSumBoxMob class="mob" />

				<div class="info">
					<div class="head">
						<div class="stage">
							<SvgSumStage class="desk" />
							<SvgSumStageMob class="mob" />

							<div class="stage-content">
								<p class="stage-text p2">Stage 1</p>
								<p class="stage-price p2">${{ stagePrices[0] }}</p>
							</div>
						</div>
						<div class="current">
							<CommonBox>
								<div class="current-info">
									<p class="current-text p2">Stage 19 (Current):</p>
									<p class="current-price p1">${{ currentStagePrice }}</p>
								</div>
							</CommonBox>
						</div>
						<div class="listing">
							<SvgSumListing class="desk" />
							<SvgSumListingMob class="mob" />

							<div class="listing-content">
								<p class="listing-text p2">Listing</p>
								<p class="listing-price p2">${{ stagePrices[stagePrices.length - 1] }}</p>
							</div>
						</div>
					</div>

					<div class="body">
						<div class="amount">
							<SvgField class="desk" />
							<SvgFieldMob class="mob" />

							<p class="p1 field-text">Enter Amount</p>
							<input
								class="input"
								type="number"
								placeholder="0"
								v-model="inputValue"
							/>
						</div>

						<div class="arrow">
							<IconArrow />
						</div>

						<div class="receive">
							<SvgField class="desk" />
							<SvgFieldMob class="mob" />

							<p class="p1 field-text">You Receive</p>
							<input
								class="input"
								readonly
								:value="result.toFixed(2)"
								placeholder="0"
							/>
						</div>
					</div>
				</div>
			</div>

			<a class="btn" href="https://presale2.unstaked.com" target="_blank">
				<CommonButton text="Join now" />
			</a>

			<p class="text">Plan ahead. Think long-term. Act early.</p>

		</div>
	</CommonSectionTemplate>
</template>
<script setup lang='ts'>
const inputValue = ref("");


const stagePrices = [
  0.000443, 0.000465, 0.000489, 0.000513, 0.000539, 0.000566, 0.000594,
  0.000624, 0.000655, 0.000688, 0.000722, 0.000758, 0.000796, 0.000836,
  0.000878, 0.000921, 0.000968, 0.001016, 0.001067, 0.00112, 0.001176,
  0.001235, 0.001297, 0.001361, 0.001429, 0.001501, 0.001576, 0.001655,
  0.001738, 0.001824, 0.001916, 0.002011, 0.002112, 0.002218, 0.002328,
  0.002445, 0.002567, 0.002696, 0.00283, 0.002972, 0.00312, 0.003276,
  0.005242,
];

const currentStagePrice = stagePrices[18];

const tokens = computed(() => Number(inputValue.value || 0) / currentStagePrice);

const result = computed(() => {
  const futurePrice = stagePrices[stagePrices.length - 1];
  return tokens.value * futurePrice;
});
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
	@include mobile {
		display: none;
	}
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
	@include mobile {
		width: 100%;
	}
}
.descr {
	width: 38.4375rem;
	@include mobile {
		width: 100%;
	}
}
.content {
	width: 57.5rem;
	margin: 5.875rem auto 2.5rem;
	position: relative;
	@include mobile {
		width: calc(100% + 1.4rem);
		margin: 2.5rem -0.7rem 1rem;
	}
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
	@include mobile {
		font-size: 1rem;
		line-height: 100%;
		margin: 2.5rem auto 1rem;
		width: 16.875rem;
	}
}
.btn {
	width: 13rem;
	display: block;
	margin: 0 auto;
	@include mobile {
		width: 100%;
	}
}
.info {
	position: absolute;
	width: 100%;
	left: 0;
	top: 0;
	padding: 3.5rem;
	@include mobile {
		padding: 2.2rem 1.8rem;
	}
}
.head {
	display: grid;
	grid-template-columns: 9.375rem 17.75rem 9.375rem;
	align-items: center;
	justify-content: space-between;
	padding-bottom: 3.5rem;
	border-bottom: .0625rem solid var(--c-grey);
	margin-bottom: 5rem;
	@include mobile {
		grid-template-columns: 1fr 1fr;
		column-gap: 0.5rem;
		padding-bottom: 1.5rem;
		margin-bottom: 3rem;
	}
}
.head:deep(.box) {
	height: 2.5rem;
	@include mobile {
		height: 2rem;
		margin-top: 1rem;
	}
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
}
.stage {
	@include mobile {
		order: 1;
	}
}
.listing {
	@include mobile {
		order: 2;
	}
}
.listing {
	@include mobile {
		order: 2;
	}
}
.current {
	@include mobile {
		order: 3;
		grid-column: span 2;
	}
}
.stage-content, .listing-content {
	position: absolute;
	inset: 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 1rem;
	@include mobile {
		padding: 0 0.5rem;
	}
}
.stage-price, .listing-price {
	color: var(--c-black);
	font-size: .625rem;
	margin-right: -0.3125rem;
	@include mobile {
		margin-right: 0;
		padding-right: .25rem;
	}
}

.body {
	display: grid;
	grid-template-columns: 22.125rem 2.75rem 22.125rem;
	justify-content: space-between;
	@include mobile {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
}
.amount, .receive {
	position: relative;
}
.input {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: var(--c-white);
  font-size: 0.875rem;

	padding: .125rem 1rem 0;
}
.input::placeholder {
  color: var(--c-grey2);
}
.field-text {
	position: absolute;
	bottom: 100%;
	left: 0;
	font-family: var(--font-semibold);
	margin-bottom: .375rem;
}
.arrow {
	@include mobile {
		width: 2rem;
		margin: .5rem 0 2rem;
		transform: rotate(90deg);
	}
}
</style>