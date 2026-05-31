import { useState } from "react";
import { generateSummary } from "@/shared";

export const useAiSummary = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const run = async (text: string) => {
    setLoading(true);
    setError(null);

    try {
      const data = await generateSummary(text);
      setResult(data.result);
    } catch (e) {
      setError("AI error");
    } finally {
      setLoading(false);
    }
  };

  return {
    run,
    result,
    loading,
    error,
  };
};