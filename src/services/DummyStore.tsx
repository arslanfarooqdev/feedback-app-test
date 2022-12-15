
export const registerExternalLinkClick = ():void=>{
    let existingValue = window.localStorage.getItem('external-link-click')
    if (isNumeric(existingValue)){
        //@ts-ignore
        let newValue = (parseInt(existingValue)+1).toString()
        window.localStorage.setItem('external-link-click', newValue)
    } else {
        window.localStorage.setItem('external-link-click', '0')
    }
}

export const getExternalClicks = ():number => {
    let clicks = window.localStorage.getItem('external-link-click')
    if (isNumeric(clicks)){
        //@ts-ignore
        let numericValue = (parseInt(clicks)+1)
        return numericValue;
    } else {
        return 0
    }
}

//@ts-ignore
function isNumeric(value):boolean {
        return !isNaN(parseInt(value)) && isFinite(value);
}