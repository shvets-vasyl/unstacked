<template>
  <CommonSectionTemplate>
    <div class="footer">
      <CommonSectionTitle class="footer-title">
        Join the UNSTAKEd Innovation
      </CommonSectionTitle>

      <p class="descr p1">
        Don’t miss your chance to be part of the future of DeFi. Participate in
        the UNSD presale today and unlock the potential of AI-powered yield
        optimization.
      </p>

      <div class="content">
        <div class="links">
					<p class="links-title mob">Links</p>
          <div class="link-items">
            <a
              v-for="({ text, link }, i) in links"
              :key="i"
              :href="link"
							target="_blank"
              class="hover-btn link p1"
            >
              {{ text }}
            </a>
          </div>

					<a class="presale-btn" href="https://presale2.unstaked.com" target="_blank">
						<CommonButton text="Join presale" />
					</a>
        </div>

				<div class="socials">
					<a href="https://t.me/UnstakedTokenOfficial" class="hover-btn" target="_blank">
						<IconTelegram />
					</a>
					<a href="https://x.com/unstaked_token" class="hover-btn" target="_blank">
						<IconTwitter />
					</a>
					<a href="https://www.instagram.com/unstaked_token" class="hover-btn" target="_blank">
						<IconInstagram />
					</a>
				</div>

				<p class="descr2 p1">
					UNSTAKED is a decentralized platform, and participation in the presale is at your own risk. Please ensure you understand the risks associated with cryptocurrency investments.
				</p>
				<p class="copy p1">
					© {{ new Date().getFullYear() }} UNSTAKED. All Rights Reserved. | Powered by AI & BUNSTAKED
				</p>

				<div class="docs-items">
					<a
						v-for="({ text, link }, i) in docs"
						:key="i"
						:href="link"
						target="_blank"
						class="hover-btn link p1"
					>
						{{ text }}
					</a>
				</div>

      </div>
    </div>
  </CommonSectionTemplate>
</template>
<script setup lang="ts">
const links = [
  {
    text: "Why Unstaked",
    link: "https://unstaked.com/why-choose",
  },
  {
    text: "Whitepaper",
    link: "https://unstaked.com/whitepaper.pdf",
  },
  {
    text: "Token Sale",
    link: "https://unstaked.com/token-sale",
  },
  {
    text: "How To Buy",
    link: "https://unstaked.com/how-to-buy",
  },
];

const docs = [
  {
    text: "Terms of Service",
    link: "https://unstaked.com/terms-of-service",
  },
  {
    text: "Privacy Policy",
    link: "https://unstaked.com/privacy-policy",
  },
  {
    text: "Token Disclaimer",
    link: "https://unstaked.com",
  },
  {
    text: "Cookie Policy",
    link: "https://unstaked.com/cookie-policy",
  },
];
</script>
<style scoped lang="scss">
.footer {
  position: relative;
	padding-right: 10.625rem;
	@include mobile {
		padding-right: 0;
	}
}
.footer-title {
  margin-bottom: 2rem;
	@include mobile {
		margin-bottom: 1.5rem;
	}
}
.descr {
  margin-bottom: 3.375rem;
	@include mobile {
		margin-bottom: 2.5rem;
	}
}
.link {
  color: var(--c-accent);
}
.links {
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 2.5rem;
	@include mobile {
		flex-direction: column;
	}
}
.presale-btn {
	width: 9.375rem;
	@include mobile {
		width: 100%;
		margin-top: 1.5rem;
	}
}
.link-items, .docs-items {
	display: flex;
	gap: 1.5rem;
	@include mobile {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1rem;
		width: 100%;
	}
}
.socials {
	display: flex;
	gap: 1.5rem;
	margin-bottom: 6.5rem;
	@include mobile {
		justify-content: center;
		margin-bottom: 2.5rem;
	}
}
.socials a {
	width: 2.5rem
}
.descr2, .copy {
	color: var(--c-grey2);
	margin-bottom: 1rem;
}
.copy {
	@include mobile {
		margin-bottom: 2.5rem;
	}
}
.links-title {
	color: var(--c-grey2);
	font-size: .875rem;
	font-family: var(--font-semibold);
	line-height: 1.125rem;
	width: 100%;
	margin-bottom: 1rem;
}
.docs-items {
	@include mobile {
		padding-bottom: 1rem;
	}
}
</style>
