import { AgreementForm } from "@/components/template/agreement/form";
import { BaseTemplate } from "@/components/template/base";

export default function Agreement() {
     return (
        <main>
          <BaseTemplate title="Internship Agreement Form">
            <AgreementForm />
          </BaseTemplate>
        </main>
      );
}