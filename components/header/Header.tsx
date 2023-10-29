import { getServerSession } from 'next-auth';
import DarkModeToggle from './DarkModeToggle';
import Logo from './Logo';
import UserButton from './UserButton';
import { authOptions } from '@/auth';
import Link from 'next/link';
import { MessageSquareIcon } from 'lucide-react';
import CreateChatButton from './CreateChatButton';

async function Header() {
  const session = await getServerSession(authOptions);
  console.log(session);

  return (
    <header className='sticky top-0 z-50 bg-white dark:bg-gray-900'>
      <nav className='flex flex-col sm:flex-row items-center p-5 pl-2 bg-white dark:bg-gray-900 max-w-7xl mx-auto'>
        <Logo />
        <div className='flex-1 flex items-center justify-end space-x-4'>
          {/* languageSelect */}
          {/* session && () */}
          {session ? (
            <>
              <Link href='/chat' prefetch={false}>
                <MessageSquareIcon className='text-black dark:text-white' />
              </Link>
              <CreateChatButton />
            </>
          ) : (
            <>
              <Link href='/pricing'>Price</Link>
            </>
          )}

          {/* DarkModeToggle */}
          <DarkModeToggle />
          {/* userProfilePic */}
          <UserButton session={session} />
        </div>
      </nav>
      {/* upgrade Banner */}
    </header>
  );
}
export default Header;
