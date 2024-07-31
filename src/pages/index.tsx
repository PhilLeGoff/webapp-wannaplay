import Image from 'next/image';
import { Inter, Tauri } from 'next/font/google';
import { useSelector } from 'react-redux';
import Welcome from './Welcome';
// import { Main } from "next/document";
import Main from '@/pages/Main';

const tauri = Tauri({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export default function Home() {
  const userData = useSelector((state: any) => state.user.value);

  return (
    <body className={tauri.className}>
      {userData.token ? <Main /> : <Welcome />}
    </body>
  );
}
