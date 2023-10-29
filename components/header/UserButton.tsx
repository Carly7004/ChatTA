'use client';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import UserAvater from './UserAvater';
import { Session } from 'next-auth';
import { Button } from '../ui/button';
import { signIn, signOut } from 'next-auth/react';

const UserButton = ({ session }: { session: Session | null }) => {
  //Session data
  if (!session)
    return (
      <Button variant={'outline'} onClick={() => signIn()}>
        Sign In
      </Button>
    );

  return (
    session && (
      <DropdownMenu>
        <DropdownMenuTrigger>
          <UserAvater name={session.user?.name} image={session.user?.image} />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>{session.user?.name}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => signOut()}>
            Sign Out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  );
};
export default UserButton;
