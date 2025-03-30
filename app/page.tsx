import { ApplicationForm } from "@/components/template/application/form";
import { BaseTemplate } from "@/components/template/base";




export default function Home() {
 
  return (
    <main>
      <BaseTemplate title="Internship Application" 
        description="Students should use this form to apply for an internship after successfully identifying an internship opportunity.">
        <ApplicationForm />
      </BaseTemplate>
    </main>
  );
}