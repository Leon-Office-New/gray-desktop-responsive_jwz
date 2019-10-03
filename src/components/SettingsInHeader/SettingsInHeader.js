import React, { useState, useEffect } from 'react';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './SettingsInHeader.scss';

import {
  setDecimals,
  selectDecimal,
  setLanguages,
  selectLanguage
} from '../../redux/settings';

const SettingsInHeader = props => {
  const { t } = props;
  const data = t('settings', { returnObjects: true });
  const { decimals, selectedDecimal, languages, selectedLanguage } = props;
  const { setDecimals, selectDecimal, setLanguages, selectLanguage } = props;

  const [now, setNow] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    setDecimals(data.decimals);
    setLanguages(data.languages);
    selectDecimal(data.decimals[0].key);
    selectLanguage(data.languages[0].key);
  }, [decimals, languages]);

  // let interval = null
  useEffect(() => {
    let interval = setInterval(() => {
      setNow(new Date().toLocaleTimeString());
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [now]);

  return (
    <div className="flex settings-in-header">
      <select
        value={selectedDecimal}
        onChange={e => selectDecimal(e.target.value)}
      >
        {decimals.map((item, index) => {
          return (
            <option key={item.key} value={item.key}>
              {item.name}
            </option>
          );
        })}
      </select>
      <select
        value={selectedLanguage}
        onChange={e => selectLanguage(e.target.value)}
      >
        {languages.map((item, index) => {
          return (
            <option key={item.key} value={item.key}>
              {item.shortText}
            </option>
          );
        })}
      </select>
      <span className="current-time">{now}</span>
    </div>
  );
};

const mapStateToProps = state => ({
  decimals: state.settings.decimals,
  selectedDecimal: state.settings.selectedDecimal,
  languages: state.settings.languages,
  selectedLanguage: state.settings.selectedLanguage
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setDecimals,
      selectDecimal,
      setLanguages,
      selectLanguage
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(SettingsInHeader));
