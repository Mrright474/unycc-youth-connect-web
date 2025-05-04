
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "How is my donation used?",
    answer: "Your donation directly supports UNYCC's programs and initiatives around the world. We allocate funds to youth leadership training, community development projects, educational resources, and organizational operations to ensure sustainable impact."
  },
  {
    question: "Is my donation tax-deductible?",
    answer: "UNYCC is a registered non-profit organization, and donations may be tax-deductible in many countries. We provide donation receipts for all contributions. Please consult with your tax advisor regarding the tax deductibility in your specific country or region."
  },
  {
    question: "Can I donate to a specific project or region?",
    answer: "Yes! You can designate your donation to support a specific project, program, or geographic region. When making your donation, simply indicate your preference, or select one of our featured projects."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept major credit cards, bank transfers, and PayPal. For larger donations or other payment methods, please contact our donations team directly."
  },
  {
    question: "Do you accept non-monetary donations?",
    answer: "Yes, we accept in-kind donations such as equipment, services, and volunteer time. Please contact us to discuss how your non-monetary contribution can support our mission."
  },
  {
    question: "How can organizations partner with UNYCC?",
    answer: "We welcome partnerships with organizations that share our vision. Partners can support our work through financial contributions, joint programs, in-kind support, or by hosting UNYCC clubs. Please contact us to explore partnership opportunities."
  },
  {
    question: "How transparent is UNYCC with its finances?",
    answer: "We are committed to full transparency in our operations. We publish annual reports detailing our financial activities, program outcomes, and organizational performance, which are available upon request."
  },
];

const DonationFAQ = () => {
  return (
    <section className="py-16 bg-ungray-light">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about donating to UNYCC.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b">
                <AccordionTrigger className="text-lg font-medium py-4 hover:text-unblue">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-2 pb-4">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="mt-8 text-center">
            <p className="mb-4">
              Have more questions about donating to UNYCC?
            </p>
            <a 
              href="/contact" 
              className="text-unblue hover:underline font-medium"
            >
              Contact our donations team
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationFAQ;
