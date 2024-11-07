import React, { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Faz uma chamada para o backend em /api/test
    fetch("/api/test")
      .then(response => response.text())
      .then(data => setMessage(data))
      .catch(error => console.error("Erro:", error));
  }, []);

  return (
    <div>
      <h1>Resposta do Backend:</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
