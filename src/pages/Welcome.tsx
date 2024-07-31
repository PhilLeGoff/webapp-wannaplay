import Header from '@/components/welcome/Header';
import Hero from '@/components/welcome/Hero';

type Props = {};

export default function Welcome({}: Props) {
  return (
    <div className='flex w-full flex-col md:h-screen '>
      <Header />
      <Hero />
    </div>
  );
}
