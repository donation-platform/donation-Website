

import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function Payment() {
  const itemId  = useParams().id;
  const userId = useSelector((state) => state.user.id);

  console.log(userId);
  console.log(itemId);


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
