<template>
    <div
        :class="{
            'message-item-container': true,
            [`message-item-${identityMessagePosition}-container`]: true
        }"
    >
        <el-avatar class="message-item-avatar">{{ identityAvatar }}</el-avatar>
        <pre class="message-item-text">{{ replaceTextStart(data.text) }}</pre>
        <div class="message-item-date">{{ formatDate(data.createAt) }}</div>
    </div>
</template>

<script lang='ts' setup>
    import { PropType, computed } from "vue";
    import { IMessageStorageItem } from "../../../types";
    import { replaceTextStart, formatDate } from "../../../utils";

    // **************props***************
    const props = defineProps({
        data: {
            type: <PropType<IMessageStorageItem>>Object,
            required: true,
        }
    });

    const identityAvatar = computed(() => {
        return props.data.identity === "user" ? "User" : "GPT"
    });
    const identityMessagePosition = computed(() => {
        return props.data.identity === "user" ? "right" : "left";
    });
</script>

<style scoped>
    .message-item-container {
        display: flex;
        margin-bottom: .5rem;
        position: relative;
    }

    .message-item-right-container {
        flex-direction: row-reverse;
    }

    .message-item-avatar {
        flex-shrink: 0;
        margin: 0 .5rem;
    }

    .message-item-text {
        max-width: 70%;
        white-space: pre-wrap;
        word-break: break-all;
        box-shadow: 0 0 5px 0 #aaa;
        border-radius: .5rem;
        font-size: 14px;
        padding: .5rem;
        margin-top: .75rem;
    }

    .message-item-date {
        position: absolute;
        top: -.3rem;
        right: 3.75rem;
        font-size: 12px;
        color: #aaa;
        transform: scale(.8);
        transform-origin: bottom right;
    }

    .message-item-left-container .message-item-date {
        left: 0;
    }
</style>