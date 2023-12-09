<script setup lang="ts">
import emailjs from 'emailjs-com';
import { gsap } from 'gsap';
useHead({
    title: 'CONTACT',
    meta: [
        { property: 'og:type', content: 'article' },
    ],
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
const formData = ref({
    name: '',
    email: '',
    message: '',
    complete: '',
    error: false,
    errors: {
        name: '',
        email: '',
        message: '',
    },
});
const config = useRuntimeConfig();
const emailjsConfig = {
    userId: config.public.userId ?? '',
    serviceId: config.public.serviceId ?? '',
    templateId: config.public.templateId ?? ''
};
const submitForm = async () => {
    formData.value.error = false;
    formData.value.errors.name = '';
    formData.value.errors.email = '';
    formData.value.errors.message = '';

    if (!formData.value.name) {
        formData.value.errors.name = 'お名前を入力してください。';
        formData.value.error = true;
    }
    if (!formData.value.email) {
        formData.value.errors.email = 'メールアドレスを入力してください。';
        formData.value.error = true;
    } else if (!isValidEmail(formData.value.email)) {
        formData.value.errors.email = '正しい形式で入力してください。';
        formData.value.error = true;
    }
    if (!formData.value.message) {
        formData.value.errors.message = 'お問い合わせ内容を入力してください。';
        formData.value.error = true;
    }

    if (formData.value.error) {
        return;
    }
    try {
        const result = await emailjs.send(
            emailjsConfig.serviceId,
            emailjsConfig.templateId,
            {
                name: formData.value.name,
                email: formData.value.email,
                message: formData.value.message,
            },
            emailjsConfig.userId
        );
        formData.value.name = '';
        formData.value.email = '';
        formData.value.message = '';
        formData.value.complete = 'お問い合わせありがとうございました。';
        submitComplete();
    } catch (error) {
        console.error(error);
    }
};
const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};
const submitComplete = () => {
    setTimeout(() => {
        formData.value.complete = '';
    }, 1500);
}
</script>

<template>
    <section ref="transitionRef" class="p-contact">
        <div class="l-inner">
            <div class="c-ttl u-mgBottom--50 u-sp-mgBottom--10 js-in">
                <h1 class="c-ttl__main">CONTACT</h1>
            </div>
            <form method="POST" @submit.prevent="submitForm" class="p-contactForm">
                <div class="p-contactFormItem">
                    <label class="p-contactFormItem__label" for="form_name">Name</label>
                    <input class="p-contactFormItem__txt" id="form_name" type="text" v-model="formData.name" name="form_name">
                    <p v-if="formData.errors.name" class="p-contactFormItem__error">{{ formData.errors.name }}</p>
                </div>
                <div class="p-contactFormItem">
                    <label class="p-contactFormItem__label" for="form_email">Mail Address</label>
                    <input class="p-contactFormItem__txt" id="form_email" type="text" v-model="formData.email" name="form_email">
                    <p v-if="formData.errors.email" class="p-contactFormItem__error">{{ formData.errors.email }}</p>
                </div>
                <div class="p-contactFormItem">
                    <label class="p-contactFormItem__label" for="form_message">Message</label>
                    <textarea class="p-contactFormItem__txt" id="form_message" v-model="formData.message" name="form_message" rows="5"></textarea>
                    <p v-if="formData.errors.message" class="p-contactFormItem__error">{{ formData.errors.message }}</p>
                </div>
                <button class="c-btn u-mg--auto" id="form-btn" type="submit" name="button">Send</button>
            </form>
            <transition name="fade">
                <p v-if="formData.complete" class="p-contact__message">{{ formData.complete }}</p>
            </transition>
        </div>
    </section>
</template>

<style scoped lang="scss">
.p-contact {
    &Form {
        padding: 3rem;
        border: 20px solid $colorMain;
        @media (max-width: ($sp)) {
            padding: 2rem;
            border: 10px solid $colorMain;
        }
        &Item {
            display: flex;
            flex-direction: column;
            gap: .5rem;
            margin-bottom: 2.5rem;
            @media (max-width: ($sp)) {
                margin-bottom: 1rem;
            }
            &__label {
                position: relative;
                width: fit-content;
                font-size: 2rem;
                font-weight: 500;
                @media (max-width: ($sp)) {
                    font-size: 1.6rem;
                }
                &::before {
                    position: absolute;
                    content: "*";
                    top: 0;
                    right: -8px;
                    font-size: 1.2rem;
                    color:rgb(249, 50, 50);
                }
            }
            &__txt {
                padding: 1.5rem;
                background: #fff;
                border: 1px solid $colorBorder;
                transition: .4s;
                @media (max-width: ($sp)) {
                    padding: 1rem 1.5rem;
                }
                &:focus {
                    border: 1px solid $colorMain;
                }
            }
            &__error {
                font-size: 1.2rem;
                color:rgb(249, 50, 50);
            }
        }
        &__btn {
            display: block;
            width: fit-content;
            margin: 0 auto;
        }
    }
    &__message {
        position: fixed;
        top: 50%;
        left: 0;
        width: 100vw;
        padding: 2rem 0;
        background: $colorBorder;
        font-size: 1.6rem;
        letter-spacing: .05em;
        color: #fff;
        text-align: center;
        transform: translateY(-50%);
        transition: .4s;
        z-index: 9999;
    }
}
</style>