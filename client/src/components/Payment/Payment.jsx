import axios from 'axios';
import React, { useState } from 'react';


export default function Payment() {

    const countries = [
        "الأردن", "السعودية", "الإمارات", "مصر", "الكويت", "البحرين",
        "قطر", "عمان", "لبنان", "المغرب", "الجزائر", "تونس",
        "العراق", "اليمن", "السودان", "سوريا", "ليبيا", "فلسطين"
    ];


    const phonePrefixes = [
        { code: "+962", country: "الأردن" },
        { code: "+966", country: "السعودية" },
        { code: "+20", country: "مصر" },
        { code: "+971", country: "الإمارات" },
        { code: "+965", country: "الكويت" },
        { code: "+974", country: "قطر" },
        { code: "+973", country: "البحرين" },
        { code: "+968", country: "عمان" },
        { code: "+218", country: "ليبيا" },
        { code: "+961", country: "لبنان" },
        { code: "+963", country: "سوريا" },
        { code: "+964", country: "العراق" },
        { code: "+212", country: "المغرب" },
        { code: "+216", country: "تونس" },
        { code: "+213", country: "الجزائر" },
        { code: "+249", country: "السودان" },
        { code: "+253", country: "جيبوتي" },
        { code: "+252", country: "الصومال" },
        { code: "+222", country: "موريتانيا" },
        { code: "+970", country: "فلسطين" },
        { code: "+269", country: "جزر القمر" }
    ];


    const donationOptions = {
        sadaqahJariyah: "صدقه جاريه",
        zakatMal: "زكاة مال",
        ventilator: "جهاز التنفس الصناعي",
        dialysisMachine: "جهاز غسيل الكلى",
        glucoseMonitor: "جهاز فحص السكر",
        bloodPressureMonitor: "جهاز فحص الضغط",
        otherDevices: "اجهزه اخرى",
        catheterization: "عملية قسطره",
        openHeartSurgery: "عملية قلب مفتوح",
        otherSurgeries: "عمليات اخرى",
        patientBed: "سرير لمريض",
        other: "اخرى"
    };


    const [Program, setProgram] = useState("");
    const [email, setEmail] = useState("");
    const [Country, setCountry] = useState("");
    const [PhoneNum, setPhoneNum] = useState(0);
    const [phonePrefix, setPhonePrefix] = useState("");
    const [paymentMethod, setPaymentMethod] = useState("");
    const [nameOfCard, setNameOfCard] = useState("");
    const [numOfCard, setNumOfCard] = useState("");
    const [month, setMonth] = useState("");
    const [year, setYear] = useState("");
    const [code, setCode] = useState("");







    const handleSubmit = async(e) => {
        e.preventDefault();
        // console.log(code);
        const body = { email:email , code:code , program:Program , Country:Country ,
            PhoneNum:PhoneNum , phonePrefix:phonePrefix , paymentMethod:paymentMethod ,
            nameOfCard:nameOfCard , numOfCard:numOfCard , month:month , year:year 
         };
        try {
            const response = await axios.post("http://localhost:5000/payment/newPayment", body);
            const data = response.data;
            alert("تم الدفع بنجاح ✅ ")
      

        }
        catch (error) {
            console.log("Error payment", error);
        }

    }





    return (
<>

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
                            // value={Program}
                            onChange={(e) => setProgram(e.target.value)}
                        // onChange={handleSelectChange}
                        >
                            {Object.entries(donationOptions).map(([key, value]) => (
                                <option key={key} value={value}>{value}</option>
                            ))}
                        </select>

                    </div>


                    <div className="mb-3">
                        <label className="font-bold text-sm mb-2 ml-1">البريد الإلكتروني</label>
                        <input
                            className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                            type="email"
                            name="email"
                            placeholder="example@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        // onChange={handleInputChange}
                        />
                    </div>




                    <div className="mb-3">
                        <label className="font-bold text-sm mb-2 ml-1">الدوله</label>
                        <select
                            className="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer"
                            name="selectedCountry"
                            // value={Country}
                            onChange={(e) => setCountry(e.target.value)}
                        // onChange={handleSelectChange}
                        >
                            <option value="">أختر دولتك</option>
                            {countries.map((country) => (
                                <option key={country} value={country}>{country}</option>
                            ))}
                        </select>
                    </div>




                    <div className="mb-3">
                        <label className="font-bold text-sm mb-2 ml-1">رقم الهاتف</label>
                        <div className="flex">
                            <select
                                className="form-select px-3 py-2 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer"
                                name="phonePrefix"
                                // value={phonePrefix}
                                onChange={(e) => setPhonePrefix(e.target.value)}
                            // onChange={handleSelectChange}
                            >
                                <option value="">مفتاح الدولة</option>
                                {phonePrefixes.map((prefix) => (
                                    <option key={prefix.code} value={prefix.code}>
                                        {prefix.code} - {prefix.country}
                                    </option>
                                ))}
                            </select>

                            <input
                                type="text"
                                name="fonNum"
                                className="w-full px-3 py-2 ml-2 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                                placeholder="رقم الهاتف"
                                value={PhoneNum}
                                onChange={(e) => setPhoneNum(e.target.value)}
                            />
                        </div>
                    </div>




                    <div className="mb-3">
                        <label className="flex items-center cursor-pointer">
                            <input
                                type="radio"
                                name="paymentMethod"
                                value="بطاقه ائتمانيه"
                                checked={paymentMethod === 'بطاقه ائتمانيه'}
                                onChange={(e) => setPaymentMethod(e.target.value)}
                            // onChange={handleInputChange}
                            />
                            <img src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png" className="h-8 ml-3" alt="بطاقة ائتمان" />
                        </label>
                        <label className="flex items-center cursor-pointer">
                            <input
                                type="radio"
                                name="paymentMethod"
                                value="باي بال"
                                checked={paymentMethod === 'باي بال'}
                                onChange={(e) => setPaymentMethod(e.target.value)}
                            // onChange={handleInputChange}
                            />
                            <img src="https://www.sketchappsources.com/resources/source-image/PayPalCard.png" className="h-8 ml-3" alt="باي بال" />
                        </label>
                        <label className="flex items-center cursor-pointer">
                            <input
                                type="radio"
                                name="paymentMethod"
                                value="نقدا"
                                checked={paymentMethod === 'نقدا'}
                                onChange={(e) => setPaymentMethod(e.target.value)}
                            // onChange={handleInputChange}
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
                        value={nameOfCard}
                        onChange={(e) => setNameOfCard(e.target.value)}
                    // onChange={handleInputChange}
                    />



                    <label className="block font-bold text-sm mb-1">رقم البطاقة</label>
                    <input
                        type="text"
                        name="numOfCard"
                        placeholder="0000 0000 0000 0000"
                        className="w-full border-2 border-gray-200 rounded-md p-2 mb-3 focus:border-indigo-500"
                        value={numOfCard}
                        onChange={(e) => setNumOfCard(e.target.value)}
                    // onChange={handleInputChange}
                    />



                    <div className="flex gap-3">
                        <div className="w-1/2">
                            <label className="block font-bold text-sm mb-1">تاريخ الانتهاء</label>
                            <select
                                name="expiryMonth"
                                className="w-full border-2 border-gray-200 rounded-md p-2 focus:border-indigo-500"
                                // value={month}
                                onChange={(e) => setMonth(e.target.value)}
                            // onChange={handleSelectChange}
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
                                // value={year}
                                onChange={(e) => setYear(e.target.value)}
                            // onChange={handleSelectChange}
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
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
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

        </>
    );
}
