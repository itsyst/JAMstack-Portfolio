import React from "react"
import Title from "./Title"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
import styled, { css } from "styled-components"

const query = graphql`
  {
    allStrapiJobs(sort: { fields: strapiId, order: DESC }) {
      nodes {
        strapiId
        company
        date
        position
        desc {
          id
          name
        }
      }
    }
  }
`

const Jobs = () => {
    const data = useStaticQuery(query)
    const { allStrapiJobs: { nodes: jobs } } = data
    let index = 0;
    return (
        <StyledJobs>
            <Title title="erfarenhet" />
            <StyledJobsContainer>
                {jobs.map((item) => {
                    index = index + 1;
                    return (
                        <StyledJobsCard key={item.strapiId}>
                            <StyledJobsInfo>
                                <h3>{item.position}</h3>
                                <h4>{item.company}</h4>
                                <p>{item.date}</p>
                            </StyledJobsInfo>
                            <StyledNumber>
                                <span>{index}</span>
                            </StyledNumber>
                            <StyledJobsContent>
                                <p>
                                    {item.desc.map((element) => {
                                        return (
                                            <>{element.name}</>
                                        )
                                    })}
                                </p>
                            </StyledJobsContent>
                        </StyledJobsCard>
                    )
                })}

            </StyledJobsContainer>
            <StyledJobsBtn to="/about" middle="true">
                Mitt CV
             </StyledJobsBtn>
        </StyledJobs>
    )
}

const StyledJobs = styled.section`
    background: ${props => props.theme.colors.white};
    width: 100%;
    padding: 5rem;

    @media screen and (max-width: 345px) {
       padding:5rem 0;
    }
`
const StyledJobsInfo = styled.div`
    width:100%;
    margin-left:0;
    padding:12px;
`
const StyledJobsContainer = styled.div`
    margin-top: 0;
    position: relative;

    @media only screen and (min-width: 768px) and (max-width: 991px) {
      margin-top: 0;
    }
    @media (max-width: 767px) {
      margin-top: 0; 
    }
    ::before {
    content: '';
        position:absolute;
        left: 50%;
        -webkit-transform: translateX(-50%);
        -moz-transform: translateX(-50%);
        -ms-transform: translateX(-50%);
        -o-transform: translateX(-50%);
        transform: translateX(-50%);
        top: 0;
        width: 2px;
        height: 100%;
        background-color: ${props => props.theme.colors.primary5};
    }
    @media only screen and (min-width: 769px) and (max-width: 991px) {
    ::before {
        display: none; }
    }
    @media (max-width: 767px) {
    ::before {
        display: none; } 
    }
`

const StyledNumber = styled.div`
    grid-column:2/3;

  @media only screen and (min-width: 769px) and (max-width: 991px) {
    display: none;
  }
  @media (max-width: 767px) {
      display: none; 
  } 
  span{
    position:absolute;
    padding:2px;
    width:55px;
    height:57px;
    line-height: 51px;
    text-align: center;
    border: 2px solid  ${props => props.theme.colors.primary5};
    font-family: "Open Sans", sans-serif;
    color:  ${props => props.theme.colors.primary5};
    border-radius: 50%;
    -webkit-transition: all 0.3s ease-out 0s;
    -moz-transition: all 0.3s ease-out 0s;
    -ms-transition: all 0.3s ease-out 0s;
    -o-transition: all 0.3s ease-out 0s;
    transition: all 0.3s ease-out 0s;
    background-color: #fff;
  }
`
const StyledJobsContent = styled.div`
    grid-column:3/ 4;
    -webkit-box-shadow: 0px 0px 10px 0px rgba(196, 196, 196, 0.3);
    -moz-box-shadow: 0px 0px 10px 0px rgba(196, 196, 196, 0.3);
    box-shadow: 0px 0px 15px 0px rgba(196, 196, 196, 0.3);
    border-radius: 10px;
    background-color: #fff;
    width: 100%;
    -webkit-transition: all 0.3s ease-out 0s;
    -moz-transition: all 0.3s ease-out 0s;
    -ms-transition: all 0.3s ease-out 0s;
    -o-transition: all 0.3s ease-out 0s;
    transition: all 0.3s ease-out 0s; 
    margin-left:0;
    padding:12px;
    p {
        -webkit-transition: all 0.3s ease-out 0s;
        -moz-transition: all 0.3s ease-out 0s;
        -ms-transition: all 0.3s ease-out 0s;
        -o-transition: all 0.3s ease-out 0s;
        transition: all 0.3s ease-out 0s; 
    }
`

const StyledJobsCard = styled.article`

   @media only screen and (min-width: 767px){
   align-items:center;
   justify-content:space-evenly;
   margin-top: 25px;
   display:grid; 
   grid-template-columns: 1fr 62px 1fr;
   grid-column: 1fr 1fr 1fr 1fr;
   }
    
   :nth-of-type(even)  ${StyledJobsInfo}{
        @media (min-width: 345px) {
            grid-column:3/4;
            grid-row:1/2;
            margin: -10px;
        }
    }
    :nth-of-type(even) ${StyledJobsContent}{
        @media (min-width: 345px) {
            grid-column:1/2;
            grid-row:1/2;
            margin: -10px;
        }
    } 

    @media (max-width: 767px) {
        margin-top: 25px;
    }

    h3{
       width: 46%;
       font-size: 22px;
       font-weight: 600;
       @media only screen and (min-width: 768px) and (max-width: 991px) {  
       width: 100%; }  
       @media (max-width: 767px) {
       width: 100%; 
       font-size: 20px;
    } 
   }
   h4{
    color:${props => props.theme.colors.primary4};
    font-size: 16px;
    font-weight: 600;
    margin-top: 10px; 
    @media (max-width: 767px) {
            font-size: 15px; 
    } 

   }
   span{
        font-size: 34px;
        font-weight: 400;
        color: #2caeba;
        margin-top: 10px; 
        @media (max-width: 767px) {        
        font-size: 15px; 
    }  
   }
  :hover ${StyledNumber} span{
       background-color:${props => props.theme.colors.primary5};
       color:${props => props.theme.colors.white};
   }  
   :hover ${StyledJobsContent} {
      background-color: ${props => props.theme.colors.primary5};
      p{color:${props => props.theme.colors.white};}
   }
`

const StyledJobsBtn = styled(Link)`
    text-transform: uppercase;
    background: ${props => props.theme.colors.primary5};
    color: ${props => props.theme.colors.primary9};
    padding: 0.375rem 0.75rem;
    letter-spacing: ${props => props.theme.spacings.xxSmall};
    display: inline-block;
    font-weight: 700;
    -webkit-transition: ${props => props.theme.animations.transition};
    transition: ${props => props.theme.animations.transition};
    font-size: 0.875rem;
    border: 2px solid transparent;
    cursor: pointer;
    box-shadow: ${props => props.theme.shadows.darkShadow};
    border-radius:${props => props.theme.radius.small};
    text-decoration: none;
    padding: 0.6rem 1.2rem;

    :hover {
        color: ${props => props.theme.colors.primary1};
        background: ${props => props.theme.colors.primary5};
        transform: translateY(-3px);
        box-shadow: ${props => props.theme.shadows.darkShadow};

        ::after {
        transform: scaleX(1.4) scaleY(1.6);
        opacity: 0; 
        }
    }
    :active,
    :focus {
        outline: none;
        transform: translateY(-1px);
        box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2); 
    }

    ${props => props.middle && css`
        display: block;
        width: 12rem;
        text-align: center;
        margin: 0 auto;
        margin-top: 3rem;
    `}
`

export default Jobs