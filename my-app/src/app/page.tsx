import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import CardSection from '../components/CardSection';
import styles from '../app/page.module.css';

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Squirtle</title>
                <meta name="description" content="conteudo" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header titulo="Squirtle" />

            <main className={styles.main}>
                <CardSection titulo="Seção 1">
                    <p>Teste</p>
                </CardSection>
            </main>
        </div>
    );
}