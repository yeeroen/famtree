import React from 'react';

export default props => (
    <div>
        <table>
            <tbody>
                {props.data.groups.map((group, groupIndex) => (
                    props.data[group].map((item, index) => {
                        const groupStyle = index === 0 && groupIndex > 0  ? {paddingTop: 15} : {};
                        return (
                            <tr key={index}>
                                <td style={groupStyle} className="family-item__role">{item.role}</td>
                                <td style={groupStyle} className="family-item__value">{item.value}</td>
                            </tr>
                        );
                    })
                ))}
            </tbody>
        </table>
    </div>
);
