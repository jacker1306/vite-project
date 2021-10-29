<template>
    <div v-if="modalStatus" class="wrap h-full w-full fixed top-0 right-0 bg-black bg-opacity-70">
        <div class="modal w-2/5 h-300px mt-60 mx-auto border border-gray-300 rounded-md min-h-1/2 text-black bg-white">
            <h2 class="text-xl my-5">SIGN IN</h2>

        </div>
    </div>
</template>

<script>
export default {
    // name: 'Modal',
    // setup() {
    //     let modalStatus = false;

    //     function displayModal() {
    //         modalStatus = true;
    //     }
    //     return {
    //         modalStatus,
    //         displayModal,
    //     }
    // }
}
</script>

<style scoped>

</style>