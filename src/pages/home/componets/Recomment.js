import React , {PureComponent} from 'react';
import {connect} from 'react-redux';
import {
    RecommentWrapper,
    RecommentItem
} from '../style'

class Recomment extends PureComponent{
    render(){
        return(
            <RecommentWrapper>
                {
                    this.props.list.map( ( item )=>{
                        return <RecommentItem key={item.get('id')} imgUrl={item.get('imgUrl')}/>
                    })
                }
                
            </RecommentWrapper>
        )
    }
}

const mapState = (state) => ({
    list:state.getIn(['home','recommendList'])
})

export default connect(mapState,null)(Recomment);