import { NextApiResponse } from 'next'
import { NextResponse } from 'next/server'

const GET = async (req: Request, res: NextApiResponse) => {
    return NextResponse.json({ message: 'Hello World!' })
}

const POST = async (req: Request, res: NextApiResponse) => {
    return NextResponse.json({ message: 'Hello World POST!' })
}


export { GET, POST }