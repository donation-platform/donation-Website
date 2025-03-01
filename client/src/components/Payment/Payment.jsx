// import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { updateField, resetForm } from "../../Redux/paymentSlice";

export default function Payment() {

    const formData = useSelector((state) => state.payment);
    const dispatch = useDispatch();
  
    const handleInputChange = (e) => {
      dispatch(updateField({ name: e.target.name, value: e.target.value }));
    };
  
    const handleSelectChange = (e) => {
      dispatch(updateField({ name: e.target.name, value: e.target.value }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(formData);
    };





  return (
    <form onSubmit={handleSubmit}>
      
      <div className="min-h-screen flex items-center justify-center bg-gray-200 p-5 rtl">
        <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6 text-gray-700">

        <div className="w-full flex justify-center mb-5">
          <div className="bg-indigo-500 text-white rounded-full w-20 h-20 flex items-center justify-center shadow-lg">
            <i className="mdi mdi-credit-card-outline text-3xl" />
          </div>
        </div>


          <h1 className="text-center text-xl font-bold mb-6">معلومات الدفع الآمنة</h1>

          
          <div className="mb-3">
            <label className="font-bold text-sm mb-2 ml-1">برنامج التبرع</label>
            <select
              className="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer"
              name="selectedProgram"
              value={formData.selectedProgram}
              onChange={handleSelectChange}
            >
              <option value="صدقه جاريه">صدقه جاريه</option>
              <option value="زكاة المال">زكاة مال</option>
              <option value="جهاز التنفس الصناعي">جهاز التنفس الصناعي</option>
              <option value="جهاز غسيل الكلى">جهاز غسيل كلى</option>
              <option value="جهاز فحص السكر">جهاز فحص السكر</option>
              <option value="جهاز فحص الضغط">جهاز فحص الضغط</option>
              <option value="اجهزه اخرى">اجهزه اخرى</option>
              <option value="عملية قسطره">عملية قسطره</option>
              <option value="عمليه قلب مفتوح">عملية قلب مفتوح</option>
              <option value="عمليات اخرى">عمليات اخرى</option>
              <option value="سرير لمريض">سرير لمريض</option>
              <option value="اخرى">اخرى</option>
            </select>
          </div>

          
          <div className="mb-3">
            <label className="font-bold text-sm mb-2 ml-1">البريد الإلكتروني</label>
            <input
              className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
              type="email"
              name="email"
              placeholder="example@email.com"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>

          
          <div className="mb-3">
            <label className="font-bold text-sm mb-2 ml-1">الدوله</label>
            <select
              className="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer"
              name="selectedCountry"
              value={formData.selectedCountry}
              onChange={handleSelectChange}
            >
             <option value="">أختر دولتك</option>
             <option value="الأردن">الأردن</option>
             <option value="السعودية">السعودية</option>
             <option value="الإمارات">الإمارات</option>
             <option value="مصر">مصر</option>
             <option value="الكويت">الكويت</option>
             <option value="البحرين">البحرين</option>
             <option value="قطر">قطر</option>
             <option value="عمان">عمان</option>
             <option value="لبنان">لبنان</option>
             <option value="المغرب">المغرب</option>
             <option value="الجزائر">الجزائر</option>
             <option value="تونس">تونس</option>
             <option value="العراق">العراق</option>
             <option value="اليمن">اليمن</option>
             <option value="السودان">السودان</option>
             <option value="سوريا">سوريا</option>
             <option value="ليبيا">ليبيا</option>
             <option value="فلسطين">فلسطين</option>
            </select>
          </div>

          
          <div className="mb-3">
            <label className="font-bold text-sm mb-2 ml-1">رقم الهاتف</label>
            <div className="flex">
              <select
                className="form-select px-3 py-2 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer"
                name="phonePrefix"
                value={formData.phonePrefix}
                onChange={handleSelectChange}
              >
               <option value="">مفتاح الدوله</option>
               <option value="+962">+962 </option>
               <option value="+966">+966 </option>
               <option value="+20">+20 </option>
               <option value="+971">+971 </option>
               <option value="+965">+965 </option>
               <option value="+974">+974 </option>
               <option value="+973">+973 </option>
               <option value="+968">+968 </option>
               <option value="+218">+218 </option>
               <option value="+961">+961 </option>
               <option value="+963">+963 </option>
               <option value="+964">+964 </option>
               <option value="+212">+212 </option>
               <option value="+216">+216 </option>
               <option value="+213">+213 </option>
               <option value="+249">+249 </option>
               <option value="+253">+253 </option>
               <option value="+252">+252 </option>
               <option value="+222">+222 </option>
               <option value="+970">+970 </option>
               <option value="+269">+269  </option>
              </select>
              <input
                type="text"
                name="fonNum"
                className="w-full px-3 py-2 ml-2 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                placeholder="رقم الهاتف"
                value={formData.fonNum}
                onChange={handleInputChange}
              />
            </div>
          </div>

          
          <div className="mb-3">
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="paymentMethod"
                value="بطاقه ائتمانيه"
                checked={formData.paymentMethod === 'بطاقه ائتمانيه'}
                onChange={handleInputChange}
              />
              <img src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png" className="h-8 ml-3" alt="بطاقة ائتمان" />
            </label>
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="paymentMethod"
                value="باي بال"
                checked={formData.paymentMethod === 'باي بال'}
                onChange={handleInputChange}
              />
              <img src="https://www.sketchappsources.com/resources/source-image/PayPalCard.png" className="h-8 ml-3" alt="باي بال" />
            </label>
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="paymentMethod"
                value="نقدا"
                checked={formData.paymentMethod === 'نقدا'}
                onChange={handleInputChange}
              />
              $$ نقدا
            </label>
          </div>

          
          <label className="block font-bold text-sm mb-1">الاسم على البطاقة</label>
          <input
            type="text"
            name="nameOfCard"
            placeholder="abdullah ghanem"
            className="w-full border-2 border-gray-200 rounded-md p-2 mb-3 focus:border-indigo-500"
            value={formData.nameOfCard}
            onChange={handleInputChange}
          />

          
          <label className="block font-bold text-sm mb-1">رقم البطاقة</label>
          <input
            type="text"
            name="numOfCard"
            placeholder="0000 0000 0000 0000"
            className="w-full border-2 border-gray-200 rounded-md p-2 mb-3 focus:border-indigo-500"
            value={formData.numOfCard}
            onChange={handleInputChange}
          />

          
          <div className="flex gap-3">
            <div className="w-1/2">
              <label className="block font-bold text-sm mb-1">تاريخ الانتهاء</label>
              <select
                name="expiryMonth"
                className="w-full border-2 border-gray-200 rounded-md p-2 focus:border-indigo-500"
                value={formData.expiryMonth}
                onChange={handleSelectChange}
              >
                {[...Array(12)].map((_, i) => (
                  <option key={i} value={i + 1}>
                    {String(i + 1).padStart(2, '0')}
                  </option>
                ))}
              </select>
            </div>
            <div className="w-1/2">
              <label className="block font-bold text-sm mb-1">السنة</label>
              <select
                name="expiryYear"
                className="w-full border-2 border-gray-200 rounded-md p-2 focus:border-indigo-500"
                value={formData.expiryYear}
                onChange={handleSelectChange}
              >
                {[...Array(10)].map((_, i) => (
                  <option key={i} value={2025 + i}>
                    {2025 + i}
                  </option>
                ))}
              </select>
            </div>
          </div>

          
          <label className="block font-bold text-sm mt-3 mb-1">رمز الأمان</label>
          <input
            type="text"
            name="securityCode"
            placeholder="000"
            className="w-1/2 border-2 border-gray-200 rounded-md p-2 mb-3 focus:border-indigo-500"
            value={formData.securityCode}
            onChange={handleInputChange}
          />

          
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-md mt-6"
          >
            دفع الآن
          </button>
        </div>
      </div>
    </form>
  );
}
