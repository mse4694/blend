<template>
    <Layout />
    <div class="container flex flex-row">
        <div> 
            <NavSideBar /> 
            <Head title="About" />
        </div>

        <div class="w-full flex items-start justify-left bg-green-200 px-2 py-2">
            <div class="w-full h-full px-2 bg-white">
                <h1>About Us</h1>
            </div>
        </div>  
    </div>
</template>

<script>
//import {Link} from '@inertiajs/inertia-vue3';
import Layout from '@/Components/Layouts/Layout';
import NavSideBar from '@/Components/Layouts/NavSideBar';

export default {
    components: {
        Layout, NavSideBar
    }
}
</script>