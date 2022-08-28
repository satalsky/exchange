import React from 'react';
import './Form.scss';
import {useDispatch, useSelector} from "react-redux";

const normalizeAsset = asset => {
    if ('asset' in asset) {
        return {
            id: asset.id,
            icon: asset.asset.icon,
            name: asset.asset.name,
            currency: asset.asset.currency,
            placeholder: `Мин. ${asset.minimal}`
        }
    } else {
        return {
            id: asset.id,
            icon: asset.icon,
            name: asset.name,
            currency: asset.currency,
            placeholder: `Резерв: ${asset.capital}`
        }
    }
}

const FormInput = props => {
    const { exchange, handler, text } = props;

    let asset = normalizeAsset(exchange)

    return (
        <div className="form-left col-6">
            <div className="form-wrapper pl pr">
                <input value={text} onChange={(e) => handler(e)} type="text" placeholder={asset.placeholder}/>
                <div className="form-wrapper__currency">
                    <span>{asset.currency}</span>
                </div>
            </div>
        </div>
    );
}

const FormButton = props => {
    const { exchange, assets } = props;
    const dispatch = useDispatch();
    let onClickButton;

    if ('asset' in exchange) {
        onClickButton = asset => {
            dispatch({type: "SET_FROM", payload: assets.find(x => x.id === asset.id)})
            setIsActive(false);
        }
    } else {
        onClickButton = asset => {
            dispatch({type: "SET_TO", payload: assets.find(x => x.id === asset.id)})
            setIsActive(false);
        }
    }
    let currentAsset = normalizeAsset(exchange)

    const dropdownRef = React.useRef(null);
    const [isActive, setIsActive] = React.useState(false);
    const onClick = (e) => {
        e.preventDefault();
        setIsActive(!isActive);
    };

    return (
        <div className="form-right col-6">
            <div onClick={onClick} className="form-wrapper pl pr">
                <div className="form-wrapper__text">
                    <img src={currentAsset.icon} alt={currentAsset.name} />
                    <span>{currentAsset.name}</span>
                </div>
                <div className="form-wrapper__arrow">
                    <svg width="17" height="10" viewBox="0 0 17 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1.056 8.5 9 16 1" stroke="#E23F65" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
            </div>
            <div ref={dropdownRef} className={`menu ${isActive ? 'active' : 'inactive'}`}>
                <ul>{ assets.map((asset) => {
                        asset = normalizeAsset(asset);
                        return (
                            <li key={asset.id} onClick={() => onClickButton(asset)}>
                                <img src={asset.icon} alt=""/>
                                <p>{asset.name}</p>
                            </li>
                        );
                }) }
                </ul>
            </div>
        </div>
    );
}

const Form = () => {
    const [giveInputText, setGiveInputText] = React.useState('');

    const giveHandler = (e) => {
        let text = e.target.value.replace(/\D.\D/g, '');
        setGiveInputText(text);
    };

    const cryptoAssets = useSelector(state => state.assets.cryptoAssets)
    const fiat = useSelector(state => state.assets.fiatAssets)
    const fromExchange = useSelector(state => state.exchange.from)
    const toExchange = useSelector(state => state.exchange.to)

    return (
        <div className="form">
            <form>
                <div className="form__content">
                    <div className="form-title pr pl">
                        <label>Отдаете:</label>
                    </div>

                    {/* ========== Form Give ========== */}
                    <div className="form-box form-give mb-2">
                        <FormInput exchange={fromExchange} handler={giveHandler} text={giveInputText} />

                        <FormButton exchange={fromExchange} assets={cryptoAssets} />
                    </div>

                    <div className="form-title pr pl">
                        <label>Получаете:</label>
                    </div>

                    {/* ========== Form Get ========== */}
                    <div className="form-box form-get mb-2">
                        <FormInput exchange={toExchange} />

                        <FormButton exchange={toExchange} assets={fiat} />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Form;
