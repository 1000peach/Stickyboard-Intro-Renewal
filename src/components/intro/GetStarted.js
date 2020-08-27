import React from 'react';
import styled from 'styled-components';

export default function GetStart() {
    return (
        <StartSection>
            <StartTitle>
                <Hello>Hello,</Hello>
                <StartLogo
                    src="../../static/image/StickyBoard_logo_only.png"
                    alt="stickyboard logo"
                />
                <StickyBoard>StickyBoard!</StickyBoard>
            </StartTitle>
            <StartDisc>
                <Circle>StickyBoard</Circle>is on-demand dashboard solution
                based on React. <br />
                Users can make their own dashboard with locating component.
            </StartDisc>
            <GitHubLink>
                <Star
                    href="https://github.com/soaple/stickyboard"
                    target="_blank">
                    <span>Star</span>
                </Star>
                <Follow href="https://github.com/soaple" target="_blank">
                    <span>Follow @soaple</span>
                </Follow>
            </GitHubLink>
        </StartSection>
    );
}

const StartSection = styled.section`
    margin: auto;
    max-width: 1250px;
    width: 100%;
`;

const StartTitle = styled.p`
    font-size: 30px;
    text-align: center;
    font-weight: bold;
`;

const StartLogo = styled.img`
    position: relative;
    top: 12px;
    width: 50px;
`;

const Hello = styled.span`
    position: relative;
    right: 10px;
`;

const StickyBoard = styled.span`
    position: relative;
    left: 10px;
`;

export const Circle = styled.span`
    position: relative;
    z-index: 0;

    &::before {
        content: '';
        width: 20px;
        height: 20px;

        position: absolute;
        left: -7px;
        top: -5px;
        z-index: -1;

        background-color: rgb(255, 193, 7);
        border-radius: 50%;
    }
`;

const StartDisc = styled.p`
    font-size: 18px;
    text-align: center;
`;

const GitHubLink = styled.div`
    max-width: 500px;
    width: 100%;

    display: flex;
    justify-content: space-evenly;
    margin: 50px auto;
`;

const LinkBtn = styled.a`
    height: 50px;
    display: flex;
    align-items: center;

    text-decoration: none;
    text-align: center;
    font-size: 15px;

    background-color: rgb(255, 193, 7);
    border-radius: 5px;

    cursor: pointer;

    & span {
        margin: 0 auto;
        color: black;
        font-weight: bold;
    }

    &:hover,
    &:active {
        transform: scale(0.9);
        transition: all 0.2s ease-in-out;
        background-color: orange;
    }
`;

const Star = styled(LinkBtn)`
    width: calc(100% / 5);
`;

const Follow = styled(LinkBtn)`
    width: calc(100% / 3);
`;
