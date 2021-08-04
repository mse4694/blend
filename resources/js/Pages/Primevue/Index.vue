<template>
    <Layout />
    <div class="container flex flex-row">
        <div> 
            <NavSideBar /> 
            <Head title="Primevue Button" />
        </div>

        <div class="w-full flex items-start justify-left bg-green-200 px-1 py-1">
            <div class="w-full h-full px-2 bg-white">
                <h1>Primevue Example Page</h1>
            
                <h5>Basic</h5>
                <Button label="Submit" v-tooltip="'กดปุ่มนี้เพื่อดำเนินการ'"/>
                <Button label="Disabled" disabled="disabled" />
                <Button label="Link" class="p-button-link" />

                <h5>Icons</h5>
                <Button icon="pi pi-check" v-tooltip.bottom="'กดปุ่มนี้เพื่อดำเนินการ'"/>
                <Button label="Submit" icon="pi pi-check" />
                <Button label="Submit" icon="pi pi-check" iconPos="right" />

                <h5>Severities</h5>
                <Button label="Primary" />
                <Button label="Secondary" class="p-button-secondary" />
                <Button label="Success" class="p-button-success" />
                <Button label="Info" class="p-button-info" />
                <Button label="Warning" class="p-button-warning" />
                <Button label="Help" class="p-button-help" />
                <Button label="Danger" class="p-button-danger" />

                <h5>Raised Buttons</h5>
                <Button label="Primary" class="p-button-raised p-ripple" v-ripple/>
                <Button label="Secondary" class="p-button-raised p-button-secondary" />
                <Button label="Success" class="p-button-raised p-button-success" />
                <Button label="Info" class="p-button-raised p-button-info" />
                <Button label="Warning" class="p-button-raised p-button-warning" />
                <Button label="Help" class="p-button-raised p-button-help" />
                <Button label="Danger" class="p-button-raised p-button-danger" />

                <h5>Rounded Buttons</h5>
                <Button label="Primary" class="p-button-rounded" />
                <Button label="Secondary" class="p-button-rounded p-button-secondary" />
                <Button label="Success" class="p-button-rounded p-button-success" />
                <Button label="Info" class="p-button-rounded p-button-info" />
                <Button label="Warning" class="p-button-rounded p-button-warning" />
                <Button label="Help" class="p-button-rounded p-button-help" />
                <Button label="Danger" class="p-button-rounded p-button-danger" />

                <h5>Text Buttons</h5>
                <Button label="Primary" class="p-button-text" />
                <Button label="Secondary" class="p-button-secondary p-button-text" />
                <Button label="Success" class="p-button-success p-button-text" />
                <Button label="Info" class="p-button-info p-button-text" />
                <Button label="Warning" class="p-button-warning p-button-text" />
                <Button label="Help" class="p-button-help p-button-text" />
                <Button label="Danger" class="p-button-danger p-button-text" />
                <Button label="Plain" class="p-button-text p-button-plain" />

                <h5>Raised Text Buttons</h5>
                <Button label="Primary" class="p-button-raised p-button-text" />
                <Button label="Secondary" class="p-button-raised p-button-secondary p-button-text" />
                <Button label="Success" class="p-button-raised p-button-success p-button-text" />
                <Button label="Info" class="p-button-raised p-button-info p-button-text" />
                <Button label="Warning" class="p-button-raised p-button-warning p-button-text" />
                <Button label="Help" class="p-button-raised p-button-help p-button-text" />
                <Button label="Danger" class="p-button-raised p-button-danger p-button-text" />
                <Button label="Plain" class="p-button-raised p-button-text p-button-plain" />

                <h5>Outlined Buttons</h5>
                <Button label="Primary" class="p-button-outlined" />
                <Button label="Secondary" class="p-button-outlined p-button-secondary" />
                <Button label="Success" class="p-button-outlined p-button-success" />
                <Button label="Info" class="p-button-outlined p-button-info" />
                <Button label="Warning" class="p-button-outlined p-button-warning" />
                <Button label="Help" class="p-button-outlined p-button-help" />
                <Button label="Danger" class="p-button-outlined p-button-danger" />

                <h5>Rounded Icon Buttons</h5>
                <Button icon="pi pi-bookmark" class="p-button-rounded p-button-secondary" />
                <Button icon="pi pi-search" class="p-button-rounded p-button-success" />
                <Button icon="pi pi-user" class="p-button-rounded p-button-info" />
                <Button icon="pi pi-bell" class="p-button-rounded p-button-warning" />
                <Button icon="pi pi-heart" class="p-button-rounded p-button-help" />
                <Button icon="pi pi-times" class="p-button-rounded p-button-danger" />
                <Button icon="pi pi-check" class="p-button-rounded" />

                <h5>Rounded Text Icon Buttons</h5>
                <Button icon="pi pi-check" class="p-button-rounded p-button-text" />
                <Button icon="pi pi-bookmark" class="p-button-rounded p-button-secondary p-button-text" />
                <Button icon="pi pi-search" class="p-button-rounded p-button-success p-button-text" />
                <Button icon="pi pi-user" class="p-button-rounded p-button-info p-button-text" />
                <Button icon="pi pi-bell" class="p-button-rounded p-button-warning p-button-text" />
                <Button icon="pi pi-heart" class="p-button-rounded p-button-help p-button-text" />
                <Button icon="pi pi-times" class="p-button-rounded p-button-danger p-button-text" />
                <Button icon="pi pi-filter" class="p-button-rounded p-button-text p-button-plain" />

                <h5>Rounded and Outlined Icon Buttons</h5>
                <Button icon="pi pi-check" class="p-button-rounded p-button-outlined" />
                <Button icon="pi pi-bookmark" class="p-button-rounded p-button-secondary p-button-outlined" />
                <Button icon="pi pi-search" class="p-button-rounded p-button-success p-button-outlined" />
                <Button icon="pi pi-user" class="p-button-rounded p-button-info p-button-outlined" />
                <Button icon="pi pi-bell" class="p-button-rounded p-button-warning p-button-outlined" />
                <Button icon="pi pi-heart" class="p-button-rounded p-button-help p-button-outlined" />
                <Button icon="pi pi-times" class="p-button-rounded p-button-danger p-button-outlined" />

                <h5>Badges</h5>
                <Button type="button" label="Emails" badge="8" />
                <Button type="button" label="Messages" icon="pi pi-users" class="p-button-warning" badge="8" badgeClass="p-badge-danger" />

                <h5>Loading</h5>
                <Button type="button" label="Search" icon="pi pi-search" :loading="loading[0]" @click="load(0)" />
                <Button type="button" label="Search" icon="pi pi-search" iconPos="right" :loading="loading[1]" @click="load(1)"  />
                <Button type="button" icon="pi pi-search" :loading="loading[2]" @click="load(2)" />
                <Button type="button" label="Search" :loading="loading[3]" @click="load(3)" />

                <h5>Templating</h5>
                <Button type="button" class="p-px-3">
                    <img alt="logo" src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" style="width: 1.5rem"/>
                </Button>
                <Button type="button" class="p-button-outlined p-button-success">
                    <img alt="logo" src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" style="width: 1.5rem" />
                    <span class="p-ml-2 p-text-bold">PrimeVue</span>
                </Button>

                <h5>Button Set</h5>
                <span class="p-buttonset">
                    <Button label="Save" icon="pi pi-check" />
                    <Button label="Delete" icon="pi pi-trash" />
                    <Button label="Cancel" icon="pi pi-times" />
                </span>

                <h5>Sizes</h5>
                <div class="sizes">
                    <Button label="Small" icon="pi pi-check" class="p-button-sm"  />
                    <Button label="Normal" icon="pi pi-check" class="p-button"  />
                    <Button label="Large" icon="pi pi-check" class="p-button-lg" />
                </div>
            </div>
        </div>            
    </div>
</template>

<script>


import Layout from '@/Components/Layouts/Layout';
import NavSideBar from '@/Components/Layouts/NavSideBar';
import Tooltip from 'primevue/tooltip';
import Ripple from 'primevue/ripple';

import { ref } from 'vue';



import Button from 'primevue/button';

export default {
    components: {
        Layout, NavSideBar, Button,
    },
    directives: {
    'tooltip': Tooltip,
    'ripple': Ripple
    },
    setup() {
        const loading = ref([false, false, false]);
        const load = (index) => {
            loading.value[index] = true;
            setTimeout(() => loading.value[index] = false, 1000);
        }

        return {loading, load};
    },
    // props: {
    //   user: Object,
    // },
}
</script>
<style scroped>
.p-button {
    margin-right: .5rem;
}

/* .p-ripple.purple .p-ink {
    background: rgba(256,39,176,.3);
} */

</style>