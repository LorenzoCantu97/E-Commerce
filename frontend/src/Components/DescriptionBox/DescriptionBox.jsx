import React from "react";
import './DescriptionBox.css';

export const DescriptionBox = () => {
    return (
        <div className="descriptionbox">
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">
                    Description
                </div>
                <div className="descriptionbox-nav-box fade">
                    Reviews (122)
                </div>
            </div>
            <div className="descriptionbox-description">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis voluptate temporibus quibusdam aspernatur necessitatibus neque voluptatum ex velit similique fuga quod praesentium, accusantium ipsum vero molestiae ipsam distinctio illo voluptatem!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eius nobis ducimus culpa inventore molestiae repellat sunt iure sit dolor, provident eum voluptatem iste porro quaerat fugiat? Perspiciatis, blanditiis voluptates.</p>
            </div>
        </div>
    );
};