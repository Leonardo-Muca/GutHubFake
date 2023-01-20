import { API_GITHUB, BASE_URL } from "../../API/Resources";

export const searchUser = async (userName: String) =>
    await BASE_URL.get(`${API_GITHUB.SEARCH_USER}/${userName}`).then((response) => {
        return response.data;
    }).catch((error) => {
        return error;
    });
