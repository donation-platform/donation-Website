// // import axios from 'axios';
// // import React, { useState } from 'react';

// // export default function Payment() {

// //     const countries = [
// //         "الأردن", "السعودية", "الإمارات", "مصر", "الكويت", "البحرين",
// //         "قطر", "عمان", "لبنان", "المغرب", "الجزائر", "تونس",
// //         "العراق", "اليمن", "السودان", "سوريا", "ليبيا", "فلسطين"
// //     ];

// //     const phonePrefixes = [
// //         { code: "+962", country: "الأردن" },
// //         { code: "+966", country: "السعودية" },
// //         { code: "+20", country: "مصر" },
// //         { code: "+971", country: "الإمارات" },
// //         { code: "+965", country: "الكويت" },
// //         { code: "+974", country: "قطر" },
// //         { code: "+973", country: "البحرين" },
// //         { code: "+968", country: "عمان" },
// //         { code: "+218", country: "ليبيا" },
// //         { code: "+961", country: "لبنان" },
// //         { code: "+963", country: "سوريا" },
// //         { code: "+964", country: "العراق" },
// //         { code: "+212", country: "المغرب" },
// //         { code: "+216", country: "تونس" },
// //         { code: "+213", country: "الجزائر" },
// //         { code: "+249", country: "السودان" },
// //         { code: "+253", country: "جيبوتي" },
// //         { code: "+252", country: "الصومال" },
// //         { code: "+222", country: "موريتانيا" },
// //         { code: "+970", country: "فلسطين" },
// //         { code: "+269", country: "جزر القمر" }
// //     ];

// //     const donationOptions = {
// //         sadaqahJariyah: "صدقه جاريه",
// //         zakatMal: "زكاة مال",
// //         ventilator: "جهاز التنفس الصناعي",
// //         dialysisMachine: "جهاز غسيل الكلى",
// //         glucoseMonitor: "جهاز فحص السكر",
// //         bloodPressureMonitor: "جهاز فحص الضغط",
// //         otherDevices: "اجهزه اخرى",
// //         catheterization: "عملية قسطره",
// //         openHeartSurgery: "عملية قلب مفتوح",
// //         otherSurgeries: "عمليات اخرى",
// //         patientBed: "سرير لمريض",
// //         other: "اخرى"
// //     };

// //     const [Program, setProgram] = useState("");
// //     const [email, setEmail] = useState("");
// //     const [Country, setCountry] = useState("");
// //     const [PhoneNum, setPhoneNum] = useState(0);
// //     const [phonePrefix, setPhonePrefix] = useState("");
// //     const [paymentMethod, setPaymentMethod] = useState("");
// //     const [nameOfCard, setNameOfCard] = useState("");
// //     const [numOfCard, setNumOfCard] = useState("");
// //     const [month, setMonth] = useState("");
// //     const [year, setYear] = useState("");
// //     const [code, setCode] = useState("");

// //     const handleSubmit = async(e) => {
// //         e.preventDefault();
// //         // console.log(code);
// //         const body = { email:email , code:code , program:Program , Country:Country ,
// //             PhoneNum:PhoneNum , phonePrefix:phonePrefix , paymentMethod:paymentMethod ,
// //             nameOfCard:nameOfCard , numOfCard:numOfCard , month:month , year:year
// //          };
// //         try {
// //             const response = await axios.post("http://localhost:5000/payment/newPayment", body);
// //             const data = response.data;
// //             alert("تم الدفع بنجاح ✅ ")

// //         }
// //         catch (error) {
// //             console.log("Error payment", error);
// //         }

// //     }

// //     return (
// // <>

// //         <form onSubmit={handleSubmit}>

// //             <div className="min-h-screen flex items-center justify-center bg-gray-200 p-5 rtl">
// //                 <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6 text-gray-700">

// //                     <div className="w-full flex justify-center mb-5">
// //                         <div className="bg-indigo-500 text-white rounded-full w-20 h-20 flex items-center justify-center shadow-lg">
// //                             <i className="mdi mdi-credit-card-outline text-3xl" />
// //                         </div>
// //                     </div>

