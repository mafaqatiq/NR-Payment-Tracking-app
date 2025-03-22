
import { useState } from 'react';
import { MainLayout } from '@/components/layout/MainLayout';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const faqs = [
  {
    id: 1,
    category: 'General Information',
    question: "Why can't I register with my mobile number?",
    answer: "Your mobile number may already be linked to an existing NR account. Mobile numbers can only be registered in 1(one) Shopline account (same for email addresses)."
  },
  {
    id: 2,
    question: "How do I make a credit card bill payment?",
    answer: "Quis placerat felis tincidunt dolor eget eleifene euismod, risique in cursus nisi est ut. At vel in pretium sect tincidunt integer. Vusputate vestibulum donec at nullam non. Mauris et morbi volutpat sed vestibulum orci. Scelerisque arcu ipsum volutpat massa sagittis pharetra eget lacus. A velit fermentum mattis ac ultricies est, tellus turpis. Duis enim"
  },
  {
    id: 3,
    question: "How do I make a credit card bill payment?",
    answer: "Quis placerat felis tincidunt dolor eget eleifene euismod, risique in cursus nisi est ut. At vel in pretium sect tincidunt integer. Vusputate vestibulum donec at nullam non. Mauris et morbi volutpat sed vestibulum orci. Scelerisque arcu ipsum volutpat massa sagittis pharetra eget lacus. A velit fermentum mattis ac ultricies est, tellus turpis. Duis enim"
  },
  {
    id: 4,
    question: "How do I make a credit card bill payment?",
    answer: "Quis placerat felis tincidunt dolor eget eleifene euismod, risique in cursus nisi est ut. At vel in pretium sect tincidunt integer. Vusputate vestibulum donec at nullam non. Mauris et morbi volutpat sed vestibulum orci. Scelerisque arcu ipsum volutpat massa sagittis pharetra eget lacus. A velit fermentum mattis ac ultricies est, tellus turpis. Duis enim"
  },
  {
    id: 5,
    question: "How do I make a credit card bill payment?",
    answer: "Quis placerat felis tincidunt dolor eget eleifene euismod, risique in cursus nisi est ut. At vel in pretium sect tincidunt integer. Vusputate vestibulum donec at nullam non. Mauris et morbi volutpat sed vestibulum orci. Scelerisque arcu ipsum volutpat massa sagittis pharetra eget lacus. A velit fermentum mattis ac ultricies est, tellus turpis. Duis enim"
  }
];

const FAQs = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(1);

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <MainLayout title="Frequently Asked Questions" subtitle="Here are the Account details of the payments here">
      <div className="max-w-4xl mx-auto px-8 py-6">
        <div className="bg-white rounded-xl shadow-subtle animate-fade-in">
          <div className="p-6 border-b">
            <div className="flex items-center gap-3">
              <HelpCircle className="h-5 w-5 text-brand-blue" />
              <h2 className="text-lg font-medium">General Information</h2>
            </div>
          </div>
          
          <div className="divide-y">
            {faqs.map((faq) => (
              <div key={faq.id} className="py-4 px-6">
                <button
                  className="w-full flex items-center justify-between text-left focus:outline-none"
                  onClick={() => toggleFAQ(faq.id)}
                >
                  <h3 className="text-base font-medium">{faq.question}</h3>
                  {openFAQ === faq.id ? (
                    <ChevronUp className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                  )}
                </button>
                
                {openFAQ === faq.id && (
                  <div className="mt-2 text-muted-foreground text-sm animate-fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default FAQs;
