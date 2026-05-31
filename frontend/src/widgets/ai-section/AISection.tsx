import { useState } from "react";
import { useAiSummary } from "@/features";

export const AiSection = () => {
  const [text, setText] = useState("");

  const { run, result, loading, error } = useAiSummary();

  return (
    <section>
      <h2>AI Summary</h2>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Введите текст"
      />

      <button onClick={() => run(text)} disabled={loading}>
        {loading ? "Генерация..." : "Сгенерировать"}
      </button>

      {error && <p>{error}</p>}

      {result && <p>{result}</p>}
    </section>
  );
};