// //                     <h1 className="text-center text-xl font-bold mb-6">معلومات الدفع الآمنة</h1>

// //                     <div className="mb-3">
// //                         <label className="font-bold text-sm mb-2 ml-1">برنامج التبرع</label>
// //                         <select
// //                             className="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer"
// //                             name="selectedProgram"
// //                             // value={Program}
// //                             onChange={(e) => setProgram(e.target.value)}
// //                         // onChange={handleSelectChange}
// //                         >
// //                             {Object.entries(donationOptions).map(([key, value]) => (
// //                                 <option key={key} value={value}>{value}</option>
// //                             ))}
// //                         </select>

// //                     </div>

// //                     <div className="mb-3">
// //                         <label className="font-bold text-sm mb-2 ml-1">البريد الإلكتروني</label>
// //                         <input
// //                             className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
// //                             type="email"
// //                             name="email"
// //                             placeholder="example@email.com"
// //                             value={email}
// //                             onChange={(e) => setEmail(e.target.value)}
// //                         // onChange={handleInputChange}
// //                         />
// //                     </div>

// //                     <div className="mb-3">
// //                         <label className="font-bold text-sm mb-2 ml-1">الدوله</label>
// //                         <select
// //                             className="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer"
// //                             name="selectedCountry"
// //                             // value={Country}
// //                             onChange={(e) => setCountry(e.target.value)}
// //                         // onChange={handleSelectChange}
// //                         >
// //                             <option value="">أختر دولتك</option>
// //                             {countries.map((country) => (
// //                                 <option key={country} value={country}>{country}</option>
// //                             ))}
// //                         </select>
// //                     </div>

// //                     <div className="mb-3">
// //                         <label className="font-bold text-sm mb-2 ml-1">رقم الهاتف</label>
// //                         <div className="flex">
// //                             <select
// //                                 className="form-select px-3 py-2 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer"
// //                                 name="phonePrefix"
// //                                 // value={phonePrefix}
// //                                 onChange={(e) => setPhonePrefix(e.target.value)}
// //                             // onChange={handleSelectChange}
// //                             >
// //                                 <option value="">مفتاح الدولة</option>
// //                                 {phonePrefixes.map((prefix) => (
// //                                     <option key={prefix.code} value={prefix.code}>
// //                                         {prefix.code} - {prefix.country}
// //                                     </option>
// //                                 ))}
// //                             </select>

// //                             <input
// //                                 type="text"
// //                                 name="fonNum"
// //                                 className="w-full px-3 py-2 ml-2 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
// //                                 placeholder="رقم الهاتف"
// //                                 value={PhoneNum}
// //                                 onChange={(e) => setPhoneNum(e.target.value)}
// //                             />
// //                         </div>
// //                     </div>

// //                     <div className="mb-3">
// //                         <label className="flex items-center cursor-pointer">
// //                             <input
// //                                 type="radio"
// //                                 name="paymentMethod"
// //                                 value="بطاقه ائتمانيه"
// //                                 checked={paymentMethod === 'بطاقه ائتمانيه'}
// //                                 onChange={(e) => setPaymentMethod(e.target.value)}
// //                             // onChange={handleInputChange}
// //                             />
// //                             <img src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png" className="h-8 ml-3" alt="بطاقة ائتمان" />
// //                         </label>
// //                         <label className="flex items-center cursor-pointer">
// //                             <input
// //                                 type="radio"
// //                                 name="paymentMethod"
// //                                 value="باي بال"
// //                                 checked={paymentMethod === 'باي بال'}
// //                                 onChange={(e) => setPaymentMethod(e.target.value)}
// //                             // onChange={handleInputChange}
// //                             />
// //                             <img src="https://www.sketchappsources.com/resources/source-image/PayPalCard.png" className="h-8 ml-3" alt="باي بال" />
// //                         </label>
// //                         <label className="flex items-center cursor-pointer">
// //                             <input
// //                                 type="radio"
// //                                 name="paymentMethod"
// //                                 value="نقدا"
// //                                 checked={paymentMethod === 'نقدا'}
// //                                 onChange={(e) => setPaymentMethod(e.target.value)}
// //                             // onChange={handleInputChange}
// //                             />
// //                             $$ نقدا
// //                         </label>
// //                     </div>

