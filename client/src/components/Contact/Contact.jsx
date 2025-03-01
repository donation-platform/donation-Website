
// import { useState, useEffect } from "react";
// import { useSelector } from "react-redux";
// import axios from "axios";
// import { GoogleGenerativeAI } from "@google/generative-ai";

// // ✅ استخدم API Key الصحيح هنا
// const genAI = new GoogleGenerativeAI("AIzaSyAOqUTs0LtSzF7vfO7M3u7qDUFPKq39Bng");

// const Contact = () => {
//   const userId = useSelector((state) => state.user.id); // ✅ جلب الـ userId من Redux
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [isChatOpen, setIsChatOpen] = useState(false);
//   const [messages, setMessages] = useState([
//     { role: "system", content: "Hello! How can I assist you today?" },
//   ]);
//   const [input, setInput] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     if (userId) {
//       fetchUserData();
//     }
//   }, [userId]);

//   // ✅ جلب بيانات المستخدم تلقائيًا عند تحميل الصفحة
//   const fetchUserData = async () => {
//     try {
//       const response = await axios.get(
//         `http://localhost:5000/api/users/profile/${userId}`
//       );
//       if (response.data.user) {
//         setFormData({
//           name: response.data.user.name || "",
//           email: response.data.user.email || "",
//           message: "",
//         });
//       }
//     } catch (err) {
//       console.error("Error fetching user data:", err);
//       setError("Failed to load user data.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // ✅ إرسال البيانات إلى قاعدة البيانات
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post("http://localhost:5000/api/users/contact", {
//         user_id: userId,
//         ...formData,
//       });
//       alert("Message sent successfully!");
//       setFormData({ ...formData, message: "" });
//     } catch (error) {
//       console.error("Error sending message:", error);
//       setError("Failed to send message.");
//     }
//   };

//   // ✅ شات بوت الذكاء الاصطناعي باستخدام Gemini
//   const handleChatSubmit = async (e) => {
//     e.preventDefault();
//     if (!input.trim()) return;

//     const newMessages = [...messages, { role: "user", content: input }];
//     setMessages(newMessages);
//     setInput("");

//     try {
//       const model = genAI.getGenerativeModel({
//         model: "gemini-2.0-flash",
//       }); // ✅ استخدم موديل مدعوم
//       const result = await model.generateContent(input);

//       if (result.response && result.response.candidates) {
//         const aiReply = result.response.candidates[0].content.parts[0].text;
//         setMessages([...newMessages, { role: "assistant", content: aiReply }]);
//       } else {
//         throw new Error("Invalid AI response");
//       }
//     } catch (error) {
//       console.error("Error fetching AI response:", error);
//       setMessages([
//         ...newMessages,
//         {
//           role: "assistant",
//           content: "Sorry, I couldn't process that request.",
//         },
//       ]);
//     }
//   };

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p style={{ color: "red" }}>{error}</p>;

//   return (
//     <div className="bg-[#F4F4F4] min-h-screen">
//       <div className="min-h-screen flex flex-col items-center py-20 px-5">
//         <div className="w-full max-w-4xl space-y-8">
//           <div className="bg-white p-8 rounded-xl shadow-lg">
//             <h2 className="text-3xl font-bold text-center text-[#333] mb-6">
//               📩 Contact Us
//             </h2>
//             <form className="flex flex-col space-y-6" onSubmit={handleSubmit}>
//               <label className="text-lg font-semibold text-[#555]">Name</label>
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 disabled
//                 className="p-3 border-2 border-[#ddd] rounded-lg focus:outline-none bg-gray-100 text-[#333]"
//               />

//               <label className="text-lg font-semibold text-[#555]">Email</label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 disabled
//                 className="p-3 border-2 border-[#ddd] rounded-lg focus:outline-none bg-gray-100 text-[#333]"
//               />

//               <label className="text-lg font-semibold text-[#555]">
//                 Message
//               </label>
//               <textarea
//                 name="message"
//                 rows="4"
//                 placeholder="📝 Write your message..."
//                 value={formData.message}
//                 onChange={handleChange}
//                 className="p-3 border-2 border-[#ddd] rounded-lg focus:outline-none focus:border-[#A59B87] text-[#333]"
//                 required
//               ></textarea>

//               <button className="bg-[#A59B87] text-white py-3 rounded-lg text-lg font-bold hover:bg-[#8C8270] transition duration-300">
//                 Send Message
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>

//       {/* Chatbot Button */}
//       <div
//         onClick={() => setIsChatOpen(!isChatOpen)}
//         className="fixed bottom-10 right-10 bg-[#A59B87] p-4 rounded-full shadow-lg cursor-pointer transition duration-300 hover:bg-[#8C8270]"
//       >
//         <span className="text-white text-2xl">🤖</span>
//       </div>

//       {/* Chatbot Box */}
//       {isChatOpen && (
//         <div className="fixed bottom-20 right-10 w-96 bg-white rounded-xl shadow-lg z-50 p-4">
//           <div className="flex justify-between items-center border-b pb-2 mb-2">
//             <h3 className="text-lg font-bold text-[#333]">AI Chatbot</h3>
//             <button
//               onClick={() => setIsChatOpen(false)}
//               className="text-[#333] text-2xl font-bold p-2 transition duration-300 hover:text-[#555]"
//             >
//               ✖
//             </button>
//           </div>
//           <div className="h-64 overflow-y-auto bg-gray-50 p-3 rounded-md">
//             {messages.map((msg, index) => (
//               <div
//                 key={index}
//                 className={`p-2 my-1 rounded-md ${
//                   msg.role === "user"
//                     ? "bg-blue-100 self-end"
//                     : "bg-gray-200 self-start"
//                 }`}
//               >
//                 {msg.content}
//               </div>
//             ))}
//           </div>
//           <form onSubmit={handleChatSubmit} className="flex mt-2">
//             <input
//               type="text"
//               className="flex-grow p-2 border rounded-md"
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               placeholder="Type your message..."
//             />
//             <button
//               type="submit"
//               className="ml-2 p-2 bg-[#A59B87] text-white rounded-md hover:bg-[#8C8270]"
//             >
//               Send
//             </button>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Contact;


import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { GoogleGenerativeAI } from "@google/generative-ai";

// ✅ استخدم API Key الصحيح هنا
const genAI = new GoogleGenerativeAI("AIzaSyAOqUTs0LtSzF7vfO7M3u7qDUFPKq39Bng");

const Contact = () => {
  const userId = useSelector((state) => state.user.id); // ✅ جلب الـ userId من Redux
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    subject: "", // إضافة حقل الموضوع
  });

  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "system", content: "مرحباً! كيف يمكنني مساعدتك اليوم؟" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [activeTab, setActiveTab] = useState("form"); // للتبديل بين النموذج والخريطة

  // معلومات الاتصال
  const contactInfo = [
    { icon: "📱", title: "رقم الهاتف", value: "+966 50 123 4567" },
    { icon: "📧", title: "البريد الإلكتروني", value: "info@example.com" },
    { icon: "📍", title: "العنوان", value: "الرياض، المملكة العربية السعودية" },
  ];

  useEffect(() => {
    if (userId) {
      fetchUserData();
    }
  }, [userId]);

  // ✅ جلب بيانات المستخدم تلقائيًا عند تحميل الصفحة
  const fetchUserData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/users/profile/${userId}`
      );
      if (response.data.user) {
        setFormData({
          name: response.data.user.name || "",
          email: response.data.user.email || "",
          message: "",
          subject: "",
        });
      }
    } catch (err) {
      console.error("Error fetching user data:", err);
      setError("فشل في تحميل بيانات المستخدم.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ إرسال البيانات إلى قاعدة البيانات
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus("loading");
    try {
      await axios.post("http://localhost:5000/api/users/contact", {
        user_id: userId,
        ...formData,
      });
      setSubmitStatus("success");
      setTimeout(() => setSubmitStatus(null), 3000);
      setFormData({ ...formData, message: "", subject: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus(null), 3000);
    }
  };

  // ✅ شات بوت الذكاء الاصطناعي باستخدام Gemini
  const handleChatSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");

    try {
      const model = genAI.getGenerativeModel({
        model: "gemini-2.0-flash",
      }); // ✅ استخدم موديل مدعوم
      const result = await model.generateContent(input);

      if (result.response && result.response.candidates) {
        const aiReply = result.response.candidates[0].content.parts[0].text;
        setMessages([...newMessages, { role: "assistant", content: aiReply }]);
      } else {
        throw new Error("Invalid AI response");
      }
    } catch (error) {
      console.error("Error fetching AI response:", error);
      setMessages([
        ...newMessages,
        {
          role: "assistant",
          content: "عذراً، لم أتمكن من معالجة هذا الطلب.",
        },
      ]);
    }
  };

  if (loading) return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-[#662480] to-[#E3007E]">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#E3007E] mx-auto"></div>
        <p className="text-center mt-4 text-gray-700">جاري التحميل...</p>
      </div>
    </div>
  );
  
  if (error) return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-[#662480] to-[#E3007E]">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <p className="text-red-600 text-center">{error}</p>
        <button 
          onClick={() => window.location.reload()} 
          className="mt-4 bg-[#E3007E] text-white py-2 px-4 rounded hover:bg-[#662480] transition duration-300 block mx-auto"
        >
          إعادة المحاولة
        </button>
      </div>
    </div>
  );

  return (
    <div className="bg-gray-50 min-h-screen font-sans" dir="rtl">
      {/* Header with gradient */}
      <div className="w-full bg-gradient-to-r from-[#662480] to-[#E3007E] py-10 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center">تواصل معنا</h1>
          <p className="text-center mt-2 opacity-90">نحن هنا للإجابة على جميع استفساراتك</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info Section */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-[#662480] to-[#E3007E] py-6 px-4 text-white">
                <h2 className="text-xl font-bold">معلومات الاتصال</h2>
                <p className="mt-2 opacity-75 text-sm">يمكنك التواصل معنا مباشرة من خلال:</p>
              </div>
              <div className="p-6 space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start">
                    <div className="h-10 w-10 flex items-center justify-center bg-pink-100 rounded-full text-[#E3007E]">
                      {info.icon}
                    </div>
                    <div className="mr-4">
                      <h3 className="font-semibold text-gray-800">{info.title}</h3>
                      <p className="text-gray-600">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Social Media */}
              <div className="p-6 pt-0">
                <h3 className="font-semibold text-gray-800 mb-3">تابعنا على:</h3>
                <div className="flex space-x-4 space-x-reverse">
                  <a href="#" className="h-10 w-10 rounded-full bg-[#662480] text-white flex items-center justify-center hover:bg-[#E3007E] transition duration-300">
                    <span>𝕏</span>
                  </a>
                  <a href="#" className="h-10 w-10 rounded-full bg-[#662480] text-white flex items-center justify-center hover:bg-[#E3007E] transition duration-300">
                    <span>f</span>
                  </a>
                  <a href="#" className="h-10 w-10 rounded-full bg-[#662480] text-white flex items-center justify-center hover:bg-[#E3007E] transition duration-300">
                    <span>in</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Form/Map Tabs Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="flex border-b">
                <button 
                  onClick={() => setActiveTab("form")}
                  className={`flex-1 py-4 text-center font-semibold transition duration-300 ${
                    activeTab === "form" 
                      ? "bg-gradient-to-r from-[#662480] to-[#E3007E] text-white" 
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  نموذج الاتصال
                </button>
                <button 
                  onClick={() => setActiveTab("map")}
                  className={`flex-1 py-4 text-center font-semibold transition duration-300 ${
                    activeTab === "map" 
                      ? "bg-gradient-to-r from-[#662480] to-[#E3007E] text-white" 
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  موقعنا على الخريطة
                </button>
              </div>

              {activeTab === "form" ? (
                <div className="p-6">
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-700 font-semibold mb-2">الاسم</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          disabled
                          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none bg-gray-100 text-gray-600"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 font-semibold mb-2">البريد الإلكتروني</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          disabled
                          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none bg-gray-100 text-gray-600"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">الموضوع</label>
                      <input
                        type="text"
                        name="subject"
                        placeholder="أدخل موضوع الرسالة"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#E3007E] text-gray-700"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">الرسالة</label>
                      <textarea
                        name="message"
                        rows="5"
                        placeholder="اكتب رسالتك هنا..."
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#E3007E] text-gray-700"
                        required
                      ></textarea>
                    </div>

                    <button 
                      type="submit"
                      className="w-full py-3 px-6 bg-gradient-to-r from-[#662480] to-[#E3007E] text-white rounded-lg font-bold hover:opacity-90 transition duration-300 flex items-center justify-center"
                      disabled={submitStatus === "loading"}
                    >
                      {submitStatus === "loading" ? (
                        <>
                          <span className="animate-spin h-5 w-5 mr-3 border-t-2 border-b-2 border-white rounded-full"></span>
                          جاري الإرسال...
                        </>
                      ) : "إرسال الرسالة"}
                    </button>

                    {submitStatus === "success" && (
                      <div className="p-4 bg-green-100 text-green-700 rounded-lg">
                        تم إرسال رسالتك بنجاح! سنقوم بالرد عليك في أقرب وقت.
                      </div>
                    )}

                    {submitStatus === "error" && (
                      <div className="p-4 bg-red-100 text-red-700 rounded-lg">
                        حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى.
                      </div>
                    )}
                  </form>
                </div>
              ) : (
                <div className="p-6">
                  <div className="bg-gray-200 rounded-lg overflow-hidden h-80 relative">
                    {/* لتنفيذ Google Maps بشكل فعلي، يجب إضافة مكتبة react-google-maps واستخدامها هنا */}
                    {/* هذا عرض تمثيلي للخريطة */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.674457780928!2d46.675245500000005!3d24.713552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0x33b67f0a61cddc34!2z2KfZhNix2YrYp9i2INin2YTYs9i52YjYr9mK2Kk!5e0!3m2!1sar!2sus!4v1709302344152!5m2!1sar!2sus" 
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }} 
                        allowFullScreen="" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h3 className="font-bold text-gray-800 mb-2">زيارة مكتبنا</h3>
                    <p className="text-gray-600">
                      يمكنك زيارتنا في مقر الشركة خلال ساعات العمل الرسمية من الأحد إلى الخميس من الساعة 9 صباحاً حتى 5 مساءً.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Chatbot Button */}
      <div
        onClick={() => setIsChatOpen(!isChatOpen)}
        className="fixed bottom-6 left-6 bg-gradient-to-r from-[#662480] to-[#E3007E] p-4 rounded-full shadow-lg cursor-pointer transition duration-300 hover:opacity-90 z-40"
      >
        <span className="text-white text-2xl">🤖</span>
      </div>

      {/* Chatbot Box */}
      {isChatOpen && (
        <div className="fixed bottom-24 left-6 w-80 md:w-96 bg-white rounded-lg shadow-2xl z-50 overflow-hidden">
          <div className="bg-gradient-to-r from-[#662480] to-[#E3007E] py-3 px-4 flex justify-between items-center">
            <button
              onClick={() => setIsChatOpen(false)}
              className="text-white hover:text-gray-200 transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h3 className="text-lg font-bold text-white">المساعد الذكي</h3>
            <div className="h-6 w-6"></div> {/* للمحافظة على التوازن */}
          </div>
          <div className="h-80 overflow-y-auto bg-gray-50 p-3">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-3 my-2 rounded-lg max-w-4/5 ${
                  msg.role === "user"
                    ? "bg-gradient-to-r from-[#662480] to-[#E3007E] text-white mr-auto ml-0"
                    : "bg-gray-200 ml-auto mr-0"
                }`}
                style={{ maxWidth: "75%" }}
              >
                {msg.content}
              </div>
            ))}
          </div>
          <form onSubmit={handleChatSubmit} className="p-3 border-t">
            <div className="flex">
              <input
                type="text"
                className="flex-grow p-2 border rounded-r-lg border-gray-300 focus:outline-none focus:border-[#E3007E]"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="اكتب رسالتك هنا..."
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-[#662480] to-[#E3007E] text-white p-2 rounded-l-lg"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transform rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Contact;