import { useState } from "react";
import api from "./lib/api";

function App() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handlePing = async () => {
    try {
      setLoading(true);

      const res = await api.post('/ping');
      setResult(res);
    } catch (err) {
      setResult(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-md w-[300px] text-center">
        <h1 className="text-xl font-bold mb-4">Ping Test</h1>

        <button
          onClick={handlePing}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer"
        >
          {loading ? "Đang ping..." : "Ping"}
        </button>

        {result && (
          <div className="mt-4 text-left">
            <p><b>message:</b> {result.message}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;