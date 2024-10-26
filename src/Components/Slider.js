import React, { useState } from "react";
import { FaGreaterThan, FaLessThan } from "react-icons/fa"; // Import the icons
import "./Slider.css"; // Import the CSS file for styling

const testimonials = [
    {
        name: "Maria Kate",
        role: "Photographer",
        text: "This is an amzazing Website and The Service od this company is very good.",
    },
    {
        name: "John Doe",
        role: "Web Developer",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus et deleniti nesciunt sint eligendi reprehenderit reiciendis. onsectetur adipisicing elit. Minus et deleniti nesciunt sint eligendi reprehenderit reiciendis",
    },
    {
        name: "Anna Deynah",
        role: "Web Developer",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus et deleniti nesciunt sint eligendi reprehenderit reiciendis.",
    },
];

const Slider = () => {
    const [current, setCurrent] = useState(0);
    const totalTestimonials = testimonials.length;

    const nextTestimonial = () => {
        setCurrent((prev) => (prev + 1) % totalTestimonials);
    };

    const prevTestimonial = () => {
        setCurrent((prev) => (prev - 1 + totalTestimonials) % totalTestimonials);
    };

    return (
        <div className="testimonial-slider mt-5">
            <div className="button-container">
                <button onClick={prevTestimonial} className="nav-button">
                    <FaLessThan className="icon" />
                </button>
                <div className="testimonial">
                    <p className="testimonial-text fs-5 mb-3">{testimonials[current].text}</p>
                    <h3>~ <i>{testimonials[current].name} ~</i></h3>
                   
                </div>
                <button onClick={nextTestimonial} className="nav-button">
                    <FaGreaterThan className="icon" />
                </button>
            </div>
        </div>
    );
};

export default Slider;
