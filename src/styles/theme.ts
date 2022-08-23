import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({

    fonts: {
        heading: 'raleway',
        body: 'raleway'
    },
    styles: {
        global: {
            body: {
                bg: 'white',
                color: 'black'
            },
        }
    }
})