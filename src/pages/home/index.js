import React , {PureComponent} from 'react';
import Topic from './componets/Topic';
import List from './componets/List';
import Recomment from './componets/Recomment';
import Writer from './componets/Writer';
import {connect} from 'react-redux';
import * as actionCreactors from './store/actionCreactors';

import {
    HomeWrapper,
    HomeLeft,
    HomeRight,
    BackTop
} from './style'

class Home extends PureComponent{
    handleScrollTop(){
        window.scrollTo(0,0);
    }
    render(){
        return(
            <HomeWrapper>
                <HomeLeft>
                    <img className='banner-img' alt="" src="//upload.jianshu.io/admin_banners/web_images/4751/ac556e78c6d92523c74e49be675e1b043ebdf106.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
                    <Topic></Topic>
                    <List></List>
                </HomeLeft>
                <HomeRight>
                    <Recomment />
                    <Writer></Writer>
                </HomeRight>
                {
                    this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop> : null
                }
                
            </HomeWrapper>
        )
    }
    componentDidMount(){
        this.props.changeHomeData()
        this.bindEvents()
    }
    componentWillUnmount(){
        window.removeEventListener('scroll',this.props.changeScrollTopShow)
    }
    bindEvents(){
        window.addEventListener('scroll',this.props.changeScrollTopShow)
    }
}
const mapState = (state) => ({
    showScroll:state.getIn(['home','showScroll'])
})
const mapDispatch = (dispatch) => ({
    changeHomeData(){
        const action = actionCreactors.getHomeInfo();
        dispatch(action);
    },
    changeScrollTopShow(){
       if(document.documentElement.scrollTop > 400){
          dispatch(actionCreactors.toggleTopShow(true))
       }else{
          dispatch(actionCreactors.toggleTopShow(false))
       }
    }
})
export default connect(mapState,mapDispatch)(Home);