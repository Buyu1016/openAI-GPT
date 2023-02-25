/**
 * 处理文本
 * @param text 
 * @returns 
 */
export function replaceTextStart(text: string) {
    const reg = new RegExp(/\n\n/);
    let _text = text.replace(reg, "");
    if (_text.startsWith("？")) {
        _text = _text.slice(1);
    }
    return _text;
};

const modelMap = new Map<string, string>([]);
export function getModelName(model: string) {
    const _modelName = modelMap.get(model);
    return _modelName || "未知模型";
}

/**
 * 格式化时间
 * @param date 
 */
export function formatDate(date: string) {
    const _currentDate = new Date(date);
    return `${_currentDate.toLocaleDateString()} ${_currentDate.toLocaleTimeString()}`;
}