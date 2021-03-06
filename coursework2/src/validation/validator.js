import translate from '../localizations/translate'

export const required = (value) => {
    if (!value) {
        return translate('requiredField')
    }
    return undefined
}

export const maxLengthCreator = (maxLength) => (value) => {
    if (value.length > maxLength) {
        return translate('maxLength', maxLength)
    }
    return undefined
}