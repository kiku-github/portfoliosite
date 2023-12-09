<script setup lang="ts">
useHead({
    titleTemplate: (title) => {
        return title ? `takumi kikuzawa - ${title}` : 'takumi kikuzawa';
    },
})
</script>

<template>
    <Header />
    <slot></slot>
    <Footer />
    <Background />
</template>