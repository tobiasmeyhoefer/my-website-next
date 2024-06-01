import ContactForm from "@/components/ui/contact-form";

const Contact = () => {
  return (
    <div className="flex h-[calc(100vh-160px)] flex-col justify-center">
      <div className="-translate-y-[140px]">
        <h1 className="mb-12 text-center text-5xl font-bold">Contact</h1>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
