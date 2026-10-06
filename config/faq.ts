/**
 * FAQ Configuration — Prabhunath Electricals & Contractor
 * Realistic, helpful electrical questions without unsupported claims.
 */
export interface FAQItem {
  id: string;
  question: string;
  questionHi: string;
  answer: string;
  answerHi: string;
}

export const faqs: FAQItem[] = [
  {
    id: "faq-1",
    question: "Where are you located and which areas do you cover in Gurugram?",
    questionHi: "आपका कार्यालय कहाँ है और गुरुग्राम में आप किन क्षेत्रों में सेवा प्रदान करते हैं?",
    answer:
      "Our office is situated at 512/20, Om Nagar Gali No. 3, Om Nagar, Sector 11, Gurugram, Haryana 122001. We provide residential and commercial electrical solutions across Sector 11, Old Gurugram, and adjoining Gurugram neighborhoods.",
    answerHi:
      "हमारा कार्यालय 512/20, ओम नगर गली नं. 3, ओम नगर, सेक्टर 11, गुरुग्राम, हरियाणा 122001 में स्थित है। हम सेक्टर 11, पुराना गुरुग्राम एवं आसपास के क्षेत्रों में सेवा प्रदान करते हैं।",
  },
  {
    id: "faq-2",
    question: "What are your standard business operating hours?",
    questionHi: "आपके कार्य करने का समय क्या है?",
    answer:
      "We operate Monday through Sunday from 8:00 AM to 9:00 PM. You can contact us via phone at +91 9811068312 or WhatsApp to schedule a site visit.",
    answerHi:
      "हम सोमवार से रविवार सुबह 8:00 बजे से रात 9:00 बजे तक उपलब्ध हैं। आप हमें +91 9811068312 पर कॉल या व्हाट्सएप द्वारा संपर्क कर सकते हैं।",
  },
  {
    id: "faq-3",
    question: "Do you take up full home or shop electrical contracting projects?",
    questionHi: "क्या आप नए मकान या दुकान के लिए संपूर्ण इलेक्ट्रिकल कॉन्ट्रैक्ट लेते हैं?",
    answer:
      "Yes, we undertake full turnkey electrical contracting work including conduit piping, point wiring, MCB distribution board setup, and architectural lighting installation for newly built or renovated properties.",
    answerHi:
      "हाँ, हम नए और नवीनीकृत मकानों, दुकानों और कार्यालयों के लिए कंसील्ड पाइपिंग, संपूर्ण वायरिंग, एमसीबी बोर्ड सेटअप और लाइटिंग फिटिंग का संपूर्ण कॉन्ट्रैक्ट कार्य करते हैं।",
  },
  {
    id: "faq-4",
    question: "How do I request an estimate or site visit for electrical work?",
    questionHi: "इलेक्ट्रिकल कार्य के लिए एस्टीमेट या विजिट कैसे बुक करें?",
    answer:
      "You can call us directly at +91 9811068312, reach out on WhatsApp, or submit the contact form on our website with your requirements. We will coordinate a suitable time for site assessment.",
    answerHi:
      "आप सीधे +91 9811068312 पर कॉल कर सकते हैं, व्हाट्सएप पर संदेश भेज सकते हैं या वेबसाइट पर संपर्क फॉर्म भर सकते हैं। हम आपकी सुविधा अनुसार साइट विजिट तय करेंगे।",
  },
  {
    id: "faq-5",
    question: "Do you assist with frequent MCB tripping or short circuit issues?",
    questionHi: "क्या आप बार-बार एमसीबी ट्रिप होने या शॉर्ट सर्किट की समस्या का समाधान करते हैं?",
    answer:
      "Yes, we inspect and troubleshoot circuit overloads, phase imbalance, faulty appliances, and neutral-earth leakage causing recurring MCB trips to ensure complete electrical safety.",
    answerHi:
      "हाँ, हम ओवरलोड, फेज असंतुलन, अर्थ लीकेज और शॉर्ट सर्किट के कारणों की जांच कर एमसीबी ट्रिपिंग की समस्या का सुरक्षित समाधान करते हैं।",
  },
];
