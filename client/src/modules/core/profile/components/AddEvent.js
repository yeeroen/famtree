import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { SingleDatePicker } from 'react-dates';
import moment from 'moment';
import * as actions from '../../base/actions';

const AddEvent = props => {

    const [event, setEvent] = useState(0);
    const [searchType, setSearchType] = useState('');
    const [date, setDate] = useState(moment());
    const [focused, setFocused] = useState(false);

    const setSearchMenu = newSearchType => {
        if(newSearchType){
            if(newSearchType !== searchType && searchType){
                document.querySelector('.add-event__search').style.right = '0px';
                setTimeout(() => {
                    if(searchType){
                        setSearchType(newSearchType);
                        document.querySelector('.add-event__search').style.right = '-200px';
                    }
                }, 1000)
            }else {
                setSearchType(newSearchType);
                document.querySelector('.add-event__search').style.right = '-200px';
                console.log(new Date().getTime());
            }
        }else {
            document.querySelector('.add-event__search').style.right = '0px';
        }
    }

    const closeMenu = e => {
        if(e.target.classList.contains('popup-background') || e.target.classList.contains('form-item__button--cancel')){
            e.preventDefault();
            props.setPopup('');
        }
    }

    useEffect(() => {
        focused && setSearchMenu('');
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [focused]);

    useEffect(() => {
        props.loadProfiles({ search: '' });
    },[])

    return (
        <div className="popup-background" onClick={closeMenu}>
            <div className="popup-card">
                <form className="popup-card__form">
                    <table>
                        <tbody>
                            <tr className="form-item">
                                <td className="form-item__title">Gebeurtenis</td>
                                <td className="form-item__input is-select">
                                    <select onFocus={() => setSearchMenu('')} onChange={e => setEvent(e.target.value)}>
                                        <option value="0">Geboorte</option>
                                        <option value="1">Overlijden</option>
                                        <option value="2">Huwelijk</option>
                                        <option value="3">Gedoopt</option>
                                    </select>
                                </td>
                            </tr>
                            <tr className="form-item">
                                <td className="form-item__title">Datum</td>
                                <td className="form-item__input">
                                        <SingleDatePicker 
                                            date={date}
                                            onDateChange={date => setDate(date)}
                                            focused={focused}
                                            onFocusChange={({focused}) => setFocused(focused)}
                                            id="calendar"
                                            hideKeyboardShortcutsPanel
                                            numberOfMonths={1}
                                            isOutsideRange={() => false}
                                        />
                                </td>
                            </tr>
                            <tr className="form-item">
                                <td className="form-item__title">Locatie</td>
                                <td className="form-item__input">
                                    <input type="text" onFocus={() => setSearchMenu('location')} />
                                </td>
                            </tr>
                            <tr className="form-item">
                                <td className="form-item__title">Tijd</td>
                                <td className="form-item__input">
                                    <input type="text" onFocus={() => setSearchMenu('')} />
                                </td>
                            </tr>
                            {event === '2' &&
                            <tr className="form-item">
                                <td className="form-item__title">Partner</td>
                                <td className="form-item__input">
                                    <input type="text" onFocus={() => setSearchMenu('partner')} onChange={e => props.loadProfiles({ search: e.target.value })} />
                                </td>
                            </tr>}
                            <tr className="form-item form-item--buttons">
                                <td>
                                    <input type="submit" value='Aanmaken' className="form-item__button form-item__button--add"/>
                                </td>
                                <td>
                                    <input type="submit" value='Annuleren' className='form-item__button form-item__button--cancel'/>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div style={{right: 0}} className="add-event__search">
                        {searchType === 'location' ?
                            <div className='event-search'>
                                <div className="event-search__item">
                                    <p>Heemskerk</p>
                                    <p className="subtitle">Noord-Holland, Nederland</p>
                                </div>
                                <div className="event-search__item">
                                    <p>Rotterdam</p>
                                    <p className="subtitle">Zuid-Holland, Nederland</p>
                                </div>
                                <div className="event-search__item">
                                    <p>Amsterdam</p>
                                    <p className="subtitle">Noord-Holland, Nederland</p>
                                </div>
                                <div className="event-search__item">
                                    <p>Utrecht</p>
                                    <p className="subtitle">Utrecht, Nederland</p>
                                </div>
                                <div className="event-search__item">
                                    <p>Eindhoven</p>
                                    <p className="subtitle">Noord-Brabant, Nederland</p>
                                </div>
                            </div>
                            :
                            searchType === 'partner' ?
                                <div className="event-search">
                                    {props.state.profile.profileSearchResults.map((profile, index) => (
                                        <div key={index} className="event-search__item">
                                            <p>{profile.name}</p>
                                            <p className="subtitle">({moment(profile.birth).format('Y')}-{moment(profile.death).format('Y')})</p>
                                            
                                             {console.log(moment().format('Y'))}
                                        </div>
                                    ))}
                                    <p className="new-option" onClick={() => props.setPopup('addperson')}>Voeg een nieuw persoon toe</p>
                                </div>
                                :
                                <div>
                                </div>
                        }
                    </div>
                </form>
            </div>
        </div>
    )

}

const mapStateToProps = state => ({
    state
});

export default connect(mapStateToProps, actions)(AddEvent);