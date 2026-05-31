import axios from "axios";
import type {ContactSchemaType} from "@/entities";

export const sendContactForm = async (data: ContactSchemaType) => {
        return axios.post("/api/contact",data);
}