// //                     <label className="block font-bold text-sm mb-1">الاسم على البطاقة</label>
// //                     <input
// //                         type="text"
// //                         name="nameOfCard"
// //                         placeholder="abdullah ghanem"
// //                         className="w-full border-2 border-gray-200 rounded-md p-2 mb-3 focus:border-indigo-500"
// //                         value={nameOfCard}
// //                         onChange={(e) => setNameOfCard(e.target.value)}
// //                     // onChange={handleInputChange}
// //                     />

// //                     <label className="block font-bold text-sm mb-1">رقم البطاقة</label>
// //                     <input
// //                         type="text"
// //                         name="numOfCard"
// //                         placeholder="0000 0000 0000 0000"
// //                         className="w-full border-2 border-gray-200 rounded-md p-2 mb-3 focus:border-indigo-500"
// //                         value={numOfCard}
// //                         onChange={(e) => setNumOfCard(e.target.value)}
// //                     // onChange={handleInputChange}
// //                     />

// //                     <div className="flex gap-3">
// //                         <div className="w-1/2">
// //                             <label className="block font-bold text-sm mb-1">تاريخ الانتهاء</label>
// //                             <select
// //                                 name="expiryMonth"
// //                                 className="w-full border-2 border-gray-200 rounded-md p-2 focus:border-indigo-500"
// //                                 // value={month}
// //                                 onChange={(e) => setMonth(e.target.value)}
// //                             // onChange={handleSelectChange}
// //                             >
// //                                 {[...Array(12)].map((_, i) => (
// //                                     <option key={i} value={i + 1}>
// //                                         {String(i + 1).padStart(2, '0')}
// //                                     </option>
// //                                 ))}
// //                             </select>
// //                         </div>

// //                         <div className="w-1/2">
// //                             <label className="block font-bold text-sm mb-1">السنة</label>
// //                             <select
// //                                 name="expiryYear"
// //                                 className="w-full border-2 border-gray-200 rounded-md p-2 focus:border-indigo-500"
// //                                 // value={year}
// //                                 onChange={(e) => setYear(e.target.value)}
// //                             // onChange={handleSelectChange}
// //                             >
// //                                 {[...Array(10)].map((_, i) => (
// //                                     <option key={i} value={2025 + i}>
// //                                         {2025 + i}
// //                                     </option>
// //                                 ))}
// //                             </select>
// //                         </div>
// //                     </div>

// //                     <label className="block font-bold text-sm mt-3 mb-1">رمز الأمان</label>
// //                     <input
// //                         type="text"
// //                         name="securityCode"
// //                         placeholder="000"
// //                         className="w-1/2 border-2 border-gray-200 rounded-md p-2 mb-3 focus:border-indigo-500"
// //                         value={code}
// //                         onChange={(e) => setCode(e.target.value)}
// //                     />

// //                     <button
// //                         type="submit"
// //                         className="w-full bg-blue-500 text-white py-3 rounded-md mt-6"
// //                     >
// //                         دفع الآن
// //                     </button>
// //                 </div>
// //             </div>
// //         </form>

// //         </>
// //     );
// // }
// // import axios from 'axios';
// // import React, { useState } from 'react';
// // import { useSelector } from 'react-redux';
// // import { useParams } from 'react-router-dom';

// // export default function Payment() {
// //     // const { itemId } = useParams();
// //     const  itemId  = "10";
// //     // const userId = useSelector((state) => state.user.id);
// //     const userId = "1";
// //     const [email, setEmail] = useState("");
// //     const [paymentMethod, setPaymentMethod] = useState("");
// //     const [nameOfCard, setNameOfCard] = useState("");
// //     const [numOfCard, setNumOfCard] = useState("");
// //     const [month, setMonth] = useState("");
// //     const [year, setYear] = useState("");
// //     const [code, setCode] = useState("");
// //     const [amount, setAmount] = useState("");

