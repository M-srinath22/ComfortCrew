import React from 'react';
import styled from 'styled-components';

// Sample blog posts data related to home repair
const blogPosts = [
  {
    title: '5 Essential Home Repairs You Should Know',
    date: 'August 1, 2024',
    excerpt: 'Discover the five most important home repairs every homeowner should be familiar with to maintain their property effectively.',
    image: 'https://www.homee.com/hubfs/AdobeStock_185260488-1.jpeg',
  },
  {
    title: 'How to Fix a Leaky Faucet: A Step-by-Step Guide',
    date: 'July 25, 2024',
    excerpt: 'Learn how to fix a common household issue – a leaky faucet – with this easy-to-follow guide and save on plumber costs.',
    image: 'https://www.lvvwd.com/assets/images/leaky-faucet-blue-drop-16x7.jpg',
  },
  {
    title: 'DIY Tips for Repairing Drywall Damage',
    date: 'July 15, 2024',
    excerpt: 'A comprehensive guide to repairing drywall damage in your home, including tips and tricks for a professional-looking finish.',
    image: 'https://www.gulfremodeling.com/wp-content/uploads/2018/01/drywall-installation-and-repair.png',
  },
  {
    title: 'Essential Tools for Home Maintenance',
    date: 'July 10, 2024',
    excerpt: 'Find out which tools are essential for every homeowner to handle routine maintenance and minor repairs around the house.',
    image: 'https://www.sandipressley.com/wp-content/uploads/2019/05/Home_Repair.jpg',
  },
  {
    title: 'How to Choose the Right Paint for Your Home',
    date: 'June 30, 2024',
    excerpt: 'Learn how to select the perfect paint for your home’s interior and exterior projects, including tips on color and finish.',
    image: 'https://www.dreamlandsdesign.com/wp-content/uploads/2020/09/How-to-Maintain-the-Crisp-Paint-Color-of-Your-Interiors.jpg',
  },
];

// Styled components
const AppContainer = styled.div`
  text-align: center;
  background-color: #f8f9fa;
  min-height: 100vh;
  padding: 20px;
`;

const Header = styled.header`
  background-color: #282c34;
  padding: 20px;
  color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const BlogsContainer = styled.div`
  max-width: 1200px;
  margin: 40px auto;
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
`;

const BlogCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  }
`;

const BlogImage = styled.img`
  width: 100%;
  height: 400px; /* Increased height */
  object-fit: cover;
`;

const BlogContent = styled.div`
  padding: 20px;
  text-align: left;
`;

const BlogTitle = styled.h3`
  margin-top: 0;
  font-size: 28px;
  color: #333;
`;

const BlogDate = styled.p`
  font-size: 16px;
  color: #777;
  margin: 5px 0;
`;

const BlogExcerpt = styled.p`
  font-size: 18px;
  color: #555;
`;

const ReadMoreLink = styled.a`
  display: inline-block;
  margin-top: 15px;
  font-size: 18px;
  color: #007bff;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #0056b3;
  }
`;

// Main component
const Blogs = () => {
  return (
    <AppContainer>
      <Header>
        <h1>Home Repair Tips & Tricks</h1>
      </Header>
      <BlogsContainer>
        {blogPosts.map((post, index) => (
          <BlogCard key={index}>
            <BlogImage src={post.image} alt={post.title} />
            <BlogContent>
              <BlogTitle>{post.title}</BlogTitle>
              <BlogDate>{post.date}</BlogDate>
              <BlogExcerpt>{post.excerpt}</BlogExcerpt>
              <ReadMoreLink href="#">Read More</ReadMoreLink>
            </BlogContent>
          </BlogCard>
        ))}
      </BlogsContainer>
    </AppContainer>
  );
};

export default Blogs;
