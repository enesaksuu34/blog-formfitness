import type { GetStaticProps, NextPage } from "next";
import { getAllMdx } from "@/lib/mdx";
import { MDXFrontMatter } from "@/lib/types";
import { Page } from "@/components/Page";
import { PostList } from "@/components/PostList";

interface PostsProps {
  posts: Array<MDXFrontMatter>;
}

const Posts: NextPage<PostsProps> = ({ posts }) => {
  return (
    <>
      <Page
        title="Gönderiler"
        description="Form VIP Fitness ile fitness dünyasındaki en son bilgileri, trendleri ve çözümleri keşfedin. Blog gönderilerimiz, egzersiz ipuçlarından beslenme stratejilerine, sağlıklı yaşam önerilerinden spor psikolojisine kadar geniş bir yelpazeyi kapsıyor. Sağlıklı ve formda kalmak için ilham verici makalelerimize göz atın."
      >
        <PostList posts={posts} />
      </Page>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const mdxFiles = getAllMdx().map((post) => post["frontMatter"]);
  return {
    props: {
      posts: mdxFiles,
    },
  };
};

export default Posts;
