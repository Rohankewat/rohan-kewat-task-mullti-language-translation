import DropDownlist from "./DropDownlist";
import { useTranslation } from 'react-i18next';
import i18n from "../i18n";

function Detail() {
    var { t } = useTranslation();
    var handleLan = (evt) => {
        i18n.changeLanguage(evt.target.value);
    }

    return (
        <div className="container-1">
            <DropDownlist onChange={handleLan} />
            <h3>{t('detail')} {t('page')}</h3>
            <h3>{t('welcome')} {t('in')} {t('this')} {t('page')}</h3>
            <h3>{t('gives')} {t('details')} {t('of')} {t('company')}</h3>
        </div>
    )
}

export default Detail;