//https://www.gatsbyjs.org/packages/gatsby-source-rss-feed/
import * as React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  p.small{
    padding: 0 1rem
  }
`

const Heading2 = styled.h2`
    color: #fff;
    font-size: 1rem;
    font-weight: 500;
    padding: 0;
    margin-top: 0;
`

const List = styled.ul`
    list-style-type: none;
    padding: 0;

    
    li{    
      padding: 0;
      a{
          font-size: inherit;
          margin: 0;
          color: inherit;
        text-decoration: none;
          
          :hover{
          }
      }
    }
`

export const LatestBlogPosts = ({ blogPosts }) => (
    <Wrapper>
        <Heading2><a href="https://www.acc.edu.au/blog/" target="_blank">Latest Blog Posts</a></Heading2>
        <List>
            {blogPosts.edges.map(({ node }) => {
                return (
                    <li key={node.id}>
                        <a href={node.link}>{node.title}</a>
                    </li>
                )
            })}
        </List>
        <p><a href="https://www.acc.edu.au/blog/">See more articles</a></p>
    </Wrapper>
);

