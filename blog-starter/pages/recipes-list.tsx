import React, { useEffect, useState, useMemo } from 'react';
import axios from 'axios';
import Banner from '/public/assets/blog/images/banner.png';
import Image from 'next/image';
import Link from 'next/link';

const Recipes = () => {
  const [posts, setPosts] = useState([]);

  useMemo(async () => {
    const baseURL = 'https://www.themealdb.com/api/json/v1/1/search.php?f=t';

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
    <div>
      <Image src={Banner} alt="Food" />

      <table>
        <tr>
          <td width="50"></td>
          <td>
            <h3>
              <br />
              <strong>Recipes</strong>
            </h3>
            <br />
          </td>
          <td></td>
          <td></td>
        </tr>

        {posts.map((post, index) => (
          <tr key={index}>
            <td width="50"></td>
            <td width="250" valign="top">
              <Link
                href={{
                  pathname: '/recipe',
                  query: { id: post.idMeal },
                }}
              >
                {post.strMeal}
              </Link>
            </td>
            <td width="150"></td>
          </tr>
        ))}

        <tr>
          <td width="50"></td>
          <td>
            <br />
            <br />
            <Link href="/">GO BACK</Link>
          </td>
          <td></td>
          <td></td>
        </tr>
      </table>
    </div>
  );
};

export default Recipes;
