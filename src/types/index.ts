export interface IResponse <T> {
    state: any
    msg: string
    data: T
}

export interface IGPTRequest {
    prompt: string
    model?: string
}

export interface IGPTResponseData {
    created: number
    id: string
    model: string
    object: string
    choices: {
        finish_reason: string
        index: number
        logprobs: null
        text: string
    }[]
    usage: {
        completion_tokens: number
        prompt_tokens: number
        total_tokens: number
    }
}

export interface IMessageStorageItem {
    createAt: string
    identity: "user" | "gpt",
    text: string
}