// //     const handleSubmit = async (e) => {
// //         e.preventDefault();
// //         const body = { userId, itemId, email, paymentMethod, nameOfCard, numOfCard, month, year, code, amount };
// //         try {
// //             await axios.post("http://localhost:5000/payment/newPayment", body);
// //             alert("تم الدفع بنجاح ✅");
// //         } catch (error) {
// //             console.log("Error payment", error);
// //         }
// //     };

// //     return (
// //         <form onSubmit={handleSubmit} className="min-h-screen flex items-center justify-center bg-gray-200 p-5 rtl">
// //             <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6 text-gray-700">
// //                 <h1 className="text-center text-xl font-bold mb-6">معلومات الدفع الآمنة</h1>

// //                 <input type="hidden" value={userId} name="userId" />
// //                 <input type="hidden" value={itemId} name="itemId" />

// //                 <div className="mb-3">
// //                     <label className="font-bold text-sm mb-2">البريد الإلكتروني</label>
// //                     <input
// //                         className="w-full px-3 py-2 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500"
// //                         type="email"
// //                         placeholder="example@email.com"
// //                         value={email}
// //                         onChange={(e) => setEmail(e.target.value)}
// //                     />
// //                 </div>

// //                 <div className="mb-3">
// //                     <label className="font-bold text-sm mb-2">المبلغ</label>
// //                     <input
// //                         className="w-full px-3 py-2 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500"
// //                         type="number"
// //                         placeholder="أدخل المبلغ"
// //                         value={amount}
// //                         onChange={(e) => setAmount(e.target.value)}
// //                     />
// //                 </div>

// //                 <div className="mb-3">
// //                     <label className="font-bold text-sm mb-2">طريقة الدفع</label>
// //                     <div className="flex gap-3">
// //                         <label className="flex items-center cursor-pointer">
// //                             <input
// //                                 type="radio"
// //                                 name="paymentMethod"
// //                                 value="بطاقة ائتمانية"
// //                                 checked={paymentMethod === 'بطاقة ائتمانية'}
// //                                 onChange={(e) => setPaymentMethod(e.target.value)}
// //                             />
// //                             <span className="ml-2">بطاقة ائتمانية</span>
// //                         </label>
// //                         <label className="flex items-center cursor-pointer">
// //                             <input
// //                                 type="radio"
// //                                 name="paymentMethod"
// //                                 value="باي بال"
// //                                 checked={paymentMethod === 'باي بال'}
// //                                 onChange={(e) => setPaymentMethod(e.target.value)}
// //                             />
// //                             <span className="ml-2">باي بال</span>
// //                         </label>
// //                     </div>
// //                 </div>

// //                 <label className="block font-bold text-sm mb-1">الاسم على البطاقة</label>
// //                 <input
// //                     type="text"
// //                     placeholder="abdullah ghanem"
// //                     className="w-full border-2 border-gray-200 rounded-md p-2 mb-3"
// //                     value={nameOfCard}
// //                     onChange={(e) => setNameOfCard(e.target.value)}
// //                 />

// //                 <label className="block font-bold text-sm mb-1">رقم البطاقة</label>
// //                 <input
// //                     type="text"
// //                     placeholder="0000 0000 0000 0000"
// //                     className="w-full border-2 border-gray-200 rounded-md p-2 mb-3"
// //                     value={numOfCard}
// //                     onChange={(e) => setNumOfCard(e.target.value)}
// //                 />

