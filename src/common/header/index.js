import React ,{PureComponent} from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import  * as actionCreators  from './store/actionCreators';
import { Link } from 'react-router-dom';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoList,
    SearchInfoItem
} from './style';



class Header extends PureComponent{
    
    getListArea(){
        const {focuses,list,page,mouseIn,totalPage,handleMouseEnter,handleMouseLeave,handleChangePage} = this.props ;
        const newList = list.toJS();
        const pageList = [];
        if(newList.length){
            for(let i = ( page - 1 ) * 5; i < page * 5; i++){
                if(newList[i]){ 
                    pageList.push(
                        <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
                    )
                }
             }
        }
        if(focuses  || mouseIn){
            return (
                <SearchInfo onMouseLeave={handleMouseLeave} onMouseEnter={ handleMouseEnter }>
                     <SearchInfoTitle>
                         热门搜索
                         <SearchInfoSwitch onClick={()=> handleChangePage(page,totalPage,this.spinIcon)}>
                         <i ref={(icon) => {this.spinIcon = icon}} className="iconfont spin">&#xe851;</i>
                             换一批
                         </SearchInfoSwitch>
                     </SearchInfoTitle>
                     <SearchInfoList>
                         { pageList }
                     </SearchInfoList>
                </SearchInfo>
            )
        }else{
            return null ;
        }
    } 

    render(){
        const {focuses,handleInputFocus,handleInputBlur,list} = this.props ;
        return(
            <div>
               <HeaderWrapper> 
                   <Link to="/"><Logo /></Link>
                   
                   <Nav>
                      <NavItem className="left active">首页</NavItem>
                      <NavItem className="left">下载App</NavItem>
                      <Link to="/login"><NavItem className="right">登陆</NavItem></Link>
                      <NavItem className="right">
                          <i className="iconfont">&#xe636;</i>
                      </NavItem>
                      <SearchWrapper>
                        <CSSTransition
                         in={focuses}
                         timeout={200}
                         classNames='slide'
                        >
                         <NavSearch
                         className={focuses?'focused':''}
                         onFocus={() => { handleInputFocus(list) } }
                         onBlur={handleInputBlur}
                         ></NavSearch>
                        </CSSTransition>
                        <i className={focuses?'focused iconfont zoom':'iconfont zoom'}>&#xe637;</i>
                        {this.getListArea()}
                      </SearchWrapper>
                   </Nav>
                   <Addition>
                       <Button className="writting">
                       <i className="iconfont">&#xe61c;</i>
                           写文章</Button>
                       <Button className="reg">注册</Button>
                   </Addition>
               </HeaderWrapper>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return{
        focuses : state.get('header').get('focuses'),
        list : state.get('header').get('list'),
        page : state.get('header').get('page'),
        totalPage: state.get('header').get('totalPage'),
        mouseIn: state.get('header').get('mouseIn')
        // focuses : state.getIn(['header','focuses'])
    }
}

//映射
const mapDispathToProps = (dispatch) => {
    return{
        handleInputFocus(list){
           ( list.size === 0 ) && dispatch(actionCreators.getList());
           dispatch(actionCreators.searchFocus())
        },
        handleInputBlur(){
            dispatch(actionCreators.searchBlur())
         },
         handleMouseEnter(){
             dispatch(actionCreators.mouseEnter())
         },
         handleMouseLeave(){
            dispatch(actionCreators.mouseLeave())
         },
         handleChangePage(page,totalPage,spin){
             
             let originAngle = spin.style.transform.replace(/[^0-9]/ig,'')
             if(originAngle){
                originAngle = parseInt(originAngle,10)
             }else{
                originAngle = 0 ;
             }
             spin.style.transform = 'rotate(' +(originAngle + 360) +'deg)'
             if(page<totalPage){
                dispatch(actionCreators.changePage(page + 1))
             }else{
                dispatch(actionCreators.changePage(1))
             }
            
         }
    }
}

export default connect(mapStateToProps,mapDispathToProps)(Header);