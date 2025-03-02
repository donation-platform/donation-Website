import React from "react";
import Footer from "../Footer/Footer";
import { FaHeart } from "react-icons/fa";

const Donations = () => {
  return (
    <>
    <div className="bg-white min-h-screen "   style={{ fontFamily: "'IBM Plex Sans Arabic', sans-serif" }}>
    {/* Header Section */}
    <header className="bg-[#662480] text-white py-6 text-center">
      <h1 className="text-3xl font-bold">تفاصيل الحملة</h1>
    </header>

    {/* Main Content */}
    <div className="container mx-auto px-4 py-8">
      {/* Featured Image */}
      <div className="mb-8">
        <img
          src="https://i.extremetech.com/imagery/content-types/05worLBI9Nf9qoKMGXNr5Kc/hero-image.jpg"
          alt="Campaign Image"
          className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
        />
      </div>

      <div className=" px-20">
      {/* Campaign Title & Summary with Donation Button */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">

          {/* Campaign Title & Summary */}
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-[#E3007E] mb-4">
              عنوان الحملة: توفير أجهزة طبية لمستشفى الأطفال
            </h2>
            <p className="text-gray-700">
              حملة لجمع التبرعات لتوفير أجهزة طبية حديثة لمستشفى الأطفال في المنطقة. هدفنا هو تحسين الخدمات الطبية وإنقاذ الأرواح.
            </p>
          </div>

          {/* Donation Button on the Left */}
          <div className="mb-4 md:mb-0 md:mr-6">
            <button className="rounded-tl-[18px] rounded-tr-[0px] rounded-br-[18px] rounded-bl-[18px] bg-[#662480] text-white px-4 py-2 rounded-md hover:bg-[#E3007E] transition-colors duration-200 flex items-center justify-center space-x-2">
              <FaHeart className="text-white" /> {/* Heart Icon */}
              <span>تبرع الآن</span>
            </button>
          </div>
        </div>


      {/* Campaign Progress & Donation Goal */}
      <div className="mb-8 bg-gray-100 p-6 rounded-lg shadow-sm">
        <h3 className="text-xl font-bold text-[#662480] mb-4">تقدم الحملة</h3>
        <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
          <div
            className="bg-[#E3007E] h-4 rounded-full"
            style={{ width: "60%" }}
          ></div>
        </div>
        <div className="flex justify-between text-gray-700">
          <p>المبلغ المطلوب: 50,000 ريال</p>
          <p>المبلغ المجموع: 30,000 ريال</p>
        </div>
        <p className="text-gray-700 mt-2">تم جمع 60% من الهدف</p>
      </div>

      {/* Beneficiary Information */}
      <div className="mb-8">
        <h3 className="text-xl font-bold text-[#662480] mb-4">معلومات المستفيد</h3>
        <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
          <p className="text-gray-700">
            <strong>اسم المستفيد:</strong> مستشفى الأطفال
          </p>
          <p className="text-gray-700 mt-2">
            <strong>نوع المستفيد:</strong> منظمة
          </p>
          <p className="text-gray-700 mt-2">
            <strong>تمت الموافقة من قبل الإدارة:</strong> نعم
          </p>
          <p className="text-gray-700 mt-2">
            <strong>وثائق داعمة:</strong> <a href="#" className="text-[#E3007E] hover:underline">عرض الوثائق</a>
          </p>
        </div>
      </div>

      {/* Detailed Description */}
      <div className="mb-8">
        <h3 className="text-xl font-bold text-[#662480] mb-4">تفاصيل الحملة</h3>
        <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
          <p className="text-gray-700">
            نحن بحاجة إلى توفير أجهزة طبية حديثة لمستشفى الأطفال لتحسين الخدمات الطبية وإنقاذ الأرواح. الأجهزة المطلوبة تشمل أجهزة التنفس الصناعي وأجهزة مراقبة القلب.
          </p>
          <p className="text-gray-700 mt-4">
            <strong>تفاصيل التكاليف:</strong>
            <ul className="list-disc list-inside">
              <li>أجهزة التنفس الصناعي: 20,000 ريال</li>
              <li>أجهزة مراقبة القلب: 15,000 ريال</li>
              <li>تكاليف النقل والتركيب: 15,000 ريال</li>
            </ul>
          </p>
          <p className="text-gray-700 mt-4">
            <strong>الأثر المتوقع:</strong> تحسين الخدمات الطبية وإنقاذ حياة الأطفال.
          </p>
        </div>
      </div>
    </div>
     
    </div>
  </div>
  <Footer/>
  </>
  );
};

export default Donations;
