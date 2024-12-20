<template>
    <header class="app-header sticky top-0 shadow-lg h-16 text-md">
        <nav class="navbar h-full justify-between flex text-md">
            <div class="nav-item flex gap-10 pl-10 items-center h-full">
                <RouterLink to="/">
                    <LogoSvg />
                </RouterLink>
                <RouterLink
                    to="/tools"
                    active-class="active"
                    class="nav-link-item cursor-pointer h-full pt-5"
                    >云工具</RouterLink
                >
                <RouterLink
                    to="/pipelines"
                    active-class="active"
                    class="nav-link-item cursor-pointer h-full pt-5"
                    >云流程</RouterLink
                >
            </div>

            <div class="nav-item flex gap-10 pl-10 items-center h-full">
                <RouterLink
                    to="/system"
                    active-class="active"
                    class="nav-link-item cursor-pointer h-full no-underline pt-5"
                    >系统管理</RouterLink
                >
                <RouterLink
                    to="/analysis"
                    active-class="active"
                    class="nav-link-item cursor-pointer h-full no-underline pt-5"
                    >任务中心</RouterLink
                >
                <RouterLink
                    to="/account"
                    active-class="active"
                    class="nav-link-item cursor-pointer h-full no-underline pt-5"
                    >个人中心</RouterLink
                >
                <div
                    class="nav-link-item cursor-pointer h-full no-underline pt-5">
                    登录
                </div>
                <div
                    class="nav-link-item cursor-pointer h-full text-white bg-primary px-8 pt-5">
                    注册
                </div>
            </div>
        </nav>
    </header>
    <section class="app-section">
        <aside class="app-aside">
            <div class="aside-title">aside-title</div>
            <div class="aside-menu"></div>
        </aside>
        <main class="app-main">
            <RouterView />
        </main>
    </section>
</template>

<script lang="ts" setup>
    import { onMounted, ref } from 'vue'
    import { RouterLink } from 'vue-router'
    import { LogoSvg } from './components/icons'

    const datas = ref<any[]>([])
    const fetchData = async () => {
        const tools = await fetch('/datas/tools.json').then<any[]>((r) =>
            r.json()
        )
        datas.value = tools
    }
    onMounted(() => {
        fetchData()
    })
</script>

<style lang="less" scoped>
    .nav-link-item {
        &.active {
            color: var(--primary);
        }
    }
</style>
