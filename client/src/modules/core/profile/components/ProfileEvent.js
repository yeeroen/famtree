import React from "react";

export default props => {

    return (
        <div className="event-item">
            <div className="event-item__circle" style={{backgroundColor: props.circleColor}}></div>
            <div className="event-item__date">{props.date}</div>
            <table>
                <tbody>
                {props.content.map((content, index) => {
                    return (
                        <tr key={index}>
                            <td className="event-item__title">{content.title}</td>
                            <td className="event-item__value">{content.value}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    );
}