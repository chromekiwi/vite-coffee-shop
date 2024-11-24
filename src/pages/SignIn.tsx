import Header from "@/components/Header";
import Form from "@/components/forms/SignInForm";

export default function SignIn() {
  return (
    <>
      <Header />
      <main className="flex justify-center w-screen mt-16 px-5">
        <Form />
      </main>
    </>
  );
}
