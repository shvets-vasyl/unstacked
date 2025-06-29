<template>
  <CommonSectionTemplate>
    <div class="tokenomics">
      <CommonSectionTitle class="tokenomics-title">
        Tokenomics
      </CommonSectionTitle>

      <p class="descr p1">
        A balanced distribution that supports long-term growth, user rewards, and ecosystem expansion.
      </p>

      <div class="content">
        <div class="left">
          <img src="/images/coin.png" alt="">
        </div>
        <div class="right">
					<SvgTokenomicsBox class="desk" />
					<SvgTokenomicsBoxMob class="mob" />

					<div class="info-content">
						<div class="info-left">
							<div v-for="{text, title}, i in items.slice(0, 5)" :key="i" class="info-item">
								<p>{{ title }}</p>
								<p>{{ text }}</p>
							</div>
						</div>
						<div class="info-right">
							<div v-for="{text, title}, i in items.slice(5)" :key="i" class="info-item">
								<p>{{ title }}</p>
								<p>{{ text }}</p>
							</div>
						</div>
					</div>
				</div>
      </div>
    </div>
  </CommonSectionTemplate>
</template>
<script setup lang="ts">
const items = [
	{
		title: "Public",
		text: "20%"
	},
	{
		title: "Treasury",
		text: "17%"
	},
	{
		title: "Ecosystem",
		text: "15%"
	},
	{
		title: "Team",
		text: "10%"
	},
	{
		title: "Liquidity",
		text: "8%"
	},
	{
		title: "Private",
		text: "7%"
	},
	{
		title: "Rewards",
		text: "7%"
	},
	{
		title: "Burn",
		text: "6%"
	},
	{
		title: "Seed",
		text: "5%"
	},
	{
		title: "Marketing",
		text: "5%"
	},
]
</script>
<style scoped lang="scss">
.join {
  position: relative;
}
.tokenomics-title {
  margin-bottom: 2rem;
	@include mobile {
		margin-bottom: 1.5rem;
	}
}
.descr {
	width: 27rem;
	margin-bottom: 3.375rem;
	@include mobile {
		width: 100%;
		margin-bottom: 2.5rem;
	}
}
.content {
  display: flex;
	@include mobile {
		flex-direction: column;
	}
}
.left img {
	width: 39.375rem;
	margin-left: -5rem;
	margin-top: -10rem;
	margin-bottom: -3.5rem;
	@include mobile {
		width: 100%;
		margin-left: 0.8rem;
		margin-top: -2.5rem;
		margin-bottom: -1rem;
	}
}
.left {
	@include mobile {
		order: 2;
	}
}
.right {
	flex: 0 0 48rem;
	position: relative;
	left: -2.5rem;
	@include mobile {
		flex: 1;
		left: 0;
		order: 1;
	}
}
.info-content {
	position: absolute;
	width: 100%;
	top: .375rem;
	left: 0;
	display: grid;
	grid-template-columns: 1fr 1fr;
	@include mobile {
		top: .875rem;
		padding-left: 1rem;
		padding-right: 1rem;
	}
}
.info-item {
	display: flex;
	height: 5.4375rem;
	align-items: center;
	justify-content: space-between;
	padding: 0 2.5rem;
	@include mobile {
		height: 3.5625rem;
		padding: 0;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
}
.info-item p:nth-child(1) {
	font-size: 1.5rem;
	line-height: 1.75rem;
	@include mobile {
		font-size: .75rem;
		line-height: 1rem;
		margin-bottom: 0.5rem;
	}
}
.info-item p:nth-child(2) {
	font-size: 2rem;
	line-height: 1.75rem;
	color: var(--c-accent);
	@include mobile {
		font-size: 1rem;
		line-height: 100%;
	}
}
</style>
