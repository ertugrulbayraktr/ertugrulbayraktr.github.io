import { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Ertuğrul Bayraktar",
  description: "Get in touch with Ertuğrul Bayraktar for collaborations, opportunities, or just to say hello."
};

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-6">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Get In Touch</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          I&apos;m always interested in new opportunities, collaborations, and interesting projects. 
          Feel free to reach out if you&apos;d like to discuss potential work or just say hello!
        </p>
      </div>
      <ContactForm />
    </div>
  );
}
