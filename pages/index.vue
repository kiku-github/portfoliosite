<script setup lang="ts">
useHead({
    meta: [
        { property: 'og:type', content: 'website' },
    ],
});
const transitionRef = ref<HTMLElement | null>(null);
onMounted(() => {
    const transitionElement = transitionRef.value;
    if (transitionElement) {
        transitionElement.classList.add('c-transition');
    }
});
</script>

<template>
    <section ref="transitionRef" class="p-top">
        <div class="l-inner">
            <h1 class="p-top__name">Takumi <br class="p-top__hidden">Kikuzawa</h1>
            <div class="p-topCircle">
                <svg class="p-topCircleTxt" viewBox="0 0 100 100">
                    <path id="circle" class="p-topCircleTxt__circle" d="M 0 50 A 50 50 0 1 1 0 51 z"/>
                    <text class="p-topCircleTxt__txt">
                        <textPath xlink:href="#circle">
                            Web Developer . Web Developer .
                        </textPath>
                    </text>
                </svg>
            </div>
            <p class="p-top__txt">
                portfolio
            </p>
            <div class="p-top__hire">Hire me</div>
        </div>
    </section>
</template>

<style scoped lang="scss">
.p-top {
    position: relative;
    height: calc(100vh - 74px);
    &__name {
        position: fixed;
        top: 50%;
        right: 50%;
        font-size: 6rem;
        transform: translate(50%,-100%);
        line-height: 1.1;
        letter-spacing: .1em;
        white-space: nowrap;
        transition: .3s;
        animation: AnimationTitle 5s ease infinite;
        background: linear-gradient(to right, $colorTxt, $colorTxt, #f8ffd7);
        background-size: 200% 100%;
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
        text-align: center;
        @media (max-width: ($sp)) {
            font-size: 4.5rem;
            transform: translate(50%,-60%);
        }
    }
    &::before {
        content: "";
        position: absolute;
        top: 50%;
        right: 50%;
        width: 300px;
        height: 300px;
        padding: 50px;
        -webkit-filter: blur(5px);
        aspect-ratio: 1 / 1;
        background: radial-gradient(circle, rgba(152, 148, 223, 0.2), rgba(158, 182, 255, 0.5));
        border-radius: 50%;
        filter: blur(50px);
        transform: translate(40%,-60%);
    }
    &Circle {
        position: fixed;
        left: 50px;
        bottom: 50px;
        width: 70px;
        height: 70px;
        margin: auto;
        @media (max-width: ($sp)) {
            left: 20px;
            bottom: 50px;
            width: 50px;
            height: 50px;
        }
        &Txt {
            overflow: visible;
            animation: rotation 18s linear infinite;
            &__circle {
                fill: none;
            }
            &__txt {
                fill: black;
                font-size: 20px;
                letter-spacing: 0.03em;
            }
        }
    }
    &__hire {
        display: flex;
        align-items: center;
        justify-content: center;
        position: fixed;
        bottom: 57px;
        left: 57px;
        width: 55px;
        height: 55px;
        background: #000;
        border-radius: 50px;
        font-size: 1rem;
        font-weight: 700;
        color: #fff;
        @media (max-width: ($sp)) {
            left: 22.55px;
            bottom: 52px;
            width: 45px;
            height: 45px;
            font-size: .8rem;
        }
    }
    &__txt {
        position: fixed;
        top: 50%;
        right: 50%;
        font-size: 4rem;
        font-weight: 700;
        color: #C2B8C7;;
        transform: translate(50%,0%);
        letter-spacing: .1em;
        white-space: nowrap;
        @media (max-width: ($sp)) {
            top: 51%;
            font-size: 3.2rem;
            transform: translate(50%,80%);
        }
    }
    &__hidden {
        display: none;
        @media (max-width: ($sp)) {
            display: block;
        }
    }
}
@keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
@keyframes AnimationTitle {
    0% {
        background-position:0% 50%
    }
    50% {
        background-position:100% 0%
    }
    100% {
        background-position:0% 50%
    }
}
</style>