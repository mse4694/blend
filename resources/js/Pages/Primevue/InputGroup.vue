<template>
    <Layout />
    <div class="container flex flex-row">
        <div> 
            <NavSideBar /> 
            <Head title="Primevue Input Group" />
        </div>

        <div class="w-full flex items-start justify-left bg-green-200 px-1 py-1">
            <div class="w-full h-full px-2 bg-white">
                <div>
                    <h5>Addons</h5>
                    <div class="grid grid-col-1 md:grid-cols-3 gap-4 fluid">
                        <div>
                            <div class="p-inputgroup">
                                <span class="p-inputgroup-addon">
                                    <i class="pi pi-user"></i>
                                </span>
                                <InputText placeholder="Username" />
                            </div>
                        </div>

                        <div>
                            <div class="p-inputgroup">
                                <span class="p-inputgroup-addon">$</span>
                                <InputText placeholder="Price" />
                                <span class="p-inputgroup-addon">.00</span>
                            </div>
                        </div>

                        <div>
                            <div class="p-inputgroup">
                                <span class="p-inputgroup-addon">W</span>
                                <InputText placeholder="Website" />
                            </div>
                        </div>
                    </div>

                    <h5 class="pt-4">Multiple Addons</h5>
                    <div class="grid grid-col-1 md:grid-cols-1 gap-4 fluid">
                        <div>
                            <div class="p-inputgroup">
                                <span class="p-inputgroup-addon">
                                    <i class="pi pi-clock"></i>
                                </span>
                                <span class="p-inputgroup-addon">
                                    <i class="pi pi-star"></i>
                                </span>
                                <InputText placeholder="Price" />
                                <span class="p-inputgroup-addon">$</span>
                                <span class="p-inputgroup-addon">.00</span>
                            </div>
                        </div>
                    </div>

                    <h5 class="pt-4">Button Addons</h5>
                    <div class="grid grid-col-1 md:grid-cols-3 gap-4 fluid">
                        <div>
                            <div class="p-inputgroup">
                                <Button label="Search"/>
                                <InputText placeholder="Keyword"/>
                            </div>
                        </div>

                        <div>
                            <div class="p-inputgroup">
                                <InputText placeholder="Keyword"/>
                                <Button icon="pi pi-search" class="p-button-warning"/>
                            </div>
                        </div>

                        <div>
                            <div class="p-inputgroup">
                                <Button icon="pi pi-check" class="p-button-success"/>
                                <InputText placeholder="Vote"/>
                                <Button icon="pi pi-times" class="p-button-danger"/>
                            </div>
                        </div>
                    </div>

                    <h5 class="pt-4">Checkbox and RadioButton</h5>
                    <div class="grid grid-col-1 md:grid-cols-1 gap-4 fluid">
                        <div>
                            <div class="p-inputgroup">
                                <span class="p-inputgroup-addon">
                                    <Checkbox v-model="checked1" :binary="true" />
                                </span>
                                <InputText placeholder="Username"/>
                            </div>
                        </div>

                        <div>
                            <div class="p-inputgroup">
                                <InputText placeholder="Price"/>
                                <span class="p-inputgroup-addon">
                                    <RadioButton name="rb1" value="rb1" v-model="radioValue1" />
                                </span>
                            </div>
                        </div>

                        <div>
                            <div class="p-inputgroup">
                                <span class="p-inputgroup-addon">
                                    <Checkbox v-model="checked2" :binary="true" />
                                </span>
                                <InputText placeholder="Website"/>
                                <span class="p-inputgroup-addon">
                                    <RadioButton name="rb2" value="rb2" v-model="radioValue2" />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import Layout from '@/Components/Layouts/Layout';
import {Head} from '@inertiajs/inertia-vue3';
import NavSideBar from '@/Components/Layouts/NavSideBar';
import { ref } from 'vue';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Checkbox from 'primevue/checkbox';
import RadioButton from 'primevue/radiobutton';

export default {
    components: {
        Head, Layout, NavSideBar, InputText, Button, Checkbox, RadioButton,
    },
    setup() {
        const checked1 = ref(false);
        const checked2 = ref(false);
        const radioValue1 = ref('');
        const radioValue2 = ref('');

        return { checked1, checked2, radioValue1, radioValue2 }
    }
}
</script>