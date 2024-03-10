import Footer from "@/components/Footer";
import Header from "@/components/Header";

import s from "./page.module.css";

export default function Home() {
  return (
    <>
      <Header />
      <ul className={s.list}>
        <li>
          <span className={s.red}>Red:</span> Something about yesterday
        </li>
        <li>
          <span className={s.orange}>Orange:</span> Something you do well
        </li>
        <li>
          <span className={s.yellow}>Yellow:</span> Something you learned this week
        </li>
        <li>
          <span className={s.blue}>Blue:</span> Something you love about your family
        </li>
        <li>
          <span className={s.brown}>Brown:</span> Something you can&apos;t live without
        </li>
        <li>
          <span className={s.green}>Green:</span> Something you watch/listen to
        </li>
      </ul>
      <Footer />
    </>
  );
}
