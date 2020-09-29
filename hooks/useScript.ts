import { useEffect } from 'react';

export const useScript = (src: string) => {
    useEffect(() => {
        /*const script = document.createElement('script');
    
        script.src = src;

        document.body.appendChild(script);*/
    }, [src]);
};
