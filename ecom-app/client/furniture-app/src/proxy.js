import { NextResponse } from 'next/server';

// 1. Define your path rules
const protectedRoutes = ['/dashboard',"/checkout"];


export function proxy(request) {
  const { pathname } = request.nextUrl;
  //   /dashboard 
  //  //login
 
  
  // 2. Optimistic check: Look for an authentication session token/cookie
  const token = request.cookies.get('TOKEN')?.value;  

  

  // 3. Rule: If trying to access a protected URL without a token, redirect to login
  const isProtectedRoute = 
  protectedRoutes.some((route) => pathname.startsWith(route));  //dashboard
                                                                //checkout
  //isProtectedRoute true
  
  if (isProtectedRoute && (token==null ||token=="" || token==undefined)) {
    const loginUrl = new URL('/login', request.url);
 
    return NextResponse.redirect(loginUrl);
  }

 return NextResponse.next();
}