// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: ["nuxt-microcms-module"],
    microCMS: {
        serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
        apiKey: process.env.MICROCMS_API_KEY,
    },
    runtimeConfig: {
        public: {
            userId: process.env.EMAILJS_USERID,
            serviceId: process.env.EMAILJS_SERVICE_ID,
            templateId: process.env.EMAILJS_TEMPLATE_ID,
        }
    },
    css: [
        { src: '~/assets/css/style.scss' },
    ],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@import "@/assets/css/setting.scss";',
                },
            },
        },
    },
    app: {
        head: {
            htmlAttrs: {
                lang: 'ja',
                prefix: 'og: http://ogp.me/ns#'
            },
            meta: [
                { name: 'robots', content: 'noindex, nofollow' },
                { name: 'description', content: 'takumi kikuzawa portfoliosite' },
                { name: 'twitter:card', content: 'summary' },
                { name: 'format-detection', content: 'telephone=no' },
                { property: 'og:title', content: 'takumi kikuzawa' },
                { property: 'og:description', content: 'takumi kikuzawa portfoliosite' },
                { property: 'og:site_name', content: 'takumi kikuzawa' },
                { property: 'og:locale', content: 'ja_JP' }
            ],
            link: [
                {
                    rel: "preconnect",
                    href: "https://fonts.googleapis.com",
                },
                {
                    rel: "preconnect",
                    href: "https://fonts.gstatic.com",
                    crossorigin: "",
                },
                {
                    rel: "stylesheet",
                    href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;700&display=swap",
                },
            ],
        },
    },
})
