import axios from "axios";

axios.defaults.baseURL =
  "https://api.unsplash.com";


export const fetchImagesWithTopic = async (topic, page = 1) => {
  try {
    const response = await axios.get(`/search/photos`, {
      params: {
        query: topic,
        page: page,
        client_id: "CdnrM9OyHJSwmywp16PBRnhlau-1vTdu57G8Kc2vvRA",
      },
    });
    return response.data.results;
  } catch (error) {
    console.error("Error fetching images:", error);
    throw error;
  }
};
