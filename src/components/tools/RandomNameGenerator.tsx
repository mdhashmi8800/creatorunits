"use client";

import React, { useState } from "react";
import { useToast } from "@/context/ToastContext";

export default function RandomNameGenerator() {
  const { showToast } = useToast();
  const [gender, setGender] = useState<"male" | "female" | "unisex">("unisex");
  const [culture, setCulture] = useState<string>("english");
  const [quantity, setQuantity] = useState<number>(10);
  const [names, setNames] = useState<string[]>([]);

  // Local static databases
  const nameDatabase: Record<string, Record<string, string[]>> = {
    english: {
      male: ["Oliver", "George", "Arthur", "Leo", "Oscar", "Harry", "Jack", "Teddy", "Henry", "Theo", "Thomas", "William", "Charles", "Edward"],
      female: ["Olivia", "Amelia", "Isla", "Ava", "Ivy", "Freya", "Lily", "Florence", "Mia", "Alice", "Charlotte", "Sophie", "Emily", "Grace"],
      unisex: ["Alex", "Jordan", "Taylor", "Morgan", "Robin", "Charlie", "Sam", "Skyler", "Casey", "Jessie", "Jamie", "Riley", "Cameron", "Finley"]
    },
    spanish: {
      male: ["Mateo", "Santiago", "Matias", "Lucas", "Sebastian", "Alejandro", "Leonardo", "Diego", "Daniel", "Hugo", "Alvaro", "Manuel"],
      female: ["Sofia", "Valentina", "Isabella", "Camila", "Lucia", "Martina", "Maria", "Elena", "Paula", "Sara", "Carmen", "Julia"],
      unisex: ["Reyes", "Cruz", "Paz", "Sole", "Guadalupe", "Angel", "Santana", "Azul", "Mar", "Sol"]
    },
    french: {
      male: ["Gabriel", "Léo", "Raphaël", "Louis", "Arthur", "Jules", "Lucas", "Hugo", "Pierre", "Paul", "Jean", "Nicolas"],
      female: ["Emma", "Jade", "Louise", "Alice", "Chloé", "Lina", "Léa", "Mila", "Manon", "Camille", "Clara", "Sarah"],
      unisex: ["Alix", "Camille", "Sacha", "Maxime", "Loris", "Claude", "Noa", "Valéry", "Dominique"]
    },
    japanese: {
      male: ["Haruto", "Yuto", "Sota", "Yuki", "Riku", "Ren", "Hiroto", "Takuya", "Kenji", "Daiki", "Kazuki", "Kaito"],
      female: ["Himari", "Hina", "Yua", "Sakura", "Ichika", "Akari", "Sara", "Yui", "Aoi", "Mei", "Mio", "Rin"],
      unisex: ["Aoi", "Hinata", "Ren", "Kaoru", "Akira", "Yuki", "Sora", "Shion", "Hikaru", "Asuka"]
    }
  };

  const handleGenerate = () => {
    const list = nameDatabase[culture]?.[gender] || [];
    if (list.length === 0) return;

    const generated: string[] = [];
    for (let i = 0; i < quantity; i++) {
      const idx = Math.floor(Math.random() * list.length);
      // Let's add variations or just compile list with no duplicate if list is large enough
      const name = list[idx];
      generated.push(name);
    }

    setNames(generated);
    showToast(`Generated ${quantity} names!`, "success");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(names.join(", "));
    showToast("Names copied to clipboard!", "success");
  };

  return (
    <div className="card">
      <div className="flex flex-col gap-6">

        {/* Generator Controls */}
        <div className="card" style={{ backgroundColor: "var(--bg-secondary)", borderStyle: "solid" }}>
          <div className="grid-cols-3" style={{ gap: "1rem" }}>
            <div className="form-group">
              <label className="form-label" htmlFor="name-g">Gender</label>
              <select
                id="name-g"
                value={gender}
                onChange={(e) => setGender(e.target.value as any)}
                className="form-control form-select"
              >
                <option value="unisex">Unisex / Neutral</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="name-c">Origin / Culture</label>
              <select
                id="name-c"
                value={culture}
                onChange={(e) => setCulture(e.target.value)}
                className="form-control form-select"
              >
                <option value="english">English / Anglo</option>
                <option value="spanish">Spanish / Hispanic</option>
                <option value="french">French</option>
                <option value="japanese">Japanese</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="name-qty">Quantity</label>
              <select
                id="name-qty"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="form-control form-select"
              >
                <option value="5">5 Names</option>
                <option value="10">10 Names</option>
                <option value="20">20 Names</option>
                <option value="30">30 Names</option>
              </select>
            </div>
          </div>

          <button className="btn btn-primary w-full" style={{ marginTop: "1rem" }} onClick={handleGenerate}>
            🎲 Generate Names
          </button>
        </div>

        {/* Results Workspace */}
        {names.length > 0 && (
          <div className="card flex flex-col gap-4" style={{ borderStyle: "solid" }}>
            <h4 style={{ fontSize: "1rem", margin: 0 }}>Generated Name Suggestions:</h4>
            
            <div className="flex" style={{ gap: "0.5rem", flexWrap: "wrap", margin: "0.5rem 0" }}>
              {names.map((name, idx) => (
                <span
                  key={idx}
                  className="badge badge-accent"
                  style={{ fontSize: "0.9rem", padding: "0.4rem 0.8rem", borderRadius: "100px" }}
                >
                  {name}
                </span>
              ))}
            </div>

            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <button className="btn btn-secondary btn-sm" onClick={handleCopy}>
                📋 Copy Names List
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
