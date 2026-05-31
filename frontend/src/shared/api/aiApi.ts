import axios from "axios";

export const generateSummary = async (text: string) => {
  try {
    const res = await axios.post("/api/ai-summary", { text });
    return res.data;
  } catch (error) {
    throw new Error("AI error");
  }
};