// //                 <div className="flex gap-3">
// //                     <div className="w-1/2">
// //                         <label className="block font-bold text-sm mb-1">تاريخ الانتهاء</label>
// //                         <select
// //                             className="w-full border-2 border-gray-200 rounded-md p-2"
// //                             onChange={(e) => setMonth(e.target.value)}
// //                         >
// //                             {[...Array(12)].map((_, i) => (
// //                                 <option key={i} value={i + 1}>{String(i + 1).padStart(2, '0')}</option>
// //                             ))}
// //                         </select>
// //                     </div>
// //                     <div className="w-1/2">
// //                         <label className="block font-bold text-sm mb-1">السنة</label>
// //                         <select
// //                             className="w-full border-2 border-gray-200 rounded-md p-2"
// //                             onChange={(e) => setYear(e.target.value)}
// //                         >
// //                             {[...Array(10)].map((_, i) => (
// //                                 <option key={i} value={2025 + i}>{2025 + i}</option>
// //                             ))}
// //                         </select>
// //                     </div>
// //                 </div>

// //                 <label className="block font-bold text-sm mt-3 mb-1">رمز الأمان</label>
// //                 <input
// //                     type="text"
// //                     placeholder="000"
// //                     className="w-1/2 border-2 border-gray-200 rounded-md p-2 mb-3"
// //                     value={code}
// //                     onChange={(e) => setCode(e.target.value)}
// //                 />

// //                 <button type="submit" className="w-full bg-blue-500 text-white py-3 rounded-md mt-6">
// //                     دفع الآن
// //                 </button>
// //             </div>
// //         </form>
// //     );
// // }

// import axios from 'axios';
// import React, { useState } from 'react';

// export default function Payment() {
//     // تعيين userId و itemId بشكل ثابت لاختبار الدفع
//     const userId = "1";
//     const itemId = "10";

//     const [email, setEmail] = useState("");
//     const [paymentMethod, setPaymentMethod] = useState("");
//     const [nameOfCard, setNameOfCard] = useState("");
//     const [numOfCard, setNumOfCard] = useState("");
//     const [month, setMonth] = useState("");
//     const [year, setYear] = useState("");
//     const [code, setCode] = useState("");
//     const [amount, setAmount] = useState("");
//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         // ✅ التحقق من أن جميع القيم موجودة
//         if (!userId || !itemId || !email || !paymentMethod || !nameOfCard || !numOfCard || !month || !year || !code || !amount) {
//             alert("❌ جميع الحقول مطلوبة!");
//             return;
//         }

//         // ✅ تحويل القيم الرقمية إلى نصوص لضمان تطابق النوع مع التوقعات في السيرفر
//         const body = {
//             userId: String(userId),
//             itemId: String(itemId),
//             email: String(email),
//             paymentMethod: String(paymentMethod),
//             nameOfCard: String(nameOfCard),
//             numOfCard: String(numOfCard),
//             month: String(month),
//             year: String(year),
//             code: String(code),
//             amount: String(amount)
//         };

//         console.log("🚀 البيانات المرسلة إلى السيرفر:", body);

//         try {
//             const response = await axios.post("http://localhost:5000/payment/newPayment", body);
//             alert("✅ تم الدفع بنجاح!");
//             console.log("✅ استجابة السيرفر:", response.data);
//         } catch (error) {
//             console.error("❌ خطأ أثناء الدفع:", error.response ? error.response.data : error);
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit} className="min-h-screen flex items-center justify-center bg-gray-200 p-5 rtl">
//             <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6 text-gray-700">
//                 <h1 className="text-center text-xl font-bold mb-6">معلومات الدفع الآمنة</h1>

//                 <input type="hidden" value={userId} name="userId" />
//                 <input type="hidden" value={itemId} name="itemId" />

//                 <div className="mb-3">
//                     <label className="font-bold text-sm mb-2">البريد الإلكتروني</label>
//                     <input
//                         className="w-full px-3 py-2 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500"
//                         type="email"
//                         placeholder="example@email.com"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                     />
//                 </div>

//                 <div className="mb-3">
//                     <label className="font-bold text-sm mb-2">المبلغ</label>
//                     <input
//                         className="w-full px-3 py-2 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500"
//                         type="number"
//                         placeholder="أدخل المبلغ"
//                         value={amount}
//                         onChange={(e) => setAmount(e.target.value)}
//                     />
//                 </div>

//                 <div className="mb-3">
//                     <label className="font-bold text-sm mb-2">طريقة الدفع</label>
//                     <div className="flex gap-3">
//                         <label className="flex items-center cursor-pointer">
//                             <input
//                                 type="radio"
//                                 name="paymentMethod"
//                                 value="بطاقة ائتمانية"
//                                 checked={paymentMethod === 'بطاقة ائتمانية'}
//                                 onChange={(e) => setPaymentMethod(e.target.value)}
//                             />
//                             <span className="ml-2">بطاقة ائتمانية</span>
//                         </label>
//                         <label className="flex items-center cursor-pointer">
//                             <input
//                                 type="radio"
//                                 name="paymentMethod"
//                                 value="باي بال"
//                                 checked={paymentMethod === 'باي بال'}
//                                 onChange={(e) => setPaymentMethod(e.target.value)}
//                             />
//                             <span className="ml-2">باي بال</span>
//                         </label>
//                     </div>
//                 </div>

//                 <label className="block font-bold text-sm mb-1">الاسم على البطاقة</label>
//                 <input
//                     type="text"
//                     placeholder="abdullah ghanem"
//                     className="w-full border-2 border-gray-200 rounded-md p-2 mb-3"
//                     value={nameOfCard}
//                     onChange={(e) => setNameOfCard(e.target.value)}
//                 />

//                 <label className="block font-bold text-sm mb-1">رقم البطاقة</label>
//                 <input
//                     type="text"
//                     placeholder="0000 0000 0000 0000"
//                     className="w-full border-2 border-gray-200 rounded-md p-2 mb-3"
//                     value={numOfCard}
//                     onChange={(e) => setNumOfCard(e.target.value)}
//                 />

//                 <div className="flex gap-3">
//                     <div className="w-1/2">
//                         <label className="block font-bold text-sm mb-1">تاريخ الانتهاء</label>
//                         <select
//                             className="w-full border-2 border-gray-200 rounded-md p-2"
//                             value={month}
//                             onChange={(e) => setMonth(e.target.value)}
//                         >
//                             <option value="" disabled>اختر الشهر</option>
//                             {[...Array(12)].map((_, i) => (
//                                 <option key={i} value={i + 1}>{String(i + 1).padStart(2, '0')}</option>
//                             ))}
//                         </select>
//                     </div>
//                     <div className="w-1/2">
//                         <label className="block font-bold text-sm mb-1">السنة</label>
//                         <select
//                             className="w-full border-2 border-gray-200 rounded-md p-2"
//                             value={year}
//                             onChange={(e) => setYear(e.target.value)}
//                         >
//                             <option value="" disabled>اختر السنة</option>
//                             {[...Array(10)].map((_, i) => (
//                                 <option key={i} value={2025 + i}>{2025 + i}</option>
//                             ))}
//                         </select>
//                     </div>
//                 </div>

//                 <label className="block font-bold text-sm mt-3 mb-1">رمز الأمان</label>
//                 <input
//                     type="text"
//                     placeholder="000"
//                     className="w-1/2 border-2 border-gray-200 rounded-md p-2 mb-3"
//                     value={code}
//                     onChange={(e) => setCode(e.target.value)}
//                 />

//                 <button type="submit" className="w-full bg-blue-500 text-white py-3 rounded-md mt-6">
//                     دفع الآن
//                 </button>
//             </div>
//         </form>
//     );
// }

