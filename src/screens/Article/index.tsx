import React, { FC } from 'react';
import {ArticlePage, ArticleTitle, ArticleSubTitle, ArticleParagraph, ArticleHeaderContainer, ArticleSectionContainer, ArticleTitleContainer, ArticleHeaderImage, ArticleSectionImage, ArticlePar1Image, ArticlePar2Image} from "../../constans/Layout";

const Article: FC = props => {
    return (  
        <ArticlePage>
          <ArticleHeaderContainer>
            <ArticleHeaderImage source={require("../../../assets/mountain.jpg")} />
            <ArticleTitleContainer>
              <ArticleTitle>Article</ArticleTitle>
              <ArticleParagraph > 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mattis volutpat enim id pellentesque. Curabitur euismod dolor elementum enim auctor efficitur. 
                Donec tellus nulla, tincidunt sed vulputate in, luctus vitae turpis. Nam sed velit vitae enim vulputate pretium eu eu mi. Nam pellentesque ultricies maximus. 
                Aenean ultricies vulputate finibus. In volutpat lacus sit amet tortor feugiat, volutpat egestas enim tincidunt. Nulla ornare magna sed tortor tempor pellentesque.
                Curabitur condimentum felis est,                       
                id molestie nisi scelerisque et. Donec rhoncus, erat vulputate tincidunt ullamcorper, libero risus cursus quam, quis iaculis metus
                nisi ac nisl. Praesent iaculis congue erat, vitae elementum metus consequat at. Nullam ullamcorper fringilla ligula et luctus. Donec sodales tincidunt nisl et 
                sollicitudin. Donec porttitor dignissim nibh non volutpat. Sed metus purus, malesuada eu egestas eu, porta sed ex. Pellentesque at nibh gravida, luctus ipsum at, 
                convallis magna.
              </ArticleParagraph>
            </ArticleTitleContainer>
          </ArticleHeaderContainer>
          <ArticleSectionContainer>            
            <ArticleParagraph > 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mattis volutpat enim id pellentesque. Curabitur euismod dolor elementum enim auctor efficitur. 
                Donec tellus nulla, tincidunt sed vulputate in, luctus vitae turpis. Nam sed velit vitae enim vulputate pretium eu eu mi. Nam pellentesque ultricies maximus. 
                Aenean ultricies vulputate finibus. In volutpat lacus sit amet tortor feugiat, volutpat egestas enim tincidunt. Nulla ornare magna sed tortor tempor pellentesque.
                Curabitur condimentum felis est,                       
                id molestie nisi scelerisque et. Donec rhoncus, erat vulputate tincidunt ullamcorper, libero risus cursus quam, quis iaculis metus
                nisi ac nisl. Praesent iaculis congue erat, vitae elementum metus consequat at. Nullam ullamcorper fringilla ligula et luctus. Donec sodales tincidunt nisl et 
                sollicitudin. Donec porttitor dignissim nibh non volutpat. Sed metus purus, malesuada eu egestas eu, porta sed ex. Pellentesque at nibh gravida, luctus ipsum at, 
                convallis magna.
            </ArticleParagraph>
            <ArticlePar1Image source={require("../../../assets/grass.jpg")} />
          </ArticleSectionContainer>         
          <ArticleSectionContainer>
            <ArticlePar2Image source={require("../../../assets/river.jpg")} />
            <ArticleParagraph > 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mattis volutpat enim id pellentesque. Curabitur euismod dolor elementum enim auctor efficitur. 
                Donec tellus nulla, tincidunt sed vulputate in, luctus vitae turpis. Nam sed velit vitae enim vulputate pretium eu eu mi. Nam pellentesque ultricies maximus. 
                Aenean ultricies vulputate finibus. In volutpat lacus sit amet tortor feugiat, volutpat egestas enim tincidunt. Nulla ornare magna sed tortor tempor pellentesque.
                Curabitur condimentum felis est,                       
                id molestie nisi scelerisque et. Donec rhoncus, erat vulputate tincidunt ullamcorper, libero risus cursus quam, quis iaculis metus
                nisi ac nisl. Praesent iaculis congue erat, vitae elementum metus consequat at. Nullam ullamcorper fringilla ligula et luctus. Donec sodales tincidunt nisl et 
                sollicitudin. Donec porttitor dignissim nibh non volutpat. Sed metus purus, malesuada eu egestas eu, porta sed ex. Pellentesque at nibh gravida, luctus ipsum at, 
                convallis magna.
            </ArticleParagraph>            
          </ArticleSectionContainer>
          <ArticleSectionContainer>            
            <ArticleParagraph > 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mattis volutpat enim id pellentesque. Curabitur euismod dolor elementum enim auctor efficitur. 
                Donec tellus nulla, tincidunt sed vulputate in, luctus vitae turpis. Nam sed velit vitae enim vulputate pretium eu eu mi. Nam pellentesque ultricies maximus. 
                Aenean ultricies vulputate finibus. In volutpat lacus sit amet tortor feugiat, volutpat egestas enim tincidunt. Nulla ornare magna sed tortor tempor pellentesque.
                Curabitur condimentum felis est,                       
                id molestie nisi scelerisque et. Donec rhoncus, erat vulputate tincidunt ullamcorper, libero risus cursus quam, quis iaculis metus
                nisi ac nisl. Praesent iaculis congue erat, vitae elementum metus consequat at. Nullam ullamcorper fringilla ligula et luctus. Donec sodales tincidunt nisl et 
                sollicitudin. Donec porttitor dignissim nibh non volutpat. Sed metus purus, malesuada eu egestas eu, porta sed ex. Pellentesque at nibh gravida, luctus ipsum at, 
                convallis magna.
            </ArticleParagraph>
          </ArticleSectionContainer>
          <ArticleSectionImage source={require("../../../assets/road.jpg")} />
        </ArticlePage>         
    );
};
export default Article;