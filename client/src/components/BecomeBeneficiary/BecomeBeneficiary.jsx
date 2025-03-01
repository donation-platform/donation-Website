import React, { useState } from "react";


export default function BecomeBeneficiary() {
    const [formData, setFormData] = useState({
        organizationName: "",
        organizationAddress: "",
        phone: "",
        email: "",
        contactPerson: "",
        contactPhone: "",
        toolName: "",
        medicalEquipment: "",
        quantity: "",
        estimatedCost: "",
        proofDocument: null,
        agreement: false,
        hasFundraisingLicense: "",
        status:"pending"
    });

    const handleChange = (e) => {
        const { name, value, type, checked, files } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === "checkbox" ? checked : type === "file" ? files[0] : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

        
    return (
        <section className="flex flex-col items-start justify-center " style={{  fontFamily: "'IBM Plex Sans Arabic', sans-serif"}}>
        {/* Container 50 */}
        <div className="w-full max-w-3xl p-6 pr-16 " style={{ marginRight: '200px',  marginBottom: '30px' }}>
          <div>
            <h1 className="text-2xl font-bold text-right " style={{  color:'#662480' }}>
              انضم إلى <span style={{  color:'#E3007E'}}>أُفُق الخير</span>  
            </h1>
            <div className="text-m text-right text-gray-600 mt-2">
            أُفُق الخير هي همزة الوصل والشريك التسويقي لأكثر من ١٢٠ منظمة و مؤسسة خيرية في الاردن.
            </div>
          </div>
        </div>
        
        {/* Join Form */}
        <div className="w-[1000px] mx-auto p-8 bg-white shadow-lg rounded-lg border border-gray-200 ">
            <div style={{   marginBottom: '70px' }}>
                    <h2 className="text-2xl font-bold mb-6 text-center" style={{  color:'#662480' }}> طلب شراكة مع أُفُق  </h2>
                    <p className="text-center text-gray-600 mb-4">يرجى ملئ البيانات التالية وسنقوم بالتواصل معك في حالة الموافقة على طلبك</p>

                    </div>
                    <form onSubmit={handleSubmit} className="space-y-6">
        
                        {/* معلومات المنظمة */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block mb-1 font-semibold flex " style={{  color:'#662480' }}>اسم المنظمة:</label>
                                <input type="text" name="organizationName" value={formData.organizationName} onChange={handleChange} className="w-full p-3 border border-gray-400 rounded-md bg-white focus:ring-2 focus:ring-purple-500" required />
                            </div>
                            <div>
                                <label className="block mb-1 font-semibold flex " style={{  color:'#662480' }}>عنوان المنظمة:</label>
                                <input type="text" name="organizationAddress" value={formData.organizationAddress} onChange={handleChange} className="w-full p-3 border border-gray-400 rounded-md bg-white focus:ring-2 focus:ring-purple-500" required />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block mb-1 font-semibol flex " style={{  color:'#662480' }}>رقم الهاتف:</label>
                                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full p-3 border border-gray-400 rounded-md bg-white focus:ring-2 focus:ring-purple-500" required />
                            </div>
                            <div>
                                <label className="block mb-1 font-semibold flex " style={{  color:'#662480' }}>البريد الإلكتروني:</label>
                                <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-3 border border-gray-400 rounded-md bg-white focus:ring-2 focus:ring-purple-500" required />
                            </div>
                        </div>
        
                        {/* تفاصيل الاحتياج */}
                        <div>
                                <label className="block mb-1 font-semibold flex " style={{  color:'#662480' }}>اسم الاداة الطبية المتبرع بها:</label>
                                <input type="text" name="toolName" value={formData.toolName} onChange={handleChange} className="w-full p-3 border border-gray-400 rounded-md bg-white focus:ring-2 focus:ring-purple-500" required />
                            </div>
                        <div>
                         <label className="block mb-1 font-semibold flex " style={{  color:'#662480' }}>صورة للأداة الطبية المطلوبة:</label>
                        <input 
                         type="file" 
                         name="medicalEquipment" 
                         accept="image/*" 
                        onChange={handleChange} 
                        className="w-full p-3 border border-gray-400 rounded-md bg-white focus:ring-2 focus:ring-purple-500 text-gray-600" 
                      
                      required 
                       />
                     </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block mb-1 font-semibold flex " style={{  color:'#662480' }}>الكمية المطلوبة:</label>
                                <input type="number" name="quantity" value={formData.quantity} onChange={handleChange} className="w-full p-3 border border-gray-400 rounded-md bg-white focus:ring-2 focus:ring-purple-500 text-gray-600" required />
                            </div>
                            <div>
                                <label className="block mb-1 font-semibold flex " style={{  color:'#662480' }}>التكلفة التقديرية:</label>
                                <input type="number" name="estimatedCost" value={formData.estimatedCost} onChange={handleChange} className="w-full p-3 border border-gray-400 rounded-md bg-white focus:ring-2 focus:ring-purple-500 text-gray-600" required />
                            </div>
                        </div>
        
                        {/* سؤال عن ترخيص جمع المال */}
                        <div>
                            <label className="block mb-1 font-semibold flex " style={{  color:'#662480' }}>هل لدى المنظمة ترخيص جمع مال حالي / ساري؟</label>
                            <select name="hasFundraisingLicense" 
                            value={formData.hasFundraisingLicense} onChange={handleChange}
                             className=" w-full p-3 border border-gray-400 rounded-md bg-white focus:ring-2 focus:ring-purple-500 text-gray-600" 
                             required>
                                <option  value="">هل المنظمة او المؤسسة مسجلة ؟</option>
                                <option value="yes">نعم</option>
                                <option value="no">لا</option>
   
                         </select>
                            
                        </div>
        
                        {/* رفع إثبات الحاجة */}
                        <div>
                            <label className="block mb-1 font-semibold flex " style={{  color:'#662480' }}>ترخيص جمع المال للوجوه الخيرية:</label>
                            <input  type="file"
                             name="proofDocument" 
                             accept=".pdf,.jpg,.png" 
                             onChange={handleChange} 
                             className="w-full p-3 border border-gray-400 rounded-md bg-white focus:ring-2 focus:ring-purple-500 text-gray-600" 
                              required />
                        </div>
        
                        {/* الموافقة على الشروط */}
                        <div className="flex items-center" >
                            <input type="checkbox" 
                            name="agreement" 
                            checked={formData.agreement} onChange={handleChange}
                             className="mr-2" 
                             required />
                            <label className="text-gray-600 mr-2">أوافق على الشروط والأحكام</label>
                        </div>
<button 
    type="submit" 
    className="  w-40 bg-pink-600 text-white py-3 px-6  hover:bg-[#662480] transition"
    style={{ borderRadius: "18px 0 18px 18px" }}>
    إرسال
</button>
                    </form>
                </div>
        </section> 
    );
}



        
                        {/* <div className="flex ">
    <button className="w-40 h-12 bg-white cursor-pointer rounded-3xl border-2 border-[#E3007E] shadow-[inset_0px_-2px_0px_1px_#E3007E] group hover:bg-[#E3007E] transition duration-300 ease-in-out">
        <span className="font-medium text-[#333] group-hover:text-white">إرسال</span>
    </button>
</div> */}

