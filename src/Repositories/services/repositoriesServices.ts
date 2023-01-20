import { API_GITHUB, BASE_URL } from "../../API/Resources";

export const searchUserRepositorie = async (userName: String, repositorieName: String) =>
    await BASE_URL.get(`${API_GITHUB.SEARCH_REPOSITORIE}/${userName}/${repositorieName}`).then((response) => {
        return response.data;
    }).catch((error) => {
        return error;
    });
