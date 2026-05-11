"use client";
import { useState } from "react";
import { auditEngine } from "@/logic/auditEngine";
import ResultsCard from "@/components/ResultsCard";
import { AuditResult } from "@/types/audit";
import "@/app/globals.css"

export default function AuditForm() {

  const [tool, setTool] = useState("");
  const[subscriptionplans,setsubscriptionplans]=useState("");
  const [spend, setSpend] = useState(0);
  const [users, setUsers] = useState(1);

  const [result, setResult] = useState<AuditResult | null>(null);

  function handleAudit() {

    const auditResult = auditEngine(
      tool,
      subscriptionplans,
      spend,
      users
    );

    console.log(auditResult);

    setResult(auditResult);
  }

  return (
    <div className="inputcard">

      <h1>AI Spend Audit</h1>
      <label htmlFor="ai_tool">AI Tool: </label>
      <input
        className="input"
        type="text"
        id="ai_tool"
        placeholder="AI Tool"
        value={tool}
        onChange={(e) => setTool(e.target.value)}
      />

      <br />
      <br />
      <label htmlFor="plan">Plan: </label>
      <input
        className="input" 
          type="text"
          id="plan"
          placeholder="subscription plans"
          value={subscriptionplans}
          onChange={(e)=>setsubscriptionplans(e.target.value)} />
      <br />
      <br />
      <label htmlFor="spend">Total Spending: </label>
      <input
        className="input"
        id="spend"
        type="number"
        placeholder="Monthly Spend"
        value={spend}
        onChange={(e) => setSpend(Number(e.target.value))}
      />

      <br />
      <br />
      <label htmlFor="users">Enter Total Users: </label>
      <input
        className="input"
        id="users"
        type="number"
        placeholder="Total Users"
        value={users}
        onChange={(e) => setUsers(Number(e.target.value))}
      />

      <br />
      <br />

      <button className="btn" onClick={handleAudit}>
        Run Audit
      </button>

      <br />
      <br />

      {result && <ResultsCard result={result} />}

    </div>
  );
}