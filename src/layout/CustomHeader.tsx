import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import GithubCorner from 'react-github-corner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import './global.css'

const CustomHeader = () => {
    const { site: { siteMetadata } } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        repo,
                        linkedIn,
                        github,
                        stackOverflow,
                        email
                    }
                }
            }
    `);
    const { title, repo, linkedIn, stackOverflow, email } = siteMetadata;
    return (
        <>
            <GithubCorner bannerColor="#FFFFFF" octoColor="#000000" href={repo} rel="noopener noreferrer" target="_blank" />
            <header className="main-header">
                <div>{title} </div>
                <div className="contacts" >
                    <div>
                        <a href={email} target="_blank" rel="noopener noreferrer" >
                            <FontAwesomeIcon icon={faEnvelope} size="lg" title="Email" color="#FFFFFF" />
                        </a>
                    </div>
                    <div>
                        < a href={stackOverflow} target="_blank" rel="noopener noreferrer" >
                            <FontAwesomeIcon icon={faStackOverflow} size="lg" title="StackOverflow" color="#FFFFFF" />
                        </a>
                    </div>
                    <div>
                        <a href={linkedIn} target="_blank" rel="noopener noreferrer" >
                            <FontAwesomeIcon icon={faLinkedin} size="lg" title="LinkedIn" color="#FFFFFF" />
                        </a>
                    </div>
                </div>
            </header>
        </>
    )
};


export default CustomHeader