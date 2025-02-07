import { useEffect, useState } from "react";
import { supabase } from "../components/supabase";
import { H1PurpleSecond } from "../components/styled/Fonts";
import { BackgroundOriginal, WrapperWhite } from "../components/styled/Wrappers";
import { styled } from "styled-components";

const PostWrapper = styled.div`
  margin-bottom: 20px;
`;

const PostTitle = styled.h3`
  font-size: 1.5em;
  margin: 0;
`;

const PostDate = styled.span`
  font-size: 0.9em;
  color: #777;
  margin-left: 10px;
`;

const PostContent = styled.p`
  font-size: 1.2em;
  line-height: 1.6;
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
        .order("date", { ascending: false }); // Sortera så att den senaste posten kommer först

      if (error) {
        console.error("Fel vid hämtning av inlägg:", error.message);
      } else {
        setPosts(data); // Uppdatera state med alla inlägg
      }
    };

    fetchPosts();
  }, []);

  return (
    <BackgroundOriginal>
      <WrapperWhite>
        <H1PurpleSecond>Lps-Tuvas sida</H1PurpleSecond>

        {posts.map((post) => (
          <PostWrapper key={post.id}>
            <PostTitle>{post.title}</PostTitle>
            <PostDate>{new Date(post.date).toLocaleString()}</PostDate> {/* Visa datum */}
            <PostContent>{post.content}</PostContent>
          </PostWrapper>
        ))}
      </WrapperWhite>
    </BackgroundOriginal>
  );
};
