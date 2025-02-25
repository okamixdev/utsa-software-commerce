"use client"
import Image from "next/image";
import { useEffect, useState } from "react";



export default function Home() {
  const [data, setData] = useState<{ message?: string } | null>(null);

  const getData = async () => {
    try {
      const response = await fetch("http://localhost:8080/");
      if (!response.ok) {
        throw new Error("Failed to fetch data from /");
      }

      const json = await response.json();
      console.log("Fetched data:", json);
      setData(json);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  useEffect(() => { getData(), console.log(data, "THIS IS DATA") }, [])

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 style={{
        color: "black",
        fontSize: 30,
        fontWeight: 'bold',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10
      }}>
        {data?.message}
      </h1>
    </div>
  );
}
