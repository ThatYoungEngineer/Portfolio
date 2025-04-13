import PropTypes from 'prop-types'
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

Preloader.propTypes = {
  animateOut: PropTypes.bool.isRequired,
}

const Preloader = ({ animateOut }) => {
    return (
        <ThemeProvider theme={theme}>
            <main className={`fixed top-0 left-0 w-screen h-screen ${animateOut && '-translate-y-full'} overflow-hidden bg-[#1a1a1a] flex items-center justify-center z-[99999999] transition-transform ease-in-out duration-1000`}>
                <section className='flex flex-col gap-16 items-center justify-center w-screen sm_tablet:w-1/2'>
                    <div id='content__head'> 
                        <h2 className='font-Poppins-Medium text-7xl sm_desktop:text-9xl'>Loading</h2>
                        <h2 className='font-Poppins-Medium text-7xl sm_desktop:text-9xl'>Loading</h2>
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