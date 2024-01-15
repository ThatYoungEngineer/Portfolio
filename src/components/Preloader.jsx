import Box from '@mui/material/Box'
import LinearProgress from '@mui/material/LinearProgress'
import { createTheme, ThemeProvider } from '@mui/material/styles'


const theme = createTheme({
    palette: {
      primary: {
        main: '#ccc',
      },
    },
  });

const Preloader = () => {
    return (
        <ThemeProvider theme={theme}>
            <main className="w-screen h-screen overflow-hidden bg-[#1a1a1a] flex items-center justify-center">
                <section className='flex flex-col gap-16 items-center justify-center w-1/2'>
                    <div id='content__head'> 
                        <h2 className='font-Poppins-Medium'>Loading</h2>
                        <h2 className='font-Poppins-Medium'>Loading</h2>
                    </div>
                    <Box sx={{ width: '75%', height: 3}}>
                        <LinearProgress sx={{ width: '100%', height: 4, backgroundColor: '#55e6a5', borderRadius: '30px' }} color='primary' />
                    </Box>
                </section>
            </main>
        </ThemeProvider>
    )
}

export default Preloader