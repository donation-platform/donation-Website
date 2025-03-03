import React, { useEffect, useState } from "react";
import "./Donations.css";
import axios from "axios";

const Donations = () => {
    const [donations, setDonations] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        axios.get("http://localhost:5000/api/requests/donations")
            .then(response => {
                const approvedDonations = response.data.filter(donation => donation.status === "approved");
                setDonations(approvedDonations);
            })
            .catch(error => {
                console.error("Error fetching donations:", error);
            });
    }, []);

    const filteredDonations = donations.filter(donation => 
        donation.toolName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
            {/* Hero Section */}
            <div className="heroSection"> 
                <video
                    className="herovideo"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src="https://videos.pexels.com/video-files/8400788/8400788-sd_640_360_25fps.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="herooverl"></div>
                <div className="heroContent">
                    <h1 className="herosubtitle">التبرع هو باب للخير، كن جزءًا من رحلة العطاءمع   <span>  أُفُق الخير.</span></h1>
                </div>
            </div>

            {/* Donations Section */}
            <div className="w-layout-blockcontainer containerwhite wcontainer">
                <div className="content-div">
                    <div className="heading-div">
                        <h1 className="heading-280">خيارات التـبرع:</h1>
                        <div class="InputContainer">
                        <input 
                            type="text" 
                            placeholder="ابحث عن أداة" 
                            id="input"
                            className="input"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        </div>
                      
                    </div>
                    <div className="grid-div">
                        <div className="w-dyn-list">
                            <div role="list" className="collection-list-17 w-dyn-items">
                                {filteredDonations.length > 0 ? (
                                    filteredDonations.map((donation, index) => (
                                        <div key={index} role="listitem" className="w-dyn-item">
                                            <div className="cat-div">
                                                <div className="img-div">
                                                    <img
                                                        src={donation.medicalEquipment 
                                                            ? `http://localhost:5000/${donation.medicalEquipment.replace("\\", "/")}`
                                                            : "https://via.placeholder.com/150"} 
                                                        loading="lazy"
                                                        alt={donation.organizationName || "صورة التبرع"}
                                                    />
                                                </div>
                                                <div className="div-block-189">
                                                    <div className="div-block-190">
                                                        <div className="link-block-5 w-inline-block">
                                                            <div className="text-block-111">{donation.organizationName}</div>
                                                            <div className="text-block-222">{donation.toolName}</div>
                                                        </div> 
                                                    </div>
                                                    <div className="div-block-191">
                                                        <a href={`/donation-details/${donation.id}`} className="button-6 w-button">
                                                            المزيد
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <p className="text-gray-500">لا توجد تبرعات متاحة حاليًا.</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Donations;
