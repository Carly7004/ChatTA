import logoImage from '@/images/logos/logo.png';
import Link from 'next/link';
import { AspectRatio } from '../ui/aspect-ratio';
import Image from 'next/image';

const Logo = () => {
  return (
    <Link href='/' prefetch={false} className='overflow-hidden'>
      <div className='flex items-center w-24 h-14 m-4'>
        <AspectRatio
          ratio={16 / 9}
          className='flex items-center justify-center'
        >
          <Image
            priority
            src={logoImage}
            alt='logo'
            className='dark:filter dark:invert'
          />
        </AspectRatio>
      </div>
    </Link>
  );
};
export default Logo;
