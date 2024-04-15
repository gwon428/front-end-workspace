import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
display: flex;
justify-content: space-between;
border-bottom: 1px solid #eee;
height: 70px;
line-height: 70px;
box-sizing: border-box;
    h1{
        font-size: 3rem;
        font-weight: bolder;
        margin-left: 10px;
    }

    nav{
       a{
        margin-right: 15px;
       } 
    }
`;

const Layout = () => {
    return (
        <>
            <Header>
                <h1>Animal</h1>
                <nav>
                    <a href="/">목록</a>
                    <a href="/create">추가</a>
                </nav>
            </Header>
             {/* router에서 children에 설정한 element가 들어간다!!! */}
            <Outlet/>
        </>
    )
};

export default Layout;