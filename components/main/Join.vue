<template>
  <CommonSectionTemplate>
    <div class="join">
      <CommonSectionTitle class="join-title">
        join the unstacked innovation:<br class="desk" />the best crypto presale
        of 2025 - <span>$unsd</span>
      </CommonSectionTitle>

      <p class="p1">
        The Unstaked token ($UNSD) fuels our ecosystem and unlocks exclusive
        benefits. Learn more about the $UNSD token presale and how you can
        participate.
      </p>

      <div class="content">
        <div class="left">
          <div class="price-wrap">
            <SvgJoinCircle />
            <p class="price">6 BILLION<br /><span>$UNSD</span></p>
          </div>

          <a
            class="p1 download-btn hover-btn"
            href="https://presale2.unstaked.com"
            target="_blank"
          >
            <CommonBox> download whıtepaper </CommonBox>
          </a>
        </div>
        <div class="right">
					<div class="info">
						<p class="info-title">Limited-Time Opportunity</p>
						<div class="presale">
							<p>PRESALE IS NOW</p>
							<p>Live</p>
						</div>
						<div class="total">
							<p>TOTAL SUPPLY</p>
							<p>6b</p>
							<p>$USND</p>
						</div>
					</div>

					<div class="info-prices">
						<div class="info-price">
							<p>Starting Price</p>
							<p>$0.0065</p>
						</div>
						<div class="info-price">
							<p>Launch Price (27x)</p>
							<p>$0.1819</p>
						</div>
					</div>

					<div class="info-btns">
						<a class="buy-btn" href="https://presale2.unstaked.com" target="_blank">
							<CommonButton text="buy the unstacked token ($UNSD)" />
						</a>
						<a
							class="p1 details-btn hover-btn"
							href="https://presale2.unstaked.com"
							target="_blank"
						>
							<CommonBox>view pre-sale details</CommonBox>
						</a>
					</div>
				</div>
      </div>
    </div>
  </CommonSectionTemplate>
</template>
<script setup lang="ts"></script>
<style scoped lang="scss">
.join {
  position: relative;
}
.join-title {
  margin-bottom: 2rem;
}
.join-title span {
  color: var(--c-accent);
}
.content {
  display: flex;
  justify-content: space-between;
}
.price-wrap {
  width: 30.4375rem;
  position: relative;
}
.left {
  padding-left: 4.375rem;
}
.right {
	padding-right: 5.625rem;
	padding-top: 6.25rem;
}
.price {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 3.25rem;
  text-transform: uppercase;
  line-height: 100%;
  text-align: center;
  margin-left: -3.125rem;
}
.price span {
  color: var(--c-accent);
}
.download-btn {
  display: inline-flex;
  text-transform: uppercase;
  margin-left: 4.875rem;
	font-family: var(--font-semibold);
}
.info-title {
	text-align: center;
	color: var(--c-accent);
	text-shadow: 0 0 .75rem rgba(255, 142, 61, 0.65);
	font-size: 1.5rem;
	line-height: 1.75rem;
	text-transform: uppercase;
	margin-bottom: 1rem;
}
.presale, .total {
	text-align: center;
	display: flex;
}
.presale {
	gap: 3.125rem;
	margin-bottom: 1rem;
}
.total {
	gap: 1.5rem;
	margin-bottom: 50px;
}
.presale p:first-child, .total p:nth-child(1), .total p:nth-child(3) {
	font-size: 1.25rem;
	line-height: 1.75rem;
	text-transform: uppercase;
}
.presale p:last-child, .total p:nth-child(2)  {
	font-size: 2rem;
	line-height: 1.75rem;
	text-transform: uppercase;
	color: var(--c-accent);
}
.info {
	display: flex;
	flex-direction: column;
	align-items: center;
}
.info-prices {
	border: 1px solid var(--c-grey);
	border-bottom: none;
	width: 34rem;
	display: grid;
	grid-template-columns: 1fr 1fr;
	text-align: center;
	padding: 2rem 0;
}
.info-price p:first-child {
	font-size: 1.5rem;
	line-height: 1.75rem;
	margin-bottom: 1rem;
}
.info-price p:last-child {
	font-size: 2rem;
	line-height: 1.75rem;
	color: var(--c-accent);
}
.buy-btn:deep(.btn-wrap) {
	padding: 0 0.5rem;
}
.info-btns {
	display: flex;
	margin-top: 1.5rem;
}
.details-btn {
	font-family: var(--font-semibold);
	text-transform: uppercase;
	margin-left: auto;
}
</style>
