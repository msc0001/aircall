import React from 'react'

export default function DialedCallIcon({ size = 16 }) {
    return (
        <svg height={size} width={size}  focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="LocalPhoneRoundedIcon"><path d="m19.23 15.26-2.54-.29c-.61-.07-1.21.14-1.64.57l-1.84 1.84c-2.83-1.44-5.15-3.75-6.59-6.59l1.85-1.85c.43-.43.64-1.03.57-1.64l-.29-2.52c-.12-1.01-.97-1.77-1.99-1.77H5.03c-1.13 0-2.07.94-2 2.07.53 8.54 7.36 15.36 15.89 15.89 1.13.07 2.07-.87 2.07-2v-1.73c.01-1.01-.75-1.86-1.76-1.98z"></path></svg>
    );
}