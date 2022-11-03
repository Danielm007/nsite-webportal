import axios from "axios";

export const apiEndpoint = axios.create({
  baseURL: "https://api-dev.nsite.genesisplanningsoftware.com/v1",
});
