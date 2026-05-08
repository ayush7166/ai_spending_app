import { AuditResult } from "@/types/audit";

export default function ResultsCard({
  result,
}: {
  result: AuditResult;
}) {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "20px",
        marginTop: "20px",
      }}
    >
      <h2>{result.recommendation}</h2>

      <p>Monthly Savings: ${result.savings}</p>

      <p>{result.reason}</p>
    </div>
  );
}