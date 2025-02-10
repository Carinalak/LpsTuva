import { useEffect, useState } from "react";
import { supabase } from "../components/supabase";
import { H1PurpleSecond } from "../components/styled/Fonts";
import { BackgroundOriginal, TextWrapper, WrapperWhite } from "../components/styled/Wrappers";
import { styled } from "styled-components";
import { BREAKPOINT_TABLET, BREAKPOINT_DESKTOP } from "../components/styled/Variables";

const PostWrapper = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const PostTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0;
  text-align: center;
`;

const PostDate = styled.span`
  font-size: 0.7rem;
  color: #777;
  margin-left: 10px;
`;

const PostContent = styled.p`
  font-size: 1rem;
  //line-height: 1.6;
`;

const PostImage = styled.img`
  width: 300px;
  margin-bottom: 60px;
  border-radius: 10px;

    @media screen and (min-width: ${BREAKPOINT_TABLET}) {
      width: 400px;
  }
  @media screen and (min-width: ${BREAKPOINT_DESKTOP}) {
      width: 500px;
      margin-bottom: 80px;
  }
`;


export const TitleHomeDateWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding-bottom: 10px;
    border: 1px solid black;

    @media screen and (min-width: ${BREAKPOINT_TABLET}) {

      display: grid;
      grid-template-columns: 0.5fr 1.5fr 0.5fr;
      //grid-template-columns: 1fr 1fr 1fr;
      align-items: center;
      gap: 4rem; 
      margin-bottom: 5px;

      & > *:first-child {
        justify-self: right;
      }
      & > *:nth-child(n+2) {
        justify-self: center;
      }
  }
`;


export const HomeTest = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [posts, setPosts] = useState<any[]>([]);

  // Hämta alla inlägg från Supabase
  useEffect(() => {
    const fetchPosts = async () => {
      const { data, error } = await supabase
        .from("content")
        .select("*")
        .order("date", { ascending: false });

      if (error) {
        console.error("Fel vid hämtning av inlägg:", error.message);
      } else {
        setPosts(data);
      }
    };

    fetchPosts();
  }, []);

  // Hjälpfunktion för att konvertera radbrytningar
  const convertNewlinesToBr = (text: string) => {
    return text.split("\n").map((line, index) => (
      <span key={index}>
        {line}
        <br />
      </span>
    ));
  };

  return (
    <BackgroundOriginal>
      <WrapperWhite>
        <H1PurpleSecond>Lps-Tuvas sida</H1PurpleSecond>
        <TextWrapper>
        {posts.map((post) => (
          <PostWrapper key={post.id}>
            <TitleHomeDateWrapper>
              <div></div>
            <PostTitle>{post.title}</PostTitle>
            <PostDate>{new Date(post.date).toLocaleString()}</PostDate>
            </TitleHomeDateWrapper>
            <PostContent>{convertNewlinesToBr(post.content)}</PostContent>
            {post.image_url && <PostImage src={post.image_url} alt={post.title} />}
          </PostWrapper>
          
        ))}
        </TextWrapper>
      </WrapperWhite>
    </BackgroundOriginal>
  );
};

