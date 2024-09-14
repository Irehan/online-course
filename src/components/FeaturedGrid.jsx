import { Link } from "react-router-dom"
export const FeaturedGrid = ({ link, iconClass, title, description }) => {
    return (<>
        <div className="grids-1 box-wrap">
            <Link to={link} className="icon">
                <span className={`fa ${iconClass}`} />
            </Link>
            <h4>
                <Link to={link} className="title-head">
                    {title}
                </Link>
            </h4>
            <p>
                {description}
            </p>
        </div>
    </>)

}