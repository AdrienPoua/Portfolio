import React from 'react';
import Subtitle from '../../components/Subtitle';
import Scroller from '../../components/Scroller';


export default function Index() {
    return (
        <section className='bg-black text-light p-6-custom '>
            <Subtitle
                anchor={'about'}
                content={'About'}
                version={'light'}
            />
            <Scroller speed="slow" />
            <Scroller speed="fast" reverse />
        </section>
    );
}
