import classNames from 'classnames/bind';
import styles from './col.module.scss'

let cx = classNames.bind(styles)

const Col = ({ 
    children, 
    xs, 
    sm, 
    md, 
    lg, 
    textAlign = "left",
    marginBottom,
    flexDirection = "column",
    justifyContent = "flex-start",
    alignItems = "flex-start"

}) => {
    let colClasses= cx ({
        col: true, 
        [`col-xs-${xs}`] : xs,
        [`col-sm-${sm}`] : sm,
        [`col-md-${md}`] : md,
        [`col-lg-${lg}`] : lg,
        [`text-align-${textAlign}`] : textAlign,
        [`margin-bottom-${marginBottom}`] : marginBottom,
        [`flex-direction-${flexDirection}`] : flexDirection,
        [`justify-content-${justifyContent}`] : justifyContent,
        [`align-items-${alignItems}`] : alignItems,
    })
    return <div className={colClasses}>{children}</div>
}
export default Col;