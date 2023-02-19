import axios from "axios";

const getAllData = async (context) => {
    let response = await axios.get("api/getAllData");

    context.commit("UPDATE_DATA", response.data);
}

const postData = async (context, payload) => {
    let response = await axios.post("api/postData", payload);

    return response
}

const putData = async (context, payload) => {
    let response = await axios.put("api/putData", payload);

    return response
}

const patchData = async (context, payload) => {
    let response = await axios.patch("api/patchData", payload);

    return response
}

const deleteData = async (context, payload) => {
    let response = await axios.delete("api/deleteData/" + payload.id);

    return response
}

export default {
    getAllData,
    postData,
    putData,
    patchData,
    deleteData
}