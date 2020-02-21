import React, { useState } from 'react';
import {connect} from 'react-redux';
import * as actions from '../../base/actions';

const AddFamily = props => {

    const [searchType, setSearchType] = useState('');

    const setSearchMenu = newSearchType => {
        if(newSearchType){
            setSearchType(newSearchType);
            document.querySelector('.add-event__search').style.right = '-200px';
        }else {
            document.querySelector('.add-event__search').style.right = '0px';
        }
    }

    const closeMenu = e => {
        if(e.target.classList.contains("popup-background") || e.target.classList.contains("form-item__button--cancel")){
            e.preventDefault();
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
                                <td className="form-item__input is-select">
                                    <select onFocus={() => setSearchMenu('')}>
                                        <option value="0">Vader</option>
                                        <option value="1">Moeder</option>
                                        <option value="2">Broer</option>
                                        <option value="3">Zus</option>
                                        <option value="4">Zoon</option>
                                        <option value="5">Dochter</option>
                                        <option value="6">Half-broer</option>
                                        <option value="7">Half-zus</option>
                                    </select>
                                </td>         
                            </tr>
                            <tr className="form-item" >
                                <td className="form-item__title">Persoon</td>
                                <td className="form-item__input">
                                    <input type="text" onFocus={() => setSearchMenu('person')}/>
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
                    <div style={{right: 0}} className="add-event__search">
                        {searchType === 'person' &&
                            <div className="event-search">
                                <div className="event-search__item">
                                    <p>Lorem ipsum</p>
                                    <p className="subtitle">(1850-1913)</p>
                                </div>
                                <div className="event-search__item">
                                    <p>dolor sit amet</p>
                                    <p className="subtitle">(1832-1899)</p>
                                </div>
                                <div className="event-search__item">
                                    <p>consectetur adipisicing</p>
                                    <p className="subtitle">(1745-1821)</p>
                                </div>
                                <div className="event-search__item">
                                    <p>Aliquid quasi</p>
                                    <p className="subtitle">(1921-1997)</p>
                                </div>
                                <div className="event-search__item">
                                    <p>Jeroen van Egmond</p>
                                    <p className="subtitle">(2000-????)</p>
                                </div>
                                <p className="new-option" onClick={() => props.setPopup('addperson')}>Voeg een nieuw persoon toe</p>
                            </div>
                        }
                    </div>
                </form>
            </div>
        </div>
    )


}

const mapStateToProps = state => ({
    popup: state.profilePopup
});

export default connect(mapStateToProps, actions)(AddFamily);