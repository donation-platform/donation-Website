import React from 'react';
import { Link } from 'react-router-dom';

function AboutSection() {
  return (
    <section className="py-24 relative xl:mr-0 lg:mr-5 mr-0" style={{ fontFamily: "'IBM Plex Sans Arabic', sans-serif"}}>
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
          {/* Left Column: Content */}
          <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
            <div className="w-full flex-col justify-center items-start gap-8 flex">
              <div className="flex-col justify-start lg:items-start items-center gap-4 flex">
                <h6 className="text-gray-400 text-base font-normal leading-relaxed">من نحن</h6>
                <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                  <h2
                    className="text-[#E3007E] text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                    أفق – بوابتك للخير، حيث يلتقي العطاء بالحاجة
                  </h2>
                  <p
                    className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                   نؤمن بأن كل إنسان يستحق فرصة للحياة بصحة وكرامة، ولهذا وُجدت "أفق" – منصة تبرعات تسهّل وصول المساعدات المالية لتوفير الأجهزة والمعدات الطبية للمحتاجين.
                  </p>
                </div>
              </div>
              <div className="w-full flex-col justify-center items-start gap-6 flex">
                {/* Statistics Grid */}
                <div className="w-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                  {/* Years of Experience */}
                  <div
                    className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                    <h4 className="text-[#662480] text-2xl font-bold font-manrope leading-9">10+ سنوات</h4>
                    <p className="text-gray-500 text-base font-normal leading-relaxed">من التأثير في مجال التبرع الطبي</p>
                  </div>
                  {/* Completed Projects */}
                  <div
                    className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                    <h4 className="text-[#662480] text-2xl font-bold font-manrope leading-9">500+ مشروع</h4>
                    <p className="text-gray-500 text-base font-normal leading-relaxed">تم إنجازها بنجاح</p>
                  </div>
                </div>
                <div className="w-full h-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                  {/* Awards */}
                  <div
                    className="w-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                    <h4 className="text-[#662480] text-2xl font-bold font-manrope leading-9">20+ جائزة</h4>
                    <p className="text-gray-500 text-base font-normal leading-relaxed">لابتكاراتنا في التبرع الطبي</p>
                  </div>
                  {/* Happy Clients */}
                  <div
                    className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                    <h4 className="text-[#662480] text-2xl font-bold font-manrope leading-9">99% عملاء سعداء</h4>
                    <p className="text-gray-500 text-base font-normal leading-relaxed">يعكس تركيزنا على رضا العملاء</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Read More Button */}
            <Link to="/About"
              className="sm:w-fit w-full group px-3.5 py-2 bg-[#E3007E] hover:bg-[#C9006E] rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out justify-center items-center flex">
              <span
                className="px-1.5 text-white text-sm font-medium leading-6 group-hover:-translate-x-0.5 transition-all duration-700 ease-in-out">
                اقرأ المزيد
              </span>
              <svg className="group-hover:translate-x-0.5 transition-all duration-700 ease-in-out"
                xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M6.75265 4.49658L11.2528 8.99677L6.75 13.4996" stroke="white" stroke-width="1.6"
                  stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </Link>
          </div>

          {/* Right Column: Image */}
          <div className="w-full lg:justify-start justify-center items-start flex">
            <div
              className="sm:w-[564px] w-full sm:h-[646px] h-full sm:bg-gray-100 rounded-3xl sm:border border-gray-200 relative">
              <img className="sm:mt-5 sm:ml-5 w-full h-full rounded-3xl object-cover"
                src="https://i.pinimg.com/736x/18/07/eb/1807eb01bd0d416c81aa8d24817333a6.jpg" alt="صورة عنا" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;