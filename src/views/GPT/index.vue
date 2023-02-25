<template>
    <div class='gpt-model-container'>
        <DialogHeaderVue
            :form="modelOptions"
            :loading="loading"
        ></DialogHeaderVue>
        <DialogMessageDisplayVue
            :list="list"
        ></DialogMessageDisplayVue>
        <SendInputVue v-model="sendInputValue" :loading="loading" @communicate="addMessage"></SendInputVue>
    </div>
</template>

<script lang='ts' setup>
    import { ref } from "vue";
    import SendInputVue from "./components/SendInput.vue";
    import DialogMessageDisplayVue from "./components/DialogMessageDisplay.vue";
    import useDialogMessages from "../../hooks/useDialogMessages";
    import DialogHeaderVue from "./components/DialogHeader.vue";
    import { pageView } from "@codegorgeous/sdk";

    // **************data***************
    const sendInputValue = ref("");
    const { loading, list, modelOptions, initMessage, addMessage } = useDialogMessages();

    // **************init***************
    (() => {
        initMessage();
        pageView({
            title: "聊天界面"
        });
    })();
</script>

<style scoped>
    .gpt-model-container {
        width: 100%;
        max-width: 800px;
        height: 100%;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
    }
</style>