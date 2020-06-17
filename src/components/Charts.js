import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import VisibilitySensor from "react-visibility-sensor";

class Charts extends Component {
  state = {};
  render() {
    return (
      <div id="chart" className="ml-1">
        <Fade bottom delay={800}>
          <div className="chart-bar">
            <div className="bar">
              <pre className="label">
                <span className="code">
                  {`<input type="`}
                  <span className="no-code">Python</span>
                  {`" value="`}{" "}
                </span>
              </pre>
              <VisibilitySensor>
                {({ isVisible }) => (
                  <div className="progress">
                    <div
                      className={isVisible ? "active-3" : "progress-value-3"}
                    ></div>
                  </div>
                )}
              </VisibilitySensor>
              <pre>
                <span className="code">{`">`}</span>
              </pre>
            </div>
            <div className="bar">
              <pre className="label">
                <span className="code">
                  {`<input type="`}
                  <span className="no-code">Javascript</span>
                  {`" value="`}{" "}
                </span>
              </pre>
              <VisibilitySensor>
                {({ isVisible }) => (
                  <div className="progress">
                    <div
                      className={isVisible ? "active-1" : "progress-value-1"}
                    ></div>
                  </div>
                )}
              </VisibilitySensor>
              <pre>
                <span className="code">{`">`}</span>
              </pre>
            </div>
            <div className="bar">
              <pre className="label">
                <span className="code">
                  {`<input type="`}
                  <span className="no-code">HTML</span>
                  {`" value="`}{" "}
                </span>
              </pre>
              <VisibilitySensor>
                {({ isVisible }) => (
                  <div className="progress">
                    <div
                      className={isVisible ? "active-2" : "progress-value-2"}
                    ></div>
                  </div>
                )}
              </VisibilitySensor>
              <pre>
                <span className="code">{`">`}</span>
              </pre>
            </div>
            <div className="bar">
              <pre className="label">
                <span className="code">
                  {`<input type="`}
                  <span className="no-code">CSS</span>
                  {`" value="`}{" "}
                </span>
              </pre>
              <VisibilitySensor>
                {({ isVisible }) => (
                  <div className="progress">
                    <div
                      className={isVisible ? "active-2" : "progress-value-2"}
                    ></div>
                  </div>
                )}
              </VisibilitySensor>
              <pre>
                <span className="code">{`">`}</span>
              </pre>
            </div>
            <div className="bar">
              <pre className="label">
                <span className="code">
                  {`<input type="`}
                  <span className="no-code">Django</span>
                  {`" value="`}{" "}
                </span>
              </pre>
              <VisibilitySensor>
                {({ isVisible }) => (
                  <div className="progress">
                    <div
                      className={isVisible ? "active-3" : "progress-value-3"}
                    ></div>
                  </div>
                )}
              </VisibilitySensor>
              <pre>
                <span className="code">{`">`}</span>
              </pre>
            </div>
            <div className="bar">
              <pre className="label">
                <span className="code">
                  {`<input type="`}
                  <span className="no-code">React</span>
                  {`" value="`}{" "}
                </span>
              </pre>
              <VisibilitySensor>
                {({ isVisible }) => (
                  <div className="progress">
                    <div
                      className={isVisible ? "active-2" : "progress-value-2"}
                    ></div>
                  </div>
                )}
              </VisibilitySensor>
              <pre>
                <span className="code">{`">`}</span>
              </pre>
            </div>
            <div className="bar">
              <pre className="label">
                <span className="code">
                  {`<input type="`}
                  <span className="no-code">jQuery</span>
                  {`" value="`}{" "}
                </span>
              </pre>
              <VisibilitySensor>
                {({ isVisible }) => (
                  <div className="progress">
                    <div
                      className={isVisible ? "active-1" : "progress-value-1"}
                    ></div>
                  </div>
                )}
              </VisibilitySensor>
              <pre>
                <span className="code">{`">`}</span>
              </pre>
            </div>
            <div className="bar">
              <pre className="label">
                <span className="code">
                  {`<input type="`}
                  <span className="no-code">Bootstrap</span>
                  {`" value="`}{" "}
                </span>
              </pre>
              <VisibilitySensor>
                {({ isVisible }) => (
                  <div className="progress">
                    <div
                      className={isVisible ? "active-2" : "progress-value-2"}
                    ></div>
                  </div>
                )}
              </VisibilitySensor>
              <pre>
                <span className="code">{`">`}</span>
              </pre>
            </div>
            <div className="bar">
              <pre className="label">
                <span className="code">
                  {`<input type="`}
                  <span className="no-code">Git</span>
                  {`" value="`}{" "}
                </span>
              </pre>
              <VisibilitySensor>
                {({ isVisible }) => (
                  <div className="progress">
                    <div
                      className={isVisible ? "active-2" : "progress-value-2"}
                    ></div>
                  </div>
                )}
              </VisibilitySensor>
              <pre>
                <span className="code">{`">`}</span>
              </pre>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
}

export default Charts;
