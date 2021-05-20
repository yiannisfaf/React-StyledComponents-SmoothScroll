import React, { useState } from 'react';
import { 
    Column2,
    ImgWrap,
    InfoContainer,
    InfoRow,
    InfoWrapper,
    Column1,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    BtnWrap,
    Img
} from './InfoElements';
import { Button } from '../ButtonElement';

const InfoSection = ({lightBg, id, imgStart, topLine, lightText, darkText, description, buttonLabel, alt, headline, primary, dark, dark2, img }) => {
    return (
        <>
            <InfoContainer id={id} lightBg={lightBg}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <BtnWrap>
                                    <Button 
                                        to="home" 
                                        smooth={true}
                                        exact="true"
                                        spy={true}
                                        offset={-80}
                                        duration={500}
                                        primary={primary ? 1 : 0}
                                        dark={dark ? 1 : 0}
                                        dark2={dark2 ? 1 : 0}
                                    >{buttonLabel}</Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt} />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
};

export default InfoSection;