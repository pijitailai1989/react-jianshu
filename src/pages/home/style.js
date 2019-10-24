import styled from 'styled-components';

export const HomeWrapper = styled.div`
  overflow: hidden;
  width:960px;
  margin:0 auto;
`;
export const HomeLeft = styled.div`
  margin-left:15px;
  padding:-top:30px;
  width:625px;
  float: left;
  .banner-img{
      width:625px;
      height:240px;
      margin-top:20px;
  }
`;
export const HomeRight = styled.div`
  width:240px;
  float:right;
`;

export const TopicWrapper = styled.div`
  width:625px;
  padding:20px 0 10px 0;
  overflow:hidden;
  border-bottom:1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
  float : left;
  height:32px;
  line-height:32px;
  background:#f7f7f7;
  font-size:14px
  margin-left:18px;
  margin-bottom:18px;
  color:#000;
  border:1px solid #dcdcdc;
  border-radius:4px;
  padding-right:10px;
  .topic-pic{
      width:32px;
      height:32px;
      float:left;
      display:block;
      margin-right:10px;
      
  }
`;
export const ListItem = styled.div`
  overflow:hidden;
  padding:20px 0;
  border-bottom:1px solid #dcdcdc;
  .pic{
    display:block;
    width:125px;
    height:100px;
    float:right;
  }
`;
export const ListInfo = styled.div`
  width:500px;
  float:left;
  .title{
    line-height:27px;
    font-size:18px;
    font-weight:bold;
    color:#333;
  }
  .desc{
    line-height:24px;
    font-size:13px;
    color:#999;
  }
  .
`;

export const RecommentWrapper = styled.div`
  width:240px;
  margin-top:20px;
`;
export const RecommentItem = styled.div`
  margin-bottom:10px;
  width:240px;
  height:50px;
  background: url(${ (props)=>(props.imgUrl) });
  background-size:contain;
`;

export const WriterWrapper = styled.div`
  width:240px;
  height:300px;
  border:1px solid #dcdcdc;
  border-radius:2px;
  line-height:300px;
  text-align:center;
  box-sizing:border-box;
`;

export const LoadMore = styled.div`
  width:100%;
  height:40px;
  line-height:40px;
  text-align:center;
  background:#a5a5a5;
  color:#fff;
  border-radius:20px;
  margin:30px 0;
  cursor:pointer;
`;

export const BackTop = styled.div`
  position:fixed;
  bottom:100px;
  right:100px;
  width:80px;
  height:80px;
  line-height:80px;
  text-align:center;
  border:1px solid #dcdcdc;
  border-radius:2px;
  font-size:12px;
`;