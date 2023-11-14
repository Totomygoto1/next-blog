import React, { useEffect, useState, useMemo } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import SideBanner from '/public/assets/blog/images/lemon5.jpg';
import Banner from '/public/assets/blog/images/banner.png';
import Image from 'next/image';
import Link from 'next/link';

const Recipe = () => {
  const router = useRouter();
  const query = router.query;
  const id = query.id;

  const [posts, setPosts] = useState([]);

  useMemo(async () => {
    console.log(id);
    const baseURL = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;

    await axios
      .get(baseURL)

      .then((response) => {
        setPosts(response.data.meals);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div>
        <Image src={Banner} alt="Food" />

        <table>
          <tr>
            <td width="50"></td>
            <td>
              <h3>
                <br />
                <strong>Recipe</strong>
              </h3>
              <br />
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>

          {posts.map((post, index) => (
            <tr key={index}>
              <td width="50"></td>
              <td width="150" valign="top">
                {post.strMeasure1} {post.strIngredient1}
                <br />
                {post.strMeasure2} {post.strIngredient2}
                <br />
                {post.strMeasure3} {post.strIngredient3}
                <br />
                {post.strMeasure4} {post.strIngredient4}
                <br />
                {post.strMeasure5} {post.strIngredient5}
                <br />
                {post.strMeasure6} {post.strIngredient6}
                <br />
                {post.strMeasure7} {post.strIngredient7}
                <br />
                {post.strMeasure8} {post.strIngredient8}
                <br />
                {post.strMeasure9} {post.strIngredient9}
                <br />
                {post.strMeasure10} {post.strIngredient10}
                <br />
                {post.strMeasure11} {post.strIngredient11}
                <br />
                {post.strMeasure12} {post.strIngredient12}
                <br />
                {post.strMeasure13} {post.strIngredient13}
                <br />
                {post.strMeasure14} {post.strIngredient14}
                <br />
                {post.strMeasure15} {post.strIngredient15}
                <br />
                {post.strMeasure16} {post.strIngredient16}
                <br />
                {post.strMeasure17} {post.strIngredient17}
                <br />
                {post.strMeasure18} {post.strIngredient18}
                <br />
                {post.strMeasure19} {post.strIngredient19}
                <br />
                {post.strMeasure20} {post.strIngredient20}
                <br />
                <br />
                <br />
                <Link href="/recipes-list">GO BACK</Link>
              </td>
              <td width="25"></td>
              <td width="250" valign="top">
                {post.strInstructions}
              </td>
              <td width="25"></td>
              <td width="250" valign="top">
                <Image src={SideBanner} alt="Food" />
              </td>
            </tr>
          ))}
        </table>
      </div>
    </>
  );
};

export default Recipe;
