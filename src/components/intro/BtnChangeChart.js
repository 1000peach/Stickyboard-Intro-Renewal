import React from 'react';
import styled, { css } from 'styled-components';

export default function BtnChangeChart({ currentMode, mode, onChange }) {
    return (
        <ChangeChart
            current={currentMode}
            mode={mode}
            type="button"
            onClick={() => {
                onChange(mode);
            }}>
            {mode}
        </ChangeChart>
    );
}

const ChangeChart = styled.button`
    margin: 0 0 30px 10px;
    float: right;

    background: none;
    border: none;
    cursor: pointer;

    font-weight: bold;
    ${(props) => {
        if (props.current === props.mode) {
            return css`
                color: rgb(255, 193, 7);
            `;
        } else {
            return css`
                color: black;
            `;
        }
    }}

    transition: all 0.2s ease-in-out;

    &:hover,
    &:active {
        text-decoration: underline;
    }
`;
