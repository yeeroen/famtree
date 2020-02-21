import React, { useState } from 'react';
import {connect} from 'react-redux';
import { SingleDatePicker } from 'react-dates';
import moment from 'moment';
import * as actions from '../../base/actions';

const AddPerson = props => {

    const [birthDate, setBirthDate] = useState(moment());
    const [birthFocused, setBirthFocused] = useState(false);
    const [deathDate, setDeathDate] = useState(moment());
    const [deathFocused, setDeathFocused] = useState(false);

    const closeMenu = e => {
        if(e.target.classList.contains("popup-background") || e.target.classList.contains("form-item__button--cancel")){
            e.preventDefault();
            props.setPopup("");
        }
    }

    const submitForm = e => {
        e.preventDefault();
        props.handleProfileCreation({name: e.target.name.value, birth: moment(birthDate).valueOf(), death: moment(deathDate).valueOf()});
    }

    return (
        <div className="popup-background" onClick={closeMenu}>
            <div className="popup-card">
                <form className="popup-card__form" onSubmit={submitForm}>
                    <table>
                        <tbody>
                            <tr className="form-item">
                                <td className="form-item__title">Naam</td>
                                <td className="form-item__input">
                                    <input name='name' type="text" />
                                </td>
                            </tr>
                            <tr className="form-item" >
                                <td className="form-item__title">Geboren</td>
                                <td className="form-item__input">
                                    <SingleDatePicker 
                                        date={birthDate}
                                        onDateChange={date => setBirthDate(date)}
                                        focused={birthFocused}
                                        onFocusChange={({focused}) => setBirthFocused(focused)}
                                        id="calendar-1"
                                        hideKeyboardShortcutsPanel
                                        numberOfMonths={1}
                                        isOutsideRange={() => false}
                                    />
                                </td>
                            </tr>
                            <tr className="form-item">
                                <td className="form-item__title">Overleden</td>
                                <td className="form-item__input">
                                    <SingleDatePicker 
                                        date={deathDate}
                                        onDateChange={date => setDeathDate(date)}
                                        focused={deathFocused}
                                        onFocusChange={({focused}) => setDeathFocused(focused)}
                                        id="calendar-2"
                                        hideKeyboardShortcutsPanel
                                        numberOfMonths={1}
                                        isOutsideRange={() => false}
                                    />    
                                </td>
                            </tr>
                            <tr className="form-item form-item--buttons">
                                <td>
                                    <input className="form-item__button form-item__button--add" type="submit" value="Aanmaken"/>
                                </td>
                                <td>
                                    <input className="form-item__button form-item__button--cancel" type="submit" value="Cancel" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    popup: state.profilePopup
});

const mapDispatchToProps = dispatch => ({ 
    setPopup: state => dispatch({ type: "SET_PROFILE_POPUP", state })
})

export default connect(mapStateToProps, actions)(AddPerson);