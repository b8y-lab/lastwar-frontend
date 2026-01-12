import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
// import { getSessionCookie, updateSessionCookie } from '@/lib/session/sessionCookie.ts';

export async function proxy(request: NextRequest) 
{
    // const path = request.nextUrl.pathname;
    // const session = await getSessionCookie();

    // if (process.env.NODE_ENV === 'development')
    //     return NextResponse.next();

    // if (path.startsWith('/auth'))
    //     return NextResponse.next();
    
    // if (session == null)
    //     return NextResponse.redirect(new URL('/auth', request.url));

    // return updateSession(request);
    
    // TODO: Remove
    return NextResponse.next();
}

// WARNING: it needs to be regexp! Other methods will not work properly.
export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\\\.png$).*)'],
};