import React from "react";
import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { logout } from "./redux/userSlice";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 500px;
  width: 100vw;
`;
const Header = styled.div``;
const BookList = styled.div``;
const BookDetailed = styled.div``;

function App() {
  const dispatch = useDispatch();
  const userState = useSelector((state: RootState) => state.user);

  const handleLogOut = () => {
    dispatch(logout());
  };

  if (!userState.isAuthenticated) {
    return <p>Log in</p>;
  }

  return (
    <Container>
      <Header>Hello this is the header</Header>
      <BookList>This will be the book list </BookList>
      <BookDetailed>This will be the book detail</BookDetailed>
      <p>Welcome, {userState.user?.name} </p>
      <button onClick={handleLogOut}>Logout</button>
    </Container>
  );
}

export default App;
