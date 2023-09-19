import DropDownlist from "./DropDownlist";
import { useTranslation } from 'react-i18next';
import i18n from "../i18n";

function Home() {
    var { t } = useTranslation();
    var handleLan = (evt) => {
        i18n.changeLanguage(evt.target.value);
    }

    return (
        <div className="container-1">
            <DropDownlist onChange={handleLan} />
            <h3>{t('home')} {t('page')}</h3>
            <h3>{t('welcome')} {t('in')} {t('this')} {t('page')}</h3>
        </div>
    )
}

export default Home;