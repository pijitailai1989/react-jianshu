import React , {PureComponent} from 'react';
import { TopicWrapper , TopicItem } from '../style';
import {connect} from 'react-redux';

class Topic extends PureComponent{
    render(){
        return(
            <TopicWrapper>
                {
                    this.props.list.map((item,i)=>(
                        <TopicItem key={item.get('id')}>
                            <img className="topic-pic" alt="" src={item.get('imgUrl')} />
                            {item.get('title')}
                        </TopicItem>
                       )
                    )
                }
                
            </TopicWrapper>
        )
    }
}

const mapState = (state) => ({
   list : state.get('home').get('topicList')
})

export default connect(mapState,null)(Topic);