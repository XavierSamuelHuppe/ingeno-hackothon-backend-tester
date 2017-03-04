import React from "react";

class PassedTest extends React.Component {
    render() {
        var styles = {
                test: {
                    color: "deeppink",
                    backgroundColor: "#8ee547",
                    fontSize: 24,
                    margin: "0px 3px 3px",
                    fontFamily: "Arial"
                },
                text: {
                    margin: "0px 5px",
                }
            }
        ;
        return (
            <div style={styles.test}>
                <div style={styles.text}>{this.props.test}</div>
            </div>
        );
    }
}

export default PassedTest;
