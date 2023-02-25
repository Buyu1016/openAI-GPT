<template>
    <div class='dialog-header-container'>
        GPT<span class="dialog-header-hint">{{ loading ? "(正在思考中)" : "" }}</span>
        <div class="dialog-header-icons">
            <el-icon @click="handleClick"><Setting /></el-icon>
        </div>
    </div>
    <el-dialog v-model="dialogShow" title="配置项" width="70%">
        <el-form :model="form">
            <el-form-item label="模型">
                <el-select v-model="form.model.active" placeholder="请选择模型">
                    <el-option
                        v-for="item in form.model.list"
                        :label="item"
                        :value="item"
                    />
                </el-select>
            </el-form-item>
        </el-form>
        <template #footer>
        <span class="dialog-footer">
            <el-button @click="dialogShow = false">关闭</el-button>
            <el-button type="primary" @click="dialogShow = false">
                确认
            </el-button>
        </span>
        </template>
    </el-dialog>
</template>

<script lang='ts' setup>
    import { Setting } from "@element-plus/icons-vue";
    import { ref, PropType } from "vue";

    // **************props***************
    defineProps({
        form: {
            type: <PropType<{
                model: {
                    active: string
                    list: string[]
                }
            }>>Object,
            required: true
        },
        loading: {
            type: <PropType<boolean>>Boolean,
            required: true
        }
    });

    // **************data***************
    const dialogShow = ref(false);

    // **************methods***************
    const handleClick = () => {
        dialogShow.value = true;
    };
</script>

<style scoped>
    .dialog-header-container {
        height: 2.5rem;
        background: #fff;
        box-shadow: 0 0 15px 0 #ddd;
        font-size: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
    }

    .dialog-header-hint {
        font-size: 12px;
    }

    .dialog-header-icons {
        position: absolute;
        right: .5rem;
        top: 50%;
        transform: translateY(-50%);
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: .5rem;
    }
</style>