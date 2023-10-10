import React from 'react';
import Subtitle from '../../components/Subtitle';
import { useRef } from 'react';
import Scroller from '../../components/Scroller';


export default function Index() {
    const container = useRef(null);

    return (
        <section className='bg-black text-light p-6-custom '>
            <Subtitle
                anchor={'about'}
                content={'About'}
                version={'light'}
            />
            <Scroller speed="slow" />
            <Scroller speed="fest" reverse />
        </section>
    );
}
