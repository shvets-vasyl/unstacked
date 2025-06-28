<template>
  <div class="journey">
    <div class="sticky">
      <CommonSectionTemplate class="journey-template">
        <CommonSectionTitle class="journey-title">
          Our Journey <br class="mob" />to Elevate <br />Automation
        </CommonSectionTitle>

        <p class="descr p1">
          This roadmap outlines our plan to create a user-friendly platform that
          empowers individuals to build and deploy AI agents. We will focus on
          delivering a high-quality product that meets the needs of our users
          and drives the adoption of AI technology.
        </p>

        <div class="content journey-content">
          <div class="items">
            <div v-for="({ title, list }, i) in steps" :key="i" class="item">
              <div class="item-progress">
                <IconCheck class="item-check" />
                <div class="progress-line-wrap">
                  <div class="progress-line" />
                </div>
              </div>
              <p class="item-title">{{ title }}</p>
              <div class="item-list">
                <p v-for="text in list" class="item-text p1">{{ text }}</p>
              </div>
            </div>
          </div>
        </div>
      </CommonSectionTemplate>
    </div>
  </div>
</template>
<script setup lang="ts">
const steps = [
  {
    title: "Q2  2025",
    list: [
      "Finalize comprehensive smart contract audits and undergo rigorous external security verifications to ensure maximum reliability and safety for all users.",
      "Conduct a fully transparent, public presale event, ensuring fair and decentralized token distribution to empower early community formation.",
    ],
  },
  {
    title: "Q3 2025",
    list: [
      "Release MVP platform of AI agents leading to connection to social media platforms X (Twitter) and Telegram.",
      "Launch $UNSD trading with a strong $20 million liquidity foundation to ensure market stability and investor confidence.",
    ],
  },
  {
    title: "Q4  2025",
    list: [
      "Expand platform compatibility to social networks, including Twitter (X), Telegram, Instagram and Discord.",
      "Launch the “Agent Customization Marketplace,” enabling users to further personalize and upgrade their AI agents with unique capabilities and visual identities.",
      "Conduct the first rounds of decentralized governance proposals and votes, establishing the foundation of community-led decision-making.",
    ],
  },
  {
    title: "Q1  2026",
    list: [
      "Form strategic partnerships with leading blockchain and AI projects, strengthening Unstaked’s technological edge and ecosystem reach.",
      "Introduce NFT-based agent enhancements, providing a vibrant ecosystem for agent customization, ownership, and tradable upgrades.",
      "Unstaked’s roadmap is not a dream — it is a clear, methodical path toward building the first truly decentralized, AI-augmented digital economy.",
    ],
  },
];

onMounted(() => {
  initAnimation();
});

const initAnimation = () => {
  const content = document.querySelector(".journey-content") as HTMLElement;
  const items = content.querySelector(".items") as HTMLElement;
  const lines = items.querySelectorAll(
    ".progress-line"
  ) as NodeListOf<HTMLElement>;
  const circlePath = items.querySelectorAll(
    ".circle-path"
  ) as NodeListOf<SVGPathElement>;
  const checkPath = items.querySelectorAll(
    ".check-path"
  ) as NodeListOf<SVGPathElement>;

  const maxScroll = items.scrollWidth - content.offsetWidth;

  const tl = gsap.timeline({
    defaults: {
      ease: "none",
    },
    scrollTrigger: {
      trigger: ".journey",
      start: "top top",
      end: "bottom bottom",
      scrub: true,
    },
  });

  tl.to(items, {
    x: -maxScroll,
    duration: 1,
  });

  const overlap = [1, 0.75, 0.5, 0.25];

  const isDesktop = window.innerWidth > 1023;

  lines.forEach((line, i) => {
    tl.to(
      checkPath[i],
      {
        opacity: 1,
        duration: 0.016,
      },
      `-=${overlap[i]}`
    );

    tl.to(
      circlePath[i],
      {
        stroke: "#FF8E3D",
        duration: 0.016,
      },
      `-=${overlap[i]}`
    );

    if (isDesktop) {
      tl.to(
        line,
        {
          width: "100%",
          duration: 0.25,
        },
        `-=${overlap[i]}`
      );
    } else {
      tl.to(
        line,
        {
          height: "100%",
          duration: 0.25,
        },
        `-=${overlap[i]}`
      );
    }
  });
};
</script>
<style scoped lang="scss">
.journey {
  position: relative;
  height: 300vh;
  @include mobile {
    height: auto;
  }
}
.sticky {
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  @include mobile {
    position: relative;
    height: auto;
  }
}
.journey-title {
  margin-bottom: 2rem;
  @include mobile {
    margin-bottom: 1.5rem;
  }
}
.descr {
  padding-right: 6.25rem;
  margin-bottom: 3.125rem;
  @include mobile {
    padding-right: 0;
    margin-bottom: 2.5rem;
  }
}
.content {
  overflow: hidden;
}
.journey-template,
.journey-template:deep(.container),
.journey-template:deep(.box) {
  height: 100%;
}
.items {
  display: flex;
  width: max-content;
  @include mobile {
    width: 100%;
    flex-direction: column;
  }
}
.item {
  width: 34rem;
  flex: 0 0 34rem;
  @include mobile {
    width: 100%;
    flex: 1;
    padding-left: 2.25rem;
    position: relative;
  }
}
.item-title {
  font-size: 2rem;
  line-height: 1.75rem;
  text-transform: uppercase;
  color: var(--c-accent);
  margin-bottom: 2rem;
  @include mobile {
    font-size: 1.5rem;
    line-height: 100%;
    margin-bottom: 1rem;
  }
}
.item-text:not(:last-child) {
  margin-bottom: 1rem;
  @include mobile {
    margin-bottom: 0.5rem;
  }
}
.item-list {
  padding-right: 1.5rem;
  @include mobile {
    padding-right: 0;
		padding-bottom: 2.5rem;
  }
}
.item-text {
  color: var(--c-grey2);
  padding-left: 1.5rem;
  position: relative;
}
.item-text:after {
  content: "";
  position: absolute;
  top: 0.625rem;
  left: 0.625rem;
  width: 0.25rem;
  height: 0.25rem;
  border-radius: 100%;
  background: var(--c-grey2);
}
.item-check {
  width: 2.625rem;
  @include mobile {
    width: 1.5rem;
  }
}
.item-progress {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  @include mobile {
    margin-bottom: 0;
    flex-direction: column;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    gap: 0.5rem;
  }
}
.progress-line-wrap {
  flex: 1 1 auto;
  height: 0.125rem;
  margin-right: 1rem;
  background: var(--c-grey);
  @include mobile {
    height: 100%;
    width: .0625rem;
    margin-right: 0;
    margin-bottom: 0.5rem;
  }
}
.progress-line {
  height: 100%;
  background: var(--c-accent);
  width: 0%;
	@include mobile {
		height: 0;
		width: 100%;
	}
}
.item:last-child .progress-line-wrap {
  @include mobile {
    opacity: 0;
  }
}
</style>