import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function Payment() {
  const { itemId } = useParams();
  const userId = useSelector((state) => state.user.id);

  const [email, setEmail] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [nameOfCard, setNameOfCard] = useState("");
  const [numOfCard, setNumOfCard] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [code, setCode] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ التحقق من أن جميع القيم موجودة
    if (
      !userId ||
      !itemId ||
      !email ||
      !paymentMethod ||
      !nameOfCard ||
      !numOfCard ||
      !month ||
      !year ||
      !code ||
      !amount
    ) {
      alert("❌ جميع الحقول مطلوبة!");
      return;
    }

    // ✅ تحويل القيم الرقمية إلى نصوص لضمان تطابق النوع مع التوقعات في السيرفر
    const body = {
      userId: String(userId),
      itemId: String(itemId),
      email: String(email),
      paymentMethod: String(paymentMethod),
      nameOfCard: String(nameOfCard),
      numOfCard: String(numOfCard),
      month: String(month),
      year: String(year),
      code: String(code),
      amount: String(amount),
    };

    console.log("🚀 البيانات المرسلة إلى السيرفر:", body);

    try {
      const response = await axios.post(
        "http://localhost:5000/payment/newPayment",
        body
      );
      alert("✅ تم الدفع بنجاح!");
      console.log("✅ استجابة السيرفر:", response.data);
    } catch (error) {
      console.error(
        "❌ خطأ أثناء الدفع:",
        error.response ? error.response.data : error
      );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 py-12 px-4 sm:px-6 lg:px-8 rtl">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:shadow-xl">
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 px-6 py-4">
          <h1 className="text-white text-xl font-bold text-center">
            معلومات الدفع الآمنة
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="px-6 py-8 space-y-6">
          <input type="hidden" value={userId} name="userId" />
          <input type="hidden" value={itemId} name="itemId" />

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              البريد الإلكتروني
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </div>
              <input
                className="block w-full pr-10 pl-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                type="email"
                placeholder="example@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              المبلغ
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <input
                className="block w-full pr-10 pl-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                type="number"
                placeholder="أدخل المبلغ"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              طريقة الدفع
            </label>
            <div className="grid grid-cols-2 gap-4">
              <div
                className={`border rounded-md p-3 cursor-pointer transition duration-150 ${
                  paymentMethod === "بطاقة ائتمانية"
                    ? "border-indigo-500 bg-indigo-50"
                    : "border-gray-300 hover:border-indigo-300"
                }`}
                onClick={() => setPaymentMethod("بطاقة ائتمانية")}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-indigo-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                      />
                    </svg>
                    <span className="mr-2">بطاقة ائتمانية</span>
                  </div>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="بطاقة ائتمانية"
                    checked={paymentMethod === "بطاقة ائتمانية"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                  />
                </div>
              </div>

              <div
                className={`border rounded-md p-3 cursor-pointer transition duration-150 ${
                  paymentMethod === "باي بال"
                    ? "border-indigo-500 bg-indigo-50"
                    : "border-gray-300 hover:border-indigo-300"
                }`}
                onClick={() => setPaymentMethod("باي بال")}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-blue-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="mr-2">باي بال</span>
                  </div>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="باي بال"
                    checked={paymentMethod === "باي بال"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                الاسم على البطاقة
              </label>
              <input
                type="text"
                placeholder="Abdullah Ghanem"
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                value={nameOfCard}
                onChange={(e) => setNameOfCard(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                رقم البطاقة
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="0000 0000 0000 0000"
                  className="block w-full pr-10 pl-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  value={numOfCard}
                  onChange={(e) => setNumOfCard(e.target.value)}
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  الشهر
                </label>
                <select
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  value={month}
                  onChange={(e) => setMonth(e.target.value)}
                >
                  <option value="" disabled>
                    الشهر
                  </option>
                  {[...Array(12)].map((_, i) => (
                    <option key={i} value={i + 1}>
                      {String(i + 1).padStart(2, "0")}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  السنة
                </label>
                <select
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                >
                  <option value="" disabled>
                    السنة
                  </option>
                  {[...Array(10)].map((_, i) => (
                    <option key={i} value={2025 + i}>
                      {2025 + i}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  CVV
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="000"
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-150"
            >
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>دفع الآن</span>
              </div>
            </button>
          </div>

          <div className="flex items-center justify-center mt-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
            <span className="text-xs text-gray-500">
              جميع البيانات مشفرة ومؤمنة
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
