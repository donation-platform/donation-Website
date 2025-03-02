import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Footer from '../Footer/Footer';

export default function DonationDetails() {
    const id = "53c6b4e4-4d74-4d7f-bd2f-b3fca0e417c8";  // Get id from URL
    const [request, setRequest] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRequest = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/details/${id}`);
                setRequest(response.data);
                setLoading(false);
            } catch (err) {
                console.error("Error fetching request:", err);
                setError("Error fetching campaign details.");
                setLoading(false);
            }
        };

        fetchRequest();
    }, [id]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <>
            <div className="bg-white min-h-screen" style={{ fontFamily: "'IBM Plex Sans Arabic', sans-serif" }}>
                <header className="bg-[#662480] text-white py-6 text-center">
                    <h1 className="text-3xl font-bold">تفاصيل الحملة</h1>
                </header>

                <div className="container mx-auto px-4 py-8">
                    <div className="mb-8">
                        <img
                            src="https://i.extremetech.com/imagery/content-types/05worLBI9Nf9qoKMGXNr5Kc/hero-image.jpg"
                            alt="Campaign Image"
                            className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
                        />
                    </div>

                    <div className="px-20">
                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
                            <div className="flex-1">
                                <h2 className="text-2xl font-bold text-[#E3007E] mb-4">
                                    عنوان الحملة: {request.toolName}
                                </h2>
                                <p className="text-gray-700">
                                    {request.description}
                                </p>
                            </div>

                            <div className="mb-4 md:mb-0 md:mr-6">
                                <button className="rounded-tl-[18px] rounded-br-[18px] bg-[#662480] text-white px-4 py-2 rounded-md hover:bg-[#E3007E] transition-colors duration-200">
                                    تبرع الآن
                                </button>
                            </div>
                        </div>

                        <div className="mb-8 bg-gray-100 p-6 rounded-lg shadow-sm">
                            <h3 className="text-xl font-bold text-[#662480] mb-4">تقدم الحملة</h3>
                            <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
                                <div
                                    className="bg-[#E3007E] h-4 rounded-full"
                                    style={{ width: `${(request.amount_raised / request.estimatedCost) * 100}%` }}
                                ></div>
                            </div>
                            <div className="flex justify-between text-gray-700">
                                <p>المبلغ المطلوب: {request.estimatedCost} ريال</p>
                                <p>المبلغ المجموع: {request.amount_raised} ريال</p>
                            </div>
                        </div>

                        <div className="mb-8">
                            <h3 className="text-xl font-bold text-[#662480] mb-4">معلومات المستفيد</h3>
                            <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
                                <p className="text-gray-700"><strong>اسم المستفيد:</strong> {request.organizationName}</p>
                                <p className="text-gray-700 mt-2"><strong>العنوان:</strong> {request.organizationAddress}</p>
                                <p className="text-gray-700 mt-2"><strong>رقم الهاتف:</strong> {request.phone}</p>
                                <p className="text-gray-700 mt-2"><strong>البريد الإلكتروني:</strong> {request.email}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
