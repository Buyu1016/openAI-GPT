import { ref, nextTick } from "vue";
import { chat } from "../api";
import { ElMessage } from "element-plus";
import { IMessageStorageItem } from "../types";

export default function useDialogMessages() {
    const _messageList = ref<IMessageStorageItem[]>([]);
    const _loading = ref(false);
    const _localStorageKey = "__openAI_message_list__";
    const _modelList: string[] = ["text-davinci-003", "code-davinci-002"];
    const _modelOptions = ref({
        model: {
            active: _modelList[0],
            list: _modelList
        },
    });

    /**
     * 初始化存储
     */
    function initMessage() {
        const _localStorageResult = localStorage.getItem(_localStorageKey);
        if (!_localStorageResult) localStorage.setItem(_localStorageKey, JSON.stringify([]));
        _messageList.value = _localStorageResult ? JSON.parse(_localStorageResult) : [];
        scrollToBottom();
    }

    /**
     * 开始与GPT沟通
     * @param key 
     * @returns 
     */
    async function addMessage(key: string) {
        /**
         * 1. 调用接口
         * 2. 拿取数据并增加数据
         * 3. localStorage同步存储聊天数据
         */
        const _word = key.trim();
        if (!_word) {
            ElMessage({
                type: "warning",
                message: "请输入聊天词"
            });
            return;
        };
        _loading.value = true;
        synchronousData("user", key);
        const chatResult = await chat({
            prompt: _word,
            model: _modelOptions.value.model.active
        });
        const _message = chatResult.data.choices.map(t => t.text).join("\n");
        synchronousData("gpt", _message);
        _loading.value = false;
    }

    /**
     * 同步存储数据
     * @param identity 
     * @param text 
     */
    function synchronousData(identity: IMessageStorageItem["identity"], text: IMessageStorageItem["text"]) {
        _messageList.value.push({
            createAt: new Date().toString(),
            identity,
            text
        });
        localStorage.setItem(_localStorageKey, JSON.stringify(_messageList.value));
        scrollToBottom();
    };

    /**
     * 滚动条置底部
     */
    function scrollToBottom() {
        nextTick(() => {
            const oScrollContainer = document.querySelector(".dialog-message-display-container");
            if (oScrollContainer) {
                oScrollContainer.scrollTop = oScrollContainer.scrollHeight;
            };
        });
    }

    return {
        list: _messageList,
        loading: _loading,
        modelOptions: _modelOptions,
        initMessage,
        addMessage
    }
}