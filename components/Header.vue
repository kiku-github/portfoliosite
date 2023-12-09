<template>
    <header class="l-header">
        <nav class="l-headerNav">
            <ul class="l-headerNavList">
                <li class="l-headerNavListItem">
                    <NuxtLink class="l-headerNavListItemLink" to="/"><span class="l-headerNavListItemLink__txt">TOP</span></NuxtLink>
                </li>
                <li class="l-headerNavListItem">
                    <NuxtLink class="l-headerNavListItemLink" to="/works"><span class="l-headerNavListItemLink__txt">WORKS</span></NuxtLink>
                </li>
                <li class="l-headerNavListItem">
                    <NuxtLink class="l-headerNavListItemLink" to="/about"><span class="l-headerNavListItemLink__txt">ABOUT</span></NuxtLink>
                </li>
                <li class="l-headerNavListItem">
                    <NuxtLink class="l-headerNavListItemLink" to="/contact"><span class="l-headerNavListItemLink__txt">CONTACT</span></NuxtLink>
                </li>
            </ul>
        </nav>
    </header>
</template>

<style scoped lang="scss">
.l-header {
    position: fixed;
    right: 0;
    width: 100%;
    padding-right: 6rem;
    z-index: 9999;
    @media (max-width: ($ipro)) {
        padding-right: 0;
    }
    &Nav {
        &List {
            display: flex;
            justify-content: flex-end;
            @media (max-width: ($ipro)) {
                justify-content: center;
            }
            &Item {
                width: 100%;
                max-width: 150px;
                &Link {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: relative;
                    width: 100%;
                    height: 12rem;
                    font-size: 2rem;
                    color: $colorTxt;
                    @media (max-width: ($sp)) {
                        height: 8rem;
                        font-size: 1.4rem;
                    }
                    &::before {
                        position: absolute;
                        content: "";
                        width: 1px;
                        height: 10px;
                        bottom: 20px;
                        right: 50%;
                        background: $colorTxt;
                        transform: rotate(90deg);
                        transition: .4s;
                        @media (max-width: ($sp)) {
                            bottom: 10px;
                        }
                    }
                    &::after {
                        position: absolute;
                        content: "";
                        top: 0;
                        right: 0;
                        bottom: 0;
                        left: 0;
                        z-index: -1;
                        background-color: $colorMain;
                        opacity: .9;
                        transition: transform .4s cubic-bezier(.55,.055,.675,.19);
                        transform: scaleX(0);
                        transform-origin: right center;
                    }
                    &__txt {
                        transition: .4s;
                    }
                    &:hover {
                        color: #fff;
                        &::before {
                            background: #fff;
                            transform: rotateX(360deg);
                        }
                        &::after {
                            transition: transform .4s cubic-bezier(.215,.61,.355,1);
                            transform: scaleX(1);
                            transform-origin: left center;
                        }
                        & .l-headerNavListItemLink__txt {
                            transform: rotateX(360deg);
                        }
                    }
                }
            }
        }
    }
}
</style>