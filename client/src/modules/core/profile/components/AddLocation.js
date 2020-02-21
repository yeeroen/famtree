import React from 'react';
import {connect} from 'react-redux';

const AddLocation = props => {

    const closeMenu = e => {
        if(e.target.classList.contains("popup-background") || e.target.classList.contains("form-item__button--cancel")){
            props.setPopup("");
        }
    }

    return (
        <div className="popup-background" onClick={closeMenu}>
            <div className="popup-card">
                <form className="popup-card__form">
                    <table>
                        <tbody>
                            <tr className="form-item">
                                <td className="form-item__title">Naam</td>
                                <td className="form-item__input">
                                    <input type="text" />
                                </td>         
                            </tr>
                            <tr className="form-item" >
                                <td className="form-item__title">Provincie</td>
                                <td className="form-item__input">
                                    <input type="text" />
                                </td>
                            </tr>
                            <tr className="form-item">
                                <td className="form-item__title">Land</td>
                                <td className="form-item__input">
                                    <input type="text" defaultValue="Nederland" />
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

export default connect(mapStateToProps, mapDispatchToProps)(AddLocation);