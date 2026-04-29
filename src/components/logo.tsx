
import { cn } from '@/lib/utils';
import * as React from 'react';
import Image from 'next/image';

export function Logo({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div className={cn('relative h-10 w-40', className)} {...props}>
      <Image
        src="/logo.png"
        alt="Nivaastha Logo"
        fill
        className="object-contain"
        priority
      />
    </div>
  );
}
