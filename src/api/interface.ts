import request from "./index";
import { IGPTResponseData, IGPTRequest } from "../types";

/**
 * 与AI沟通聊天
 * @param prompt 
 * @returns 
 */
export async function chat(data: IGPTRequest) {
    return await request<IGPTResponseData>({
        url: "/gpt",
        method: "post",
        data
    });
};