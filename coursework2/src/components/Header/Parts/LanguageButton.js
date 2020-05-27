import React from 'react'
import { connect } from 'react-redux'
import { toggleLocale } from '../../../Redux/localeReducer'
import Button from '@material-ui/core/Button'
import TranslateIcon from '@material-ui/icons/Translate'
import translate from '../../../localizations/translate'
const LanguageButton = (props) => {
    const onLocaleChanged = () => {
        props.toggleLocale(props.locale.value)
    }

    return (
        <Button color='inherit' size='large' startIcon={<TranslateIcon />} onClick={onLocaleChanged}>
            {translate('header.locale')}
        </Button>
    )
}

let mapStateToProps = (state) => ({
    locale: state.locale,
})

export default connect(mapStateToProps, { toggleLocale })(LanguageButton)