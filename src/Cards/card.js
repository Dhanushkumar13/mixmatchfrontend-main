import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; 

function Box({data = {}}) {
    const [isCollapsed, setCollapsed] = useState(true);

    return (
        <div className="accordion accordion-flush" id="accordionFlushExample">
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button
                        className={`accordion-button ${isCollapsed ? '' : 'collapsed'}`}
                        type="button"
                        onClick={() => setCollapsed(!isCollapsed)}
                    >
                        {data.dayName}
                    </button>
                </h2>
                <div
                    className={`accordion-collapse collapse ${isCollapsed ? '' : 'show'}`}
                    data-bs-parent="#accordionFlushExample"
                >
                    <div className="accordion-body">{data.dayDescription}</div>
                    <div className="img-container">
                            <div id="carouselExampleIndicators" className="carousel slide">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                <img src={data.dayDressImage[0]} className="d-block w-100" alt="..."></img>
                                </div>
                                <div className="carousel-item">
                                <img src={data.dayDressImage[1]} className="d-block w-100" alt="..."></img>
                                </div>
                                <div className="carousel-item">
                                <img src={data.dayDressImage[2]} className="d-block w-100" alt="..."></img>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="false"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="false"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                            </div>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Box;