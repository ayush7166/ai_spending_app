// components/ResultsCard.tsx

import { AuditResult } from "@/types/audit";

type Props = {
  result: AuditResult;
};

export default function ResultsCard({
  result,
}: Props) {

  return (
    <div 
      className="resultcard"
      style={{
        border: "1px solid gray",
        padding: "20px",
        marginTop: "20px",
      }}
    >

      <h2>Audit Result</h2>

      <p>
        Recommendation:
        {" "}
        {result.recommendation}
      </p>

      <p>
        Savings:
        {" "}
        ${result.savings}/month
      </p>

      <p>
        Reason:
        {" "}
        {result.reason}
      </p>

      <p>
        Optimization Score:
        {" "}
        {result.optimizationScore}/100
      </p>

      <p>
        Suggested Alternative:
        {" "}
        {result.suggestedAlternative}
      </p>

    </div>
  );
}