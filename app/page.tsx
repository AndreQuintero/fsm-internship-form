import { ApplicationForm } from "@/components/template/application/form";
import { Container } from "@/components/ui/container";



export default function Home() {
 
  return (
    <main>
      <Container>
        <section className="flex flex-col justify-center mt-10 lg:mt-30 p-2.5">
          <h1 className="font-bold text-4xl text-center lg:text-6xl">Application Form</h1>
          <ApplicationForm />          
        </section>
      </Container>
    </main>
  );
}