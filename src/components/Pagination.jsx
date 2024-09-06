import React from 'react'
function Pagination() {
  return (
    <div className="pagination-wrapper mb-5 pt-lg-3 text-center">
      <ul className="page-pagination">
        <li><a className="next" href="#url"><span className="fa fa-angle-left"></span> Prev</a></li>
        <li><span aria-current="page" className="page-numbers current">1</span></li>
        <li><a className="page-numbers" href="#url">2</a></li>
        <li><a className="page-numbers" href="#url">3</a></li>
        <li><a className="page-numbers" href="#url">....</a></li>
        <li><a className="next" href="#url">Next <span className="fa fa-angle-right"></span></a></li>
      </ul>
    </div>
  )
}
export default Pagination