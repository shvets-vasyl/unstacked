<template>
  <main class="main-page">
		<MainHero />
		<MainSum />
		<MainJoin />
		<MainJourney />
		<MainTokenomics />
		<MainFooter />
  </main>
</template>
<script setup lang="ts">
onMounted(() => {
	gsap.to(".main-page", {
		opacity: 1,
	})
})
</script>
<style scoped lang="scss">
.main-page {
	position: relative;
	opacity: 0;
}
</style>
