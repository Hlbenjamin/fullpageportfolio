import React, { Component } from 'react';
import VisibilitySensor from "react-visibility-sensor";

class Circle extends Component {
    state = {  }
    render() { 
        return ( 
            <div class="circle-wrapper">
            <div class="flex-wrapper">
                <div class="single-chart">
                    <svg viewBox="0 0 36 36" class="circular-chart">
                    <path class="circle-bg"
                        d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <VisibilitySensor partialVisibility={true}>
                    {({ isVisible }) => (
                    <path className={isVisible ? "circle active" : "circle"}
                        stroke-dasharray="75, 100"
                        d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                    />)}
                    </VisibilitySensor>
                    <text x="18" y="20.35" class="percentage">HTML</text>
                    </svg>
                </div>
                
                <div class="single-chart">
                    <svg viewBox="0 0 36 36" class="circular-chart">
                    <path class="circle-bg"
                        d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <VisibilitySensor partialVisibility={true}>
                    {({ isVisible }) => (
                    <path className={isVisible ? "circle active" : "circle"}
                        stroke-dasharray="75, 100"
                        d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                    />)}
                    </VisibilitySensor>
                    <text x="18" y="20.35" class="percentage">CSS</text>
                    </svg>
                </div>
                
                <div class="single-chart">
                    <svg viewBox="0 0 36 36" class="circular-chart">
                    <path class="circle-bg"
                        d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <VisibilitySensor partialVisibility={true}>
                    {({ isVisible }) => (
                    <path className={isVisible ? "circle active" : "circle"}
                        stroke-dasharray="25, 100"
                        d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                    />)}
                    </VisibilitySensor>
                    <text x="18" y="20.35" class="percentage">Python</text>
                    </svg>
                </div>

                <div class="single-chart">
                    <svg viewBox="0 0 36 36" class="circular-chart">
                    <path class="circle-bg"
                        d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <VisibilitySensor partialVisibility={true}>
                    {({ isVisible }) => (
                    <path className={isVisible ? "circle active" : "circle"}
                        stroke-dasharray="25, 100"
                        d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                    />)}
                    </VisibilitySensor>
                    <text x="18" y="20.35" class="percentage">JavaScript</text>
                    </svg>
                </div>
                <div class="single-chart">
                    <svg viewBox="0 0 36 36" class="circular-chart">
                    <path class="circle-bg"
                        d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <VisibilitySensor partialVisibility={true}>
                    {({ isVisible }) => (
                    <path className={isVisible ? "circle active" : "circle"}
                        stroke-dasharray="25, 100"
                        d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                    />)}
                    </VisibilitySensor>
                    <text x="18" y="20.35" class="percentage">Django</text>
                    </svg>
                </div>

                <div class="single-chart">
                    <svg viewBox="0 0 36 36" class="circular-chart">
                    <path class="circle-bg"
                        d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <VisibilitySensor partialVisibility={true}>
                    {({ isVisible }) => (
                    <path className={isVisible ? "circle active" : "circle"}
                        stroke-dasharray="25, 100"
                        d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                    />)}
                    </VisibilitySensor>
                    <text x="18" y="20.35" class="percentage">React</text>
                    </svg>
                </div>
            </div>
            </div>
         );
    }
}
 
export default Circle;