import React from  'react'
import Link from 'next/link'
import Image from 'next/image'

export default function All() {
    return (
        <>
            <Image
                src="/images/profile.jpg"
                height={144}
                width={144}
                alt="Leo Missel"
            />
            <h1>Todos os personagens</h1>
            <h2>
                <Link href="/">
                    <a>Voltar para home</a>
                </Link>
            </h2>
        </>
    )
}