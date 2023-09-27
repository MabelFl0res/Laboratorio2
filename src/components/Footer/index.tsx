import styles from './styles.module.css';
const Footer = () => {
    return (
<footer className={styles.footer}>
        <div className={styles.column}>
        
        <ul>
            <li>Sitemap</li>
            <li>Home</li>
            <li>Post</li>
            <li>About</li>
        </ul>
        </div>
        <div className={styles.column}>
        <ul>
            <li>Conectate con nosotros</li>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Tiktok</li>
        </ul>
        </div>
        <div className={styles.column}>
        <div className="relative flex place-items-center before:absolute justify-center">
        <img
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
        />
      </div>
      </div>
      <div className={styles.column}>
      <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
            <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            >
            By{' '}
                <img
                src="/vercel.svg"
                alt="Vercel Logo"
                className="dark:invert"
                width={100}
                height={24}
            />
            </a>
        </div>
    </div>
      <div className={styles.column}>
      <div className={styles.column}>
        <img src="./assets/img1.jpeg" alt="test" />
      </div>
      </div>
    </footer>
  );
};


export default Footer;