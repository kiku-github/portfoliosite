<script setup lang="ts">
import type { MicroCMSImage } from "microcms-js-sdk";
import { gsap } from 'gsap';
useHead({
    title: 'WORKS',
    meta: [
        { property: 'og:type', content: 'article' },
    ],
});

interface Works {
    title?: string;
    description?: string;
    github?: string;
    url?: string;
    skill?: string;
    eyecatch?: MicroCMSImage;
}

const { data } = await useMicroCMSGetList<Works>({
    endpoint: "works",
});

const transitionRef = ref<HTMLElement | null>(null);
onMounted(() => {
    const transitionElement = transitionRef.value;
    if (transitionElement) {
        transitionElement.classList.add('c-transition');
        gsap.from(transitionElement.querySelector('.js-in'), {
            opacity: 0,
            y: 20,
            duration: 1,
            ease: 'power2.out'
        });
    }
});
</script>

<template>
    <section ref="transitionRef" class="p-works">
        <div class="l-inner">
            <div class="c-ttl u-mgBottom--50 u-sp-mgBottom--10 js-in">
                <h1 class="c-ttl__main">WORKS</h1>
            </div>
            <ul v-if="data" class="p-worksList">
                <li v-for="work in data?.contents" :key="work.id" class="p-worksListItem">
                    <NuxtLink :to="work.url" target="_blank" class="p-worksListItemImg">
                        <img :src="work.eyecatch?.url" class="p-worksListItemImg__file" alt="制作実績サムネイル" />
                    </NuxtLink>
                    <div class="p-worksListItemContent">
                        <NuxtLink :to="work.url" target="_blank" class="p-worksListItemContent__ttl">
                            {{ work.title }}
                        </NuxtLink>
                        <div v-html="generateTextWithLineBreaks(work.description || '')" class="p-worksListItemContent__txt"></div>
                        <div class="p-worksListItemContent__link">
                            <NuxtLink :to="work.github" target="_blank" class="p-worksListItemContentGithub">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" class="p-worksListItemContentGithub__svg"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
                            </NuxtLink>
                            <NuxtLink :to="work.url" target="_blank" class="c-btn">
                                Visit Project
                            </NuxtLink>
                        </div>
                        <p class="p-worksListItemContent__skill">
                            {{ work.skill }}
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
</template>

<style scoped lang="scss">
.p-works {
    opacity: 0;
    &List {
        display: flex;
        flex-direction: column;
        gap: 6rem;
        @media (max-width: ($sp)) {
            gap: 3rem;
        }
        &Item {
            display: flex;
            align-items: center;
            gap: 2rem;
            position: relative;
            padding: 3rem;
            border: 20px solid $colorMain;
            @media (max-width: ($ipro)) {
                flex-direction: column;
            }
            @media (max-width: ($sp)) {
                padding: 2rem;
                border: 10px solid $colorMain;
            }
            &::before {
                position: absolute;
                content: "";
                bottom: -15px;
                left: 15px;
                width: 100%;
                height: 100%;
                z-index: -1;
            }
            &Img {
                width: 100%;
                max-width: 500px;
                overflow:hidden;
                    @media (max-width: ($ipro)) {
                        max-width: 100%;
                    }
                &__file {
                    width: 100%;
                    transition: .3s;
                    &:hover {
                        transform: scale(1.05);
                    }
                }
            }
            &Content {
                &__ttl {
                    display: block;
                    position: relative;
                    width: fit-content;
                    margin-bottom: 1rem;
                    font-weight: 700;
                    font-size: 3rem;
                    color: $colorTxt;
                    transition: .4s;
                    @media (max-width: ($ipro)) {
                        font-size: 2.2rem;
                    }
                    &::after {
                        position: absolute;
                        content: "";
                        right: 0;
                        bottom: 0;
                        left: 0;
                        height: 2px;
                        background-color: $colorMain;
                        opacity: .9;
                        transition: transform .4s cubic-bezier(.55,.055,.675,.19);
                        transform: scaleX(0);
                        transform-origin: right center;
                    }
                    &:hover {
                        color: $colorMain;
                        &::after {
                            transition: transform .4s cubic-bezier(.215,.61,.355,1);
                            transform: scaleX(1);
                            transform-origin: left center;
                        }
                    }
                }
                &__txt {
                    max-width: 610px;
                    margin-bottom: 2rem;
                    font-weight: 500;
                }
                &__link {
                    display: flex;
                    align-items: center;
                    gap: 2rem;
                    margin-bottom: 1rem;
                }
                &Github {
                    width: 100%;
                    max-width: 30px;
                    max-height: 30px;
                    transition: .4s;
                    &:hover {
                        transform: translateY(-5px);
                    }
                }
                &__skill {
                    font-size: 1.6rem;
                    font-weight: 500;
                    word-break: break-word;
                    @media (max-width: ($sp)) {
                        font-size: 1.2rem;
                    }
                }
            }
        }
    }
}
</style>