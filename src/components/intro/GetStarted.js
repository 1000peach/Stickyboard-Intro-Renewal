// src/components/intro/GetStarted.js

import React from 'react';
import styled from 'styled-components';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function GetStart() {
    const stickyboardURL = 'https://github.com/soaple/stickyboard';

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
            <StartDesc>
                <Circle>Fully customizable </Circle>Web Admin/Dashboard starter
                kit based on React.
            </StartDesc>

            <BtnDiv>
                <BtnGithub name={'Star'} link={stickyboardURL} />
                <div style={{ width: '10px' }}></div>
                <BtnGithub
                    name={'Follow @soaple'}
                    link={'https://github.com/soaple'}
                />
                <a href={stickyboardURL} target="_blank">
                    <StarCnt>
                        <p>128</p>
                    </StarCnt>
                </a>
            </BtnDiv>
        </StartSection>
    );
}

const btnStyles = makeStyles({
    btn: {
        height: '40px',

        fontSize: '16px',
        fontWeight: 'bold',
        backgroundColor: 'rgb(255, 193, 7)',

        '&:hover': {
            backgroundColor: '#F2B600',
        },
    },
});

function BtnGithub({ name, link }) {
    const classes = btnStyles();

    return (
        <Button
            className={classes.btn}
            variant="contained"
            startIcon={<FontAwesomeIcon icon={faGithub} />}
            onClick={() => window.open(link)}>
            {name}
        </Button>
    );
}

const StartSection = styled.section`
    margin: auto;
    max-width: 1250px;
    width: 100%;
    text-align: center;

    & a {
        text-decoration: none;
        color: black;

        &:hover,
        &:active {
            color: rgb(255, 193, 7);
        }
    }
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

const StartDesc = styled.p`
    font-size: 18px;
    text-align: center;
`;

const BtnDiv = styled.div`
    position: relative;

    margin: auto;
    width: 320px;
    height: 150px;

    display: flex;
    justify-content: center;
    align-items: center;
`;

const StarCnt = styled.div`
    position: absolute;
    bottom: 0;
    left: 23px;

    margin: 0 15px;
    width: 50px;
    height: 30px;

    font-weight: bold;
    background-color: #fafafa;

    border: 2px solid #d4d4d4;
    border-radius: 4px;

    display: inline-flex;
    justify-content: center;

    &::before {
        content: '';
        position: absolute;
        top: -7px;

        width: 15px;
        height: 15px;

        background-color: #fafafa;
        border: 2px solid #d4d4d4;

        transform: rotate(-45deg);
    }

    & p {
        position: relative;
        margin: auto;
        padding: 2px;
        height: 100%;

        background-color: #fafafa;
        border-radius: 4px;
    }
`;
