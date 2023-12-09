<script setup lang="ts">
import { gsap } from 'gsap';
useHead({
    title: 'ABOUT',
    meta: [
        { property: 'og:type', content: 'article' },
    ],
});
const transitionRef = ref<HTMLElement | null>(null);
const countAge = ref(0);
const countExperience = ref(0);
const countMotivated = ref(0);
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
        gsap.to(countAge, {
            value: 26,
            duration: 2,
            roundProps: 'value',
            onUpdate: () => {
                const numElement = document.querySelector('.js-countAge');
                if (numElement) {
                    numElement.textContent = `${countAge.value}+`;
                }
            },
            ease: 'power2.out'
        });
        gsap.to(countExperience, {
            value: 1,
            duration: 2,
            roundProps: 'value',
            onUpdate: () => {
                const numElement = document.querySelector('.js-countExperience');
                if (numElement) {
                    numElement.textContent = `${countExperience.value}+`;
                }
            },
            ease: 'power2.out'
        });
        gsap.to(countMotivated, {
            value: 99,
            duration: 2,
            roundProps: 'value',
            onUpdate: () => {
                const numElement = document.querySelector('.js-countMotivated');
                if (numElement) {
                    numElement.textContent = `${countMotivated.value}+`;
                }
            },
            ease: 'power2.out'
        });
    }
});
</script>

<template>
    <section ref="transitionRef" class="p-about">
        <div class="l-inner">
            <div class="p-aboutContent">
                <div class="p-aboutContentInfo">
                    <div class="p-aboutContentInfoNum">
                        <span class="js-countAge">{{ countAge }}+</span>
                        <span class="p-aboutContentInfoNum__min">Age</span>
                    </div>
                    <div class="p-aboutContentInfoNum">
                        <span class="js-countExperience">{{ countExperience }}+</span>
                        <span class="p-aboutContentInfoNum__min">experience</span>
                    </div>
                    <div class="p-aboutContentInfoNum">
                        <span class="js-countMotivated">{{ countMotivated }}+</span>
                        <span class="p-aboutContentInfoNum__min">be motivated</span>
                    </div>
                </div>
                <div class="p-aboutContentDetail">
                    <h2 class="p-aboutContentDetail__head js-in">ABOUT</h2>
                    <p class="p-aboutContentDetail__txt">
                        -【経歴:ルート営業→職業訓練校→Webコーダー】<br>
                        2022年4月に2年間勤めたルート営業を退職し、同年6月から職業訓練校に通い始めました。Web制作分野を学び、4ヶ月後退校に合わせて10月からWebコーダーとしてWeb制作会社に転職を果たし、これまで約1年間コーディング業務に携わりました。 現在は、Web開発分野のスキルアップに励んでいます！<br>
                        <br>
                        - 現職のWebコーダーではユーザビリティを意識して日々の業務に取り組んでいます。表示速度や動き一つがコンバーションに直結する為、スムーズな画面遷移や非同期通信の採用などを通じて、ユーザーが待たされることなく利用できる環境が大事だと考えています。VueやNuxt.jsを学んでいく中で、ユーザー体験の向上を意識した利便性の高いものを作れるようになりたいと考えるようになりました。<br>
                        <br>
                        - Web制作の学習を始めてから業務中は周囲に頼るところは頼りつつ、業務外の時間も含めエンジニアとしての自走力を大事に考えて学習を続けてきました。変化の激しい業界の中でキャッチアップを続けてユーザー目線に立っての考え方と併せ、今後の業務に活かしていきます！
                    </p>
                </div>
            </div>
            <h2 class="p-aboutSkillTtl">Skill Set</h2>
            <p class="p-aboutSkillTxt u-mgBottom--20">
                <b>coding</b><br>
                HTML5 / CSS3(FLOCSS) / SCSS / Javascript / jQquery / Vue.js / Nuxt3 / Three.js / Typescript / Wordpress(PHP)
            </p>
            <p class="p-aboutSkillTxt u-mgBottom--20">
                <b>design</b><br>
                XD / Photoshop / Illustrator / Figma / STUDIO
            </p>
            <p class="p-aboutSkillTxt">
                <b>tool</b><br>
                MacOS / Git / Github / Slack / Backlog / Soucetree / MAMP / VSCode / Cyberduck
            </p>
        </div>
    </section>
</template>

<style scoped lang="scss">
.p-about {
    width: 100%;
    &Content {
        display: flex;
        justify-content: center;
        gap: 8rem;
        margin-bottom: 7rem;
        @media (max-width: ($ipro)) {
            gap: 4rem;
        }
        @media (max-width: ($sp)) {
            flex-direction: column;
            gap: 0;
            margin-bottom: 3rem;
        }
        &Info {
            display: flex;
            flex-direction: column;
            gap: 3rem;
            @media (max-width: ($sp)) {
                flex-direction: row;
                justify-content: center;
                order: 1;
                margin-bottom: 2rem;
            }
            &Num {
                display: flex;
                flex-direction: column;
                font-size: 6rem;
                font-weight: 700;
                @media (max-width: ($sp)) {
                    font-size: 3rem;
                }
                &__min {
                    font-size: 2rem;
                    @media (max-width: ($sp)) {
                        font-size: 1.3rem;
                    }
                }
            }
        }
        &Detail {
            width: 100%;
            max-width: 700px;
            @media (max-width: ($sp)) {
                display: contents;
            }
            &__head {
                margin-bottom: 2rem;
                font-size: 6rem;
                text-align: center;
                @media (max-width: ($sp)) {
                    margin-bottom: .5rem;
                    font-size: 3.6rem;
                    order: 0;
                }
            }
            &__txt {
                font-size: 1.5rem;
                line-height: 1.7;
                @media (max-width: ($sp)) {
                    font-size: 1.4rem;
                    order: 2;
                }
            }
        }
    }
    &Skill {
        &Ttl {
            margin-bottom: 2rem;
            font-size: 3rem;
            text-align: center;
            @media (max-width: ($sp)) {
                margin-bottom: 1.4rem;
                font-size: 2.4rem;
            }
        }
        &Txt {
            font-size: 1.6rem;
            text-align: center;
            line-height: 1.8;
            @media (max-width: ($sp)) {
                font-size: 1.4rem;
            }
        }
    }
}
</style>