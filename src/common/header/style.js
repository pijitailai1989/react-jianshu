import styled from 'styled-components';
import logoPic from '../../statics/logo.png'

export const HeaderWrapper = styled.div`
  z-index:1;
  position:relative;
  height:56px;
  border-bottom:1px solid #f0f0f0;
`;

export const Logo = styled.div`
  position:absolute;
  top:0;
  left:0;
  dispaly:block;
  width:100px;
  height:56px;
  background:url(${logoPic});
  background-size:contain;
`;

export const Nav = styled.div`
  width:960px;
  height:100%;
  padding-right:70px;
  box-sizing: border-box;
  margin:0 auto;
`;

export const NavItem = styled.div`
  line-height:56px;
  padding:0 15px;
  font-size:17px;
  color:#333;
  &.left{
    float:left;
  }
  &.right{
    float:right;
    color:#969696;
  }
  &.active{
    color:#ea6f5a;
  }
`;
export const SearchWrapper = styled.div`
  float:left;
  position:relative;
  
  .zoom{
    position:absolute;
    right:5px;
    bottom:5px;
    width:30px;
    height:30px;
    border-radius:15px;
    text-align:center;
    line-height:30px;
    &.focused{
      background:#777;
      color:#fff;
    }
  }
`;
export const SearchInfo =styled.div`
  position:absolute; 
  left:20px;
  top:56px;
  width:240px;
  padding:20px 20px 10px 20px;
  box-shadow:0 0 8px rgba(0,0,0,.2);
  background:white;
`;
export const SearchInfoTitle = styled.div`
  magin-top:20px;
  margin-bottom:15px;
  line-height:20px;
  font-size:14px;
  color:#969696;
`;
export const SearchInfoSwitch = styled.span`
  float:right;
  cursor:pointer;
  font-size:13px;
  :hover{
    color:#333;
  }
  .spin{
    font-size:12px;
    margin-right:2px;
    transition: all .2s ease-in;
    transform-origin:center center;
    display:block;
    float:left;
  }
`;
export const SearchInfoList = styled.div`
  width:100%;
`;
export const SearchInfoItem = styled.a`
  display:block;
  font-size:12px;
  padding:0 5px;
  line-height:20px;
  border:1px solid #ddd;
  color:#333;
  margin-right:10px;
  margin-bottom:12px;
  border-radius:3px;
  float:left;
`;
export const NavSearch = styled.input.attrs({
    placeholder:'搜索'
})`
  width:160px;
  height:38px;
  border:none;
  outline:none;
  border-radius:19px;
  padding:0 30px 0 20px;
  color:#666;
  margin-top:9px;
  background:#eee;
  font-size:14px;
  margin-left:20px;
  &.slide-enter{
    transition: all .2s ease-out;
  }
  &.slide-enter-active{
    width:240px;
  }
  &.slide-exit{
    transition: all .2s ease-out;
  }
  &.slide-exit-active{
    width:160px;
  }
  &::placeholder{
      color:#999;
  }
  &.focused{
    width:240px;
    
  }
`;

export const Addition = styled.div`
  position:absolute;
  right:0;
  top:0;
  height:56px;
`;

export const Button = styled.div`
  float: right;
  margin-top:9px;
  margin-right:20px;
  padding:0 20px;
  font-size:14px;
  line-height:38px;
  border-radius:19px;
  border:1px solid #ec6149;
  .iconfont{
    padding:0 5px;
  }
  &.reg{
      color:#ec6149;
  }
  &.writting{
      color:#fff;
      background:#ec6149;
  }
`;