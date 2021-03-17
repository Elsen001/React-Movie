import React from 'react'

const Pagination = (props) => {

    const pageLink=[]
    
    for(let i=1;i<=props.pages+1;i++){
        let active = props.currentPage ==i? "active":""
       
        pageLink.push(<li className={`page-item ${active}`} onClick={()=>props.nextpage(i)}><a className="page-link" href="#" >{i}</a></li>)
    }


    return (
        <div className="container pag">
            <div className="row">
                <ul className="pagination">
                    {props.currentPage>1?<li className="page-item" onClick={()=>props.nextpage(props.currentPage-1)}><a className="page-link" href="#" >Prev</a></li>:""}
                    {pageLink.length>10? pageLink.slice(-pageLink.length,10):pageLink}
                    {props.currentPage<props.pages +1?<li className="page-item" onClick={()=>props.nextpage(props.currentPage+1)}><a className="page-link" href="#" >Next</a></li>:""}

                </ul>
            </div>
            
        </div>
    )
}

export default Pagination
