import { BaseTemplate } from "@/components/template/base";
import { EvaluationForm } from "@/components/template/evaluation/form";

export default function Evaluation() {
    return (
        <main>
          <BaseTemplate title="Student Evaluation Form">
            <EvaluationForm />
          </BaseTemplate>
        </main>
    )
}