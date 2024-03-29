import { TiCancelOutline } from "react-icons/ti";
import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: end;
    width: 100%;
    height: 100%;
    background: #212c40;
`;

export const Container = styled.div`
    width: 100%;
    flex-grow: 1;
    display: flex;
    justify-content: end;
    flex-direction: column;
    padding: 34px 0 0 0;
`;

export const ItemMessage = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(255, 255, 255, 1);
    padding: 10px;
    margin: 5px;
    border-radius: 8px;
    word-wrap: break-word;
    position: relative;
    border-radius: 10px;
    width: 95%;
    max-width: 500px;
    color: black;
    
    &::before{
            content: "";
            position: absolute;
            top: 50%;
            left: -10px; 
            transform: translateY(-50%);
            width: 0;
            height: 0;
            border-style: solid;
            border-width: 10px 10px 10px 0;
            border-color: transparent rgba(255, 255, 255, 1) transparent transparent;
            }
`;

export const BtnStyled = styled.button`
    font-size: 17px;
    text-align: center;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    background: rgb(47, 128, 237);
    color: rgba(255, 255, 255, 1);
    border: none;
    max-width: 150px;
    cursor: pointer;
    padding: 12px 10px;
`;

export const InputStyled = styled.input`
    min-width: 200px;
    outline: none;
    border-radius: 10px;
    border: none;
    width: 100%;
    height: 100%;
    max-width: 200px;
    padding: 6px 40px 6px 16px;
`;

export const InputBlock = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: rgba(255, 255, 255, 0.4);
    padding: 8px;
    height: 60px;
`;

export const ChatFill = styled.div`
    margin: 0 15px 10px 20px;
`;

export const Text = styled.p`
    max-width: 80%;
`;

export const DeleteBtn = styled(TiCancelOutline)`
    cursor: pointer;
    color: red;
    width: 24px;
    height: 24px;
`;

export const Orientation = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
`;