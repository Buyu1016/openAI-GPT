<template>
    <div class='dialog-message-display-container'>
        <MessageItemVue
            v-for="(item, index) in list"
            :key="index"
            :data="item"
        >
        </MessageItemVue>
    </div>
</template>

<script lang='ts' setup>
    import { PropType } from "vue";
    import { IMessageStorageItem } from "../../../types";
    import MessageItemVue from "./MessageItem.vue";
    
    // **************props***************
    defineProps({
        list: {
            type: <PropType<IMessageStorageItem[]>>Array,
            required: true,
        }
    });
</script>

<style scoped>
    .dialog-message-display-container {
        flex: 1;
        overflow: hidden auto;
        padding: .5rem;
        scroll-behavior: smooth;
    }

    .dialog-message-display-my,
    .dialog-message-display-gpt {
        display: flex;
        font-size: 1.2rem;
        margin-bottom: .5rem;
    }

    .dialog-message-display-my-avatar,
    .dialog-message-display-gpt-avatar {
        margin: 0 .5rem;
        flex-shrink: 0;
    }

    .dialog-message-display-gpt pre {
        white-space: pre-wrap;
    }

    .dialog-message-display-my {
        flex-direction: row-reverse;
    }

    .dialog-bubble {
        display: flex;
        line-height: 1.25rem;
        margin-top: .5rem;
        border: 1px solid red;
        padding: .5rem;
        border-radius: .5rem;
        max-width: 70%;
    }
</style>