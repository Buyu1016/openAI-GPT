<template>
    <div class='send-input-container'>
        <el-input
            v-model="_value"
            type="search"
            placeholder="请输入聊天词"
        >
            <template #append>
                <el-button type="primary" :disabled="loading" @click="handleCommunicate">
                    {{ loading ? "获取中" : "发送" }}
                </el-button>
            </template>
        </el-input>
    </div>
</template>

<script lang='ts' setup>
    import { ref, PropType, watch } from "vue";
    import { searchView } from "@codegorgeous/sdk";

    // **************props***************
    defineProps({
        modelValue: {
            type: <PropType<string>>String,
            required: true
        },
        loading: {
            type: <PropType<boolean>>Boolean,
            required: true
        }
    });

    // **************data***************
    const _value = ref("");
    const emits = defineEmits(["update:modelValue", "communicate"]);
    
    // **************watch***************
    watch(_value, val => {
        emits("update:modelValue", val);
    });

    // **************methods***************
    function handleCommunicate() {
        emits("communicate", _value.value);
        searchView({
            searchKey: _value.value,
            searchScope: "",
            remark: "GPT-聊天"
        });
        _value.value = "";
    };
</script>

<style scoped>
    .send-input-container {
        padding: .5rem .5rem 1rem .5rem;
        background: #fff;
        box-shadow: 0 0 15px 0 #ddd;
    }
</style>