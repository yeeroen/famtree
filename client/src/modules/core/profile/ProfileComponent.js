import React from 'react';
import {connect} from 'react-redux';
import loadFamily from '../base/actions/loadFamily';

// Components
import AddEvent from './components/AddEvent';
import AddLocation from './components/AddLocation';
import AddPerson from './components/AddPerson';
import ProfileEvent from './components/ProfileEvent';
import ProfileFamily from './components/ProfileFamily';
import ProfileDocument from './components/ProfileDocument';
import AddFamily from './components/addFamily';

import * as actions from '../base/actions'


const ProfileComponent = props => {
    return (
        <div className="profile">
            {props.profile.profilePopup === "addevent" && <AddEvent /> }
            {props.profile.profilePopup === "addlocation" && <AddLocation /> }
            {props.profile.profilePopup === "addperson" && <AddPerson /> }
            {props.profile.profilePopup === "addfamily" && <AddFamily /> }
            <div className="grid-container profile__inner">
                <div className="grid-x">
                    <div className="cell small-1"></div>
                    <div className="cell small-10">
                        <div className="grid-container">
                            <div className="grid-x grid-padding-x">
                                <div className="cell small-12">
                                    <h2 className="profile__fullname">Jacobus van Egmond</h2>
                                </div>
                                <div className="cell small-12 large-4">
                                    <div className="profile__events">
                                        <h3>
                                            Gebeurtenissen
                                            <i className="add-icon" onClick={() => props.setPopup('addevent')} />
                                        </h3>
                                        <ProfileEvent circleColor="#C4ECA4" date="15-05-1856" content={[{title: "Gebeurtenis", value: "Geboren"}, {title: "Waar", value: "Haarlemmermeer"},{title: "Tijd", value: "21:00"}]} />
                                        <ProfileEvent circleColor="#FF9E9E" date="31-01-1883" content={[{title: "Gebeurtenis", value: "Huwelijk"}, {title: "Waar", value: "Nieuwer-Amstel"},{title: "Bruid", value: "Cornelia van Gog"}]} />
                                        <ProfileEvent circleColor="#D30000" date="31-01-1902" content={[{title: "Gebeurtenis", value: "Overlijden"}, {title: "Waar", value: "Haarlemmermeer"},{title: "Tijd", value: "13:00"}]} />
                                    </div>
                                </div>
                                <div className="cell small-12 large-4">
                                    <div className="profile__family">
                                        <h3>
                                            Familie
                                            <i className="add-icon" onClick={() => props.setPopup('addfamily')}/>
                                        </h3>
                                        <ProfileFamily data={loadFamily} />
                                    </div>
                                </div>
                                <div className="cell small-12 large-4">
                                    <div className="profile__documents">
                                        <h3>Documenten<i className="add-icon" /></h3>
                                        <ProfileDocument fileName="Geboorte-document.pdf" />
                                        <ProfileDocument fileName="Huwelijk-document.pdf" />
                                        <ProfileDocument fileName="Overlijden-document.pdf" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cell small-1"></div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = ({profile}) => {
    return { profile };
}

export default connect(mapStateToProps, actions)(ProfileComponent);