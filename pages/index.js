import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <Layout>
      <div>
        <h1>Livos em Destaque</h1>
        <ul>
          <li>Livro 01</li>
          <li>Livro 02</li>
          <li>Livro 03</li>
          <li>Livro 04</li>
          <li>Livro 05</li>
          <li>Livro 06</li>
        </ul>
      </div>
    </Layout>
  );
}
