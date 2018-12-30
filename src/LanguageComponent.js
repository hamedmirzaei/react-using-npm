import React from 'react';
import PropTypes from 'prop-types';
import './LanguageComponent.css';

const Language = ({language}) => {
	return (
		<li>{language}</li>
	)
}
Language.propTypes = {
	language: PropTypes.string.isRequired
}

const LanguageList = ({languages}) => {
	return (
		<ul>
			{languages.map((language,i) => <Language key={i} language={language} />)}
		</ul>
	)
}
LanguageList.propTypes = {
	languages: PropTypes.array.isRequired
}

const LanguageComponent = ({header, languages}) => {
	const formattedLanguages = languages.map(language => language.toUpperCase())
	return (
		<fieldset>
			<legend>{header}</legend>
			<LanguageList languages={formattedLanguages}/>
		</fieldset>
	)
}

LanguageComponent.propTypes = {
	header: PropTypes.string.isRequired,
	languages: PropTypes.array.isRequired
}

export default LanguageComponent;