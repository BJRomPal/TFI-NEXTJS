import { NextResponse, NextRequest} from 'next/server'

export function middleware(req, res) {
    const { pathname } = req.nextUrl
    if (pathname == '/profile') {
        return NextResponse.redirect('/')
    }
    return NextResponse.next()
}
