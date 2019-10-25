import React , {PureComponent} from 'react';
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom';


class Login extends PureComponent{
    render(){
        const { loginStates } = this.props ;
        if(loginStates){
            return(
                <div>写文章</div>
            )
        }else{
            return <Redirect to="/login" />
        }
        
    }
    componentDidMount(){
    }
}
const mapState = (state) => ({
      loginStates:state.getIn(['login','login'])
})
export default connect(mapState,null)(Login);