import { NextResponse } from "next/server";

const myTestUser =  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
}

export async function POST(req: Request) {
    const { login, password } = await req.json()
    if (!login || !password) {
        return NextResponse.json({ status: 'Authentication failed', user: null})
    }

    if (login === 'test' && password === 'test') {
        return NextResponse.json({ status: 'success', user: myTestUser })
    } 

    return NextResponse.json({ status: 'Authentication failed', user: null})

}