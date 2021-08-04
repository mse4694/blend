<template>
    <Layout />
    <div class="container w-full flex flex-row">
        <div> 
            <NavSideBar />
            <Head title="Welcome" />
        </div>

        <div class="w-full items-start justify-left bg-green-200 px-1 py-1">
            <div class="h-full px-2 bg-white">
                <h1>Welcome</h1> <br>
                <p>Hello welcome to your first Inertia app!</p>
            </div>
        </div>  
        <!-- <div>
            
        </div> -->
            
    </div>
</template>

<script>


//import Layout from '../../Components/Layouts/Layout';
import Layout from '@/Components/Layouts/Layout';
import {Head} from '@inertiajs/inertia-vue3';
import NavSideBar from '@/Components/Layouts/NavSideBar';

export default {
    components: {
        Head, Layout, NavSideBar,
    },
}
</script>