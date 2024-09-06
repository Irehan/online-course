export const Search = () => (
    <div className="search-right">
        <a href="#search" title="search">
            <span className="fa fa-search" aria-hidden="true" />
        </a>
        <div id="search" className="pop-overlay">
            <div className="popup">
                <form action="error.html" method="GET" className="search-box">
                    <input
                        type="search"
                        placeholder="Search"
                        name="search"
                        required="required"
                        autofocus=""
                    />
                    <button type="submit" className="btn">
                        <span className="fa fa-search" aria-hidden="true" />
                    </button>
                </form>
            </div>
            <a className="close" href="#close">
                ×
            </a>
        </div>
    </div>
)
