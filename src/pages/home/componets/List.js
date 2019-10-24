import React , {PureComponent} from 'react';
import {connect} from 'react-redux';
import * as actionCreactors from '../store/actionCreactors';
import { Link } from 'react-router-dom';
import {
    ListItem,
    ListInfo,
    LoadMore
} from '../style'

class List extends PureComponent{
    render(){
        const {list,getMoreList,page} = this.props ;
        return(
            <div>
                {
                  list.map( (item,i) => {
                      return(
                       <Link to={'/detail/'+item.get('id')} key={i}>   
                           <ListItem>
                               <img alt="" className="pic" src={item.get('imgUrl')} />
                               <ListInfo>
                                   <h3 className="title">{item.get('title')}</h3>
                                   <p className="desc">{item.get('desc')}</p>
                               </ListInfo>
                           </ListItem>
                        </Link>
                      )
                  } )
                }
                <LoadMore onClick={()=>getMoreList(page)}>更多文字</LoadMore>
            </div>
        )
    }
}

const mapState =(state)=>({
    list:state.getIn(['home','articleList']),
    page:state.getIn(['home','articlePage'])
})
const mapDispatch = (dispatch) => ({
    getMoreList(page){
      dispatch(actionCreactors.geMoreList(page))
    }
})

export default connect(mapState,mapDispatch)(List);