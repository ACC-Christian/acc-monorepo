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

export const LatestBlogPosts = ({ blogs }) => (
    <Wrapper>
        <Heading2>Latest Blog Postsss</Heading2>
        <List>
            {blogs.edges.map(({ node }) => {
                return (
                    <li key={node.id}>
                        <a href={node.link}>{node.title}</a>
                    </li>
                )
            })}
        </List>
    </Wrapper>
);

