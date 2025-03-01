

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const UserProfile = () => {
  const userId = useSelector((state) => state.user.id);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    user_type: "",
  });
  const [originalData, setOriginalData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (userId) {
      fetchUserData();
    }
  }, [userId]);

  const fetchUserData = async () => {
    const controller = new AbortController();
    const signal = controller.signal;
  
    try {
      const response = await axios.get(`http://localhost:5000/api/users/profile/${userId}`, { signal });
  
      console.log("User Data:", response.data);
  
      if (response.data.user) {
        setUserData({
          name: response.data.user.name,
          email: response.data.user.email,
          user_type: response.data.user.user_type,
          donations: response.data.donations || [],
          transactions: response.data.transactions || [],
          requests: response.data.requests || [],
        });
      }
    } catch (err) {
      if (err.name !== "AbortError") {
        setError("فشل في تحميل بيانات المستخدم");
        console.error(err);
      }
    } finally {
      setLoading(false);
    }
  
    return () => controller.abort();
  };
  
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    if (!isEditing) return;
    try {
      const response = await axios.put(`http://localhost:5000/api/users/profile/${userId}`, userData);
      setUserData(response.data);
      setIsEditing(false);
      alert("تم تحديث الملف الشخصي بنجاح!");
    } catch (err) {
      setError("فشل في تحديث بيانات المستخدم");
      console.error(err);
    }
  };

  const handleEditClick = () => {
    setOriginalData(userData);
    setIsEditing(true);
  };

  if (loading) return (
    <div className="flex justify-center items-center h-64">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-pink-600"></div>
    </div>
  );
  
  if (error) return (
    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative text-right" role="alert">
      <strong className="font-bold">خطأ! </strong>
      <span className="block sm:inline">{error}</span>
    </div>
  );

  const getUserTypeArabic = (type) => {
    switch(type) {
      case "donor": return "متبرع";
      case "beneficiary": return "مستفيد";
      default: return type;
    }
  };

  return (
    <div dir="rtl" className="max-w-4xl mx-auto px-4 py-8 font-sans">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-gradient-to-l from-purple-700 to-pink-600 text-white p-6">
          <h2 className="text-2xl font-bold text-center">الملف الشخصي</h2>
        </div>
        
        {userData && (
          <div className="p-6">
            <div className="flex flex-col md:flex-row md:items-center mb-6 gap-4">
              <div className="flex items-center justify-center md:ml-4">
                <div className="w-24 h-24 rounded-full bg-gradient-to-l from-purple-600 to-pink-500 flex items-center justify-center text-white text-3xl font-bold">
                  {userData.name ? userData.name.charAt(0).toUpperCase() : "م"}
                </div>
              </div>
              
              <div className="flex-1 text-center md:text-right">
                <h3 className="text-xl font-bold text-gray-800">{userData.name || "المستخدم"}</h3>
                <p className="text-gray-600">{userData.email || ""}</p>
                <span className="inline-block px-3 py-1 mt-2 bg-gradient-to-l from-purple-600 to-pink-500 text-white text-sm rounded-full">
                  {getUserTypeArabic(userData.user_type)}
                </span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="col-span-1">
                <label className="block text-gray-700 font-bold mb-2">الاسم:</label>
                <input 
                  type="text" 
                  name="name" 
                  value={userData.name || ""} 
                  onChange={handleChange} 
                  disabled={!isEditing}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none text-right ${isEditing ? "focus:ring-2 focus:ring-pink-500 border-gray-300" : "bg-gray-100 border-gray-200"}`}
                />
              </div>
              
              <div className="col-span-1">
                <label className="block text-gray-700 font-bold mb-2">البريد الإلكتروني:</label>
                <input 
                  type="email" 
                  name="email" 
                  value={userData.email || ""} 
                  onChange={handleChange} 
                  disabled={!isEditing}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none text-right ${isEditing ? "focus:ring-2 focus:ring-pink-500 border-gray-300" : "bg-gray-100 border-gray-200"}`} 
                />
              </div>
              
              <div className="col-span-1">
                <label className="block text-gray-700 font-bold mb-2">نوع المستخدم:</label>
                <input 
                  type="text" 
                  name="user_type" 
                  value={getUserTypeArabic(userData.user_type) || ""} 
                  disabled
                  className="w-full px-4 py-2 bg-gray-100 border border-gray-200 rounded-lg text-right" 
                />
              </div>
            </div>
            
            <div className="flex justify-center space-x-4 space-x-reverse mb-8">
              {isEditing ? (
                <>
                  <button 
                    onClick={() => { setUserData(originalData); setIsEditing(false); }}
                    className="px-6 py-2 bg-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-300 transition duration-200 ml-4"
                  >
                    إلغاء
                  </button>
                  <button 
                    onClick={handleUpdate}
                    className="px-6 py-2 bg-gradient-to-l from-purple-700 to-pink-600 text-white font-medium rounded-lg hover:opacity-90 transition duration-200"
                  >
                    حفظ التغييرات
                  </button>
                </>
              ) : (
                <button 
                  onClick={handleEditClick}
                  className="px-6 py-2 bg-gradient-to-l from-purple-700 to-pink-600 text-white font-medium rounded-lg hover:opacity-90 transition duration-200"
                >
                  تعديل الملف الشخصي
                </button>
              )}
            </div>
            
            {/* عرض تفاصيل المتبرع */}
            {userData.user_type === "donor" && (
              <div className="border-t border-gray-200 pt-6">
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-4 text-purple-800">التبرعات</h3>
                  {userData.donations && userData.donations.length > 0 ? (
                    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                      <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                          <thead className="bg-gray-50">
                            <tr>
                              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">رقم التبرع</th>
                              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">الحالة</th>
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-gray-200">
                            {userData.donations.map((donation) => (
                              <tr key={donation.donation_id} className="hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{donation.donation_id}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                                    ${donation.status === "completed" ? "bg-green-100 text-green-800" : 
                                      donation.status === "pending" ? "bg-yellow-100 text-yellow-800" : 
                                      "bg-gray-100 text-gray-800"}`}>
                                    {donation.status === "completed" ? "مكتمل" : 
                                     donation.status === "pending" ? "قيد الانتظار" : 
                                     donation.status}
                                  </span>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  ) : (
                    <p className="text-gray-500 text-center py-4 bg-gray-50 rounded-lg">لا توجد تبرعات حتى الآن.</p>
                  )}
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-4 text-purple-800">المعاملات المالية</h3>
                  {userData.transactions && userData.transactions.length > 0 ? (
                    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                      <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                          <thead className="bg-gray-50">
                            <tr>
                              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">رقم المعاملة</th>
                              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">المبلغ</th>
                              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">الحالة</th>
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-gray-200">
                            {userData.transactions.map((transaction) => (
                              <tr key={transaction.transaction_id} className="hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{transaction.transaction_id}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{transaction.amount}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                                    ${transaction.status === "completed" ? "bg-green-100 text-green-800" : 
                                      transaction.status === "pending" ? "bg-yellow-100 text-yellow-800" : 
                                      "bg-gray-100 text-gray-800"}`}>
                                    {transaction.status === "completed" ? "مكتمل" : 
                                     transaction.status === "pending" ? "قيد الانتظار" : 
                                     transaction.status}
                                  </span>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  ) : (
                    <p className="text-gray-500 text-center py-4 bg-gray-50 rounded-lg">لا توجد معاملات مالية حتى الآن.</p>
                  )}
                </div>
              </div>
            )}
            
            {/* عرض تفاصيل المستفيد */}
            {userData.user_type === "beneficiary" && (
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-xl font-bold mb-4 text-purple-800">الطلبات</h3>
                {userData.requests && userData.requests.length > 0 ? (
                  <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">رقم الطلب</th>
                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">العنصر</th>
                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">الحالة</th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {userData.requests.map((request) => (
                            <tr key={request.request_id} className="hover:bg-gray-50">
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{request.request_id}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{request.item_name}</td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                                  ${request.status === "approved" ? "bg-green-100 text-green-800" : 
                                    request.status === "pending" ? "bg-yellow-100 text-yellow-800" : 
                                    request.status === "rejected" ? "bg-red-100 text-red-800" :
                                    "bg-gray-100 text-gray-800"}`}>
                                  {request.status === "approved" ? "موافق عليه" : 
                                   request.status === "pending" ? "قيد الانتظار" : 
                                   request.status === "rejected" ? "مرفوض" :
                                   request.status}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ) : (
                  <p className="text-gray-500 text-center py-4 bg-gray-50 rounded-lg">لا توجد طلبات حتى الآن.</p